// content_script.js

g_SelectStr = "";	// ����������
g_IsImage = false;	// �摜���ǂ����̃t���O
g_IsAddressSearch = false;	// Web�A�h���X�������ǂ���(true:Web�A�h���X�����Afalse:�ʏ팟��)
g_settingEngineURL = "http:google.com/search?q=";	// �����G���W��������
g_settingIsAddressForground = true;	// Web�A�h���X���t�H�A�O���E���h�^�u�ŊJ�����ǂ���
g_settingIsSearchForground = true;	// �������ʂ��t�H�A�O���E���h�^�u�ŊJ�����ǂ���
g_settingIsSaveImage = true;	// �h���b�O���h���b�v�ŉ摜��ۑ����邩�ǂ���

// URL����
function isURL(str) {
	var isURI = false;
	var hasScheme = /^(?:(?:h?tt|hxx)ps?|ftp|chrome|file):\/\//i;
	var hasIP = /(?:^|[\/@])(?:\d{1,3}\.){3}\d{1,3}(?:[:\/\?]|$)/;
	var hasDomain = new RegExp(
		// starting boundary
		"(?:^|[:\\/\\.@])" +
		// valid second-level name
		"[a-z0-9](?:[a-z0-9-]*[a-z0-9])" +
		// valid top-level name: ccTLDs + hard-coded [gs]TLDs
		"\\.(?:[a-z]{2}|aero|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|onion|org|pro|tel|travel|xxx)" +
		// end boundary
		"(?:[:\\/\\?]|$)",
		// ignore case
		"i"
	);
	isURI = isURI || hasScheme.test(str);
	isURI = isURI || (!/\s/.test(str) && (hasIP.test(str) || hasDomain.test(str)));
	return isURI;
}

// �ݒ�p�����[�^�X�V 
function updateParam(storage_data) {
	if(!('searchEngine' in storage_data))
	{
		return;
	}
	g_settingEngineURL = getEngineURL(storage_data.searchEngine);
	g_settingIsAddressForground = storage_data.checkboxArray.indexOf("is_address_forground") >= 0 ? true : false;
	g_settingIsSearchForground = storage_data.checkboxArray.indexOf("is_search_forground") >= 0 ? true : false;
	g_settingIsSaveImage = storage_data.checkboxArray.indexOf("is_save_image") >= 0 ? true : false;
}

// �����G���W��������擾
function getEngineURL(selectedEngine) {
	const url = {
		google: ()	=>	{ return "http:google.com/search?q=" },
		bing: ()	=>	{ return "https://www.bing.com/search?q=" },
		baidu: ()	=>	{ return "http://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=" },
		yandex: ()	=>	{ return "https://www.yandex.com/search/?text=" },
		yandex_ru: ()	=>	{ return "https://yandex.ru/search/?text=" },
		yahoo_com: ()	=>	{ return "https://search.yahoo.com/search?p=" },
		yahoo_japan: ()	=>	{ return "https://search.yahoo.co.jp/search?p=" },
		naver: ()	=>	{ return "https://m.search.naver.com/search.naver?query=" },
		duckduckgo: ()	=>	{ return "https://duckduckgo.com/?q=" },
		so: ()		=>	{ return "https://www.so.com/s?q=" },
		ask: ()		=>	{ return "https://www.ask.com/web?q=" },
	}
	return url[selectedEngine].call();
}

// �h���b�O�J�n
function handleDragStart(e) {
	g_IsImage = false;
	g_IsAddressSearch = false;
	g_SelectStr = "";

	if("[object HTMLImageElement]" === e.explicitOriginalTarget.toString()){
		g_IsImage = true;
		g_SelectStr = e.explicitOriginalTarget.src.toString();
	} else {
		if (true === isURL(e.dataTransfer.getData("text/plain"))) {
			g_IsAddressSearch = true;
			g_SelectStr = e.dataTransfer.getData("text/plain");
			g_SelectStr = g_SelectStr.replace(/^(?:t?t|h[tx]{2,})p(s?:\/\/)/i, "http$1");

			if (/^[\w\.\+\-]+@[\w\.\-]+\.[\w\-]{2,}$/.test(g_SelectStr))
				g_SelectStr = "mailto:" + g_SelectStr;

		} else {
			g_SelectStr = g_settingEngineURL + e.dataTransfer.getData("text/plain");
		}
	}
}

// �h���b�O��
function handleDragOver(e) {
	if (e.preventDefault) {
		e.preventDefault();
	}
	// �h���b�O���̃A�C�R����ς���
	e.dataTransfer.dropEffect = 'move';

	return false;
}

// �h���b�O�I��
function handleDragEnd(e) {
	if("" === g_SelectStr) {
		return;
	}

	if(true === g_IsImage) {
		// �摜�̏ꍇ
		if(false === g_settingIsSaveImage) {
			return;
		}
		var anchor = document.createElement('a');
		anchor.href = g_SelectStr;
		anchor.download = '';
		anchor.style.display = 'none';
		document.body.appendChild(anchor);
		anchor.click();
		document.body.removeChild(anchor);
	} else {
		// �^�u���J���ꍇ
		var isforground = true;
		if(g_IsAddressSearch) {
			isforground = g_settingIsAddressForground;
		} else {
			isforground = g_settingIsSearchForground;
		}
		// background.js�Ƀ��b�Z�[�W�𑗐M
		chrome.runtime.sendMessage (
			{
				type: 'searchURL',
				value: g_SelectStr,
				isforground: isforground,
		    	},
			// �R�[���o�b�N�֐�
		    	function (response) {
			        if (response) {
					// response
			        }
		    	}
		);
	}
}

// �h���b�v
function handleDrop(e) {
	// �f�t�H���g�C�x���g�𖳌���
	if (e.preventDefault) {
		e.preventDefault();
	}
	return false;
}


browser.storage.local.get(["searchEngine", "checkboxArray"], function(storage_data){
	updateParam(storage_data);
});
browser.storage.onChanged.addListener(function(storage_data_obj, area) {
	if (area == "local") {
		var storage_data = {
			searchEngine : storage_data_obj.searchEngine.newValue,
			checkboxArray : storage_data_obj.checkboxArray.newValue
		}
		updateParam(storage_data);
	}
});
document.addEventListener("dragstart", handleDragStart, false);
document.addEventListener("dragover", handleDragOver, false);
document.addEventListener("dragend", handleDragEnd, false);
document.addEventListener("drop", handleDrop, false);