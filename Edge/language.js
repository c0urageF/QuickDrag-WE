// language.js
// 言語設定
function setLanguage(language) {
	var lang_set_flag = false;
	for (var language_tbl in obj) {
		if(language_tbl === language[0]) {
			document.getElementById("setting-title").textContent = obj[language_tbl]["setting_title"];
			document.getElementById("engine-title").textContent = obj[language_tbl]["engine_title"];
			document.getElementById("is-address-forground").textContent = obj[language_tbl]["is_address_forground"];
			document.getElementById("is-search-forground").textContent = obj[language_tbl]["is_search_forground"];
			document.getElementById("is-save-image").textContent = obj[language_tbl]["is_save_image"];
			document.getElementById("save-button").value = obj[language_tbl]["save_button"];
			document.getElementById("tab-title").textContent = obj[language_tbl]["tab_title"];
			document.getElementById("tab-open-right").textContent = obj[language_tbl]["tab_open_right"];
			document.getElementById("tab-open-left").textContent = obj[language_tbl]["tab_open_left"];
			document.getElementById("tab-open-last").textContent = obj[language_tbl]["tab_open_last"];
			document.getElementById("tab-open-first").textContent = obj[language_tbl]["tab_open_first"];
			lang_set_flag = true;
			break;
		}
	}

	if(false === lang_set_flag) {
		document.getElementById("setting-title").textContent = obj["en"]["setting_title"];
		document.getElementById("engine-title").textContent = obj["en"]["engine_title"];
		document.getElementById("is-address-forground").textContent = obj["en"]["is_address_forground"];
		document.getElementById("is-search-forground").textContent = obj["en"]["is_search_forground"];
		document.getElementById("is-save-image").textContent = obj["en"]["is_save_image"];
		document.getElementById("save-button").value = obj["en"]["save_button"];
		document.getElementById("tab-title").textContent = obj["en"]["tab_title"];
		document.getElementById("tab-open-right").textContent = obj["en"]["tab_open_right"];
		document.getElementById("tab-open-left").textContent = obj["en"]["tab_open_left"];
		document.getElementById("tab-open-last").textContent = obj["en"]["tab_open_last"];
		document.getElementById("tab-open-first").textContent = obj["en"]["tab_open_first"];
	}
}

browser.i18n.getAcceptLanguages(setLanguage);


// 翻訳テーブル
var obj = {
/* テーブルフォーマット
	"":{
		setting_title		:"",
		engine_title		:" ",
		is_address_forground	:" ",
		is_search_forground	:" ",
		is_save_image		:" ",
		tab_title		:"",
		tab_open_right		:"",
		tab_open_left		:"",
		tab_open_last		:"",
		tab_open_first		:"",
		save_button		:""
	},
*/
	"en":{ // 英語
		setting_title		:"QuickDrag Settings",
		engine_title		:"Search engine ",
		is_address_forground	:" Open tabs for web addresses in the foreground",
		is_search_forground	:" Open tabs for text searches in the foreground",
		is_save_image		:" Use drag-and-drop to download images",
		tab_title		:"New tab position",
		tab_open_right		:"Right",
		tab_open_left		:"Left",
		tab_open_last		:"Last",
		tab_open_first		:"First",
		save_button		:"Save"
	},
	"zh-CN":{ // 中国語 (簡体)
		setting_title		:"QuickDrag 选项",
		engine_title		:"搜索引擎 ",
		is_address_forground	:" 在前台标签页中打开链接",
		is_search_forground	:" 在前台标签页中搜索",
		is_save_image		:" 启用鼠标拖拽下载图片",
		tab_title		:"新标签位置",
		tab_open_right		:"右",
		tab_open_left		:"左",
		tab_open_last		:"最后",
		tab_open_first		:"第一",
		save_button		:"保存"
	},
	"zh-tw":{ // 中国語 (繁体)
		setting_title		:"QuickDrag 設定",
		engine_title		:"搜索引擎 ",
		is_address_forground	:" 用新分頁開啟鏈結後自動切換至該分頁",
		is_search_forground	:" 用新分頁開啟搜尋後自動切換至該分頁",
		is_save_image		:" 使用滑鼠拖放下載圖片",
		tab_title		:"新标签位置",
		tab_open_right		:"右",
		tab_open_left		:"左",
		tab_open_last		:"最後",
		tab_open_first		:"第一",
		save_button		:"保存"
	},
	"de":{ // ドイツ語
		setting_title		:"QuickDrag Einstellungen",
		engine_title		:"Suchmaschine ",
		is_address_forground	:" Tabs für Webadressen im Vordergrund öffnen",
		is_search_forground	:" Tabs zur Textsuche im Vordergrund öffnen",
		is_save_image		:" Drag-and-Drop verwenden, um Bilder herunter zu laden",
		tab_title		:"Neue Tabulatorposition",
		tab_open_right		:"Rechts",
		tab_open_left		:"Links",
		tab_open_last		:"Letzte",
		tab_open_first		:"Zuerst",
		save_button		:"Sparen"
	},
	"ko-kr":{ // 韓国語
		setting_title		:"퀵드래그 설정",
		engine_title		:"검색 엔진 ",
		is_address_forground	:" 선택한 웹 주소를 활성화된 탭으로 열기",
		is_search_forground	:" 선택한 텍스트를 활성화된 탭으로 검색하기",
		is_save_image		:" 끌어다 놓기로 그림을 다른 이름으로 저장하기",
		tab_title		:"새 탭 위치",
		tab_open_right		:"오른쪽",
		tab_open_left		:"왼쪽",
		tab_open_last		:"마지막",
		tab_open_first		:"처음",
		save_button		:"저장"
	},
	"ru-RU":{ // ロシア語 (ロシア)
		setting_title		:"Настройки QuickDrag",
		engine_title		:"Поисковый движок ",
		is_address_forground	:" Загружать обычные и текстовые ссылки в новой активной вкладке",
		is_search_forground	:" Загружать поисковые запросы в новой активной вкладке",
		is_save_image		:" Использовать drag&apos;n&apos;drop для сохранения изображений",
		tab_title		:"Новая позиция вкладки",
		tab_open_right		:"Правая",
		tab_open_left		:"Левая",
		tab_open_last		:"Последний",
		tab_open_first		:"Первый",
		save_button		:"Спасти"
	},
	"fr":{ // フランス語
		setting_title		:"Paramètres de QuickDrag",
		engine_title		:"Moteur de recherche ",
		is_address_forground	:" Ouvrir les onglets des adresses Web au premier-plan",
		is_search_forground	:" Ouvrir les onglets des recherches de texte au premier-plan",
		is_save_image		:" Utiliser le glisser-déposer pour télécharger des images",
		tab_title		:"Nouvelle position de tabulation",
		tab_open_right		:"Droite",
		tab_open_left		:"Gauche",
		tab_open_last		:"Dernier",
		tab_open_first		:"Premier",
		save_button		:"Sauvegarder"
	},
	"it-IT":{ // イタリア語 (イタリア)
		setting_title		:"Opzioni di QuickDrag",
		engine_title		:"Motore di ricerca ",
		is_address_forground	:" Carica i link testuali in schede in primo piano",
		is_search_forground	:" Carica i risultati di ricerca in schede in primo piano",
		is_save_image		:" Trascina le immagini per avviarne il download",
		tab_title		:"Nuova posizione cartacea",
		tab_open_right		:"Destra",
		tab_open_left		:"Sinistra",
		tab_open_last		:"Ultimo",
		tab_open_first		:"Primo",
		save_button		:"Salvare"
	},
	"cs":{ // チェコ語
		setting_title		:"QuickDrag Nastavení",
		engine_title		:"Vyhledávač ",
		is_address_forground	:" Otevřít webovou stránku do panelu a do popředí",
		is_search_forground	:" Otevřít hledaný text do nového panelu do popředí",
		is_save_image		:" Použít drag-and-drop ke stažení obrázků",
		tab_title		:"Kde otevřít Nová záložka",
		tab_open_right		:"Pravá",
		tab_open_left		:"Levá",
		tab_open_last		:"Poslední",
		tab_open_first		:"První",
		save_button		:"Uložit"
	},
	"da":{ // デンマーク語
		setting_title		:"QuickDrag Indstillinger",
		engine_title		:"Søgemaskine ",
		is_address_forground	:" Åben faner for web addresser i forgrunden",
		is_search_forground	:" Åben faner for tekst søgninger i forgrunden",
		is_save_image		:" Brug træk-og-slip til at downloade billeder",
		tab_title		:"Ny faneposition",
		tab_open_right		:"Højre",
		tab_open_left		:"Venstre",
		tab_open_last		:"Sidst",
		tab_open_first		:"Først",
		save_button		:"Gemme"
	},
	"nl":{ // オランダ語
		setting_title		:"QuickDrag-instellingen",
		engine_title		:"Zoekmachine ",
		is_address_forground	:" Tabbladen voor internetadressen in de voorgrond openen",
		is_search_forground	:" Tabbladen voor zoekopdrachten in de voorgrond openen",
		is_save_image		:" Drag-and-drop gebruiken voor het downloaden van afbeeldingen",
		tab_title		:"Nieuwe tabbladpositie",
		tab_open_right		:"Rechts",
		tab_open_left		:"Links",
		tab_open_last		:"Laatste",
		tab_open_first		:"Eerste",
		save_button		:"Save"
	},
	"pl":{ // ポーランド語
		setting_title		:"QuickDrag - ustawienia",
		engine_title		:"Wyszukiwarka ",
		is_address_forground	:" Otwieraj adresy URL w nowej karcie w tle",
		is_search_forground	:" Otwieraj wyniki wyszukiwania w nowej karcie w tle",
		is_save_image		:" Użyj funkcji „przeciągnij i upuść” do pobierania obrazków",
		tab_title		:"Nowa pozycja karty",
		tab_open_right		:"Prawo",
		tab_open_left		:"Lewo",
		tab_open_last		:"Ostatni",
		tab_open_first		:"Pierwszy",
		save_button		:"Zapisz"
	},
	"pt-BR":{ // ポルトガル語 (ブラジル)
		setting_title		:"Configurações QuickDrag",
		engine_title		:"Mecanismo de busca ",
		is_address_forground	:" Abrir abas para endereço web no primeiro plano",
		is_search_forground	:" Abrir abas para pesquisa de texto no primeiro plano",
		is_save_image		:" Usar arrastar-e-soltar para download de imagens",
		tab_title		:"Nova posição da aba",
		tab_open_right		:"Direito",
		tab_open_left		:"Esquerdo",
		tab_open_last		:"Último",
		tab_open_first		:"Primeiro",
		save_button		:"Salvar"
	},
	"sr":{ // セルビア語
		setting_title		:"Подешавања БрзогПревлачења",
		engine_title		:"Претраживач ",
		is_address_forground	:" Отвори језичке за адресе у позадини",
		is_search_forground	:" Отвори језичке за претраге текста у позадини",
		is_save_image		:" Користи „превлачење-и-спуштање” за чување слика",
		tab_title		:"Нова позиција табулатора",
		tab_open_right		:"Десна",
		tab_open_left		:"Лева",
		tab_open_last		:"Последњи",
		tab_open_first		:"Прво",
		save_button		:"Сачувај"
	},
	"sv-SE":{ // スウェーデン語 (スウェーデン)
		setting_title		:"Inställningar för QuickDrag",
		engine_title		:"Sökmotor ",
		is_address_forground	:" Öppna flikar för webbadresser i förgrunden",
		is_search_forground	:" Öppna flikar för textsökningar i förgrunden",
		is_save_image		:" Använd dra-och-släpp för att ladda ner bilder",
		tab_title		:"Ny flikposition",
		tab_open_right		:"Höger",
		tab_open_left		:"Vänster",
		tab_open_last		:"Sista",
		tab_open_first		:"Först",
		save_button		:"Spara"
	},
	"tr-TR":{ // トルコ語
		setting_title		:"QuickDrag Ayarları",
		engine_title		:"Arama motoru ",
		is_address_forground	:" Web adresleri için sekmeleri önplanda aç",
		is_search_forground	:" Metin aramaları için sekmeleri önplanda aç",
		is_save_image		:" Resimleri indirmek için sürükle-bırak kullan",
		tab_title		:"Yeni sekme konumu",
		tab_open_right		:"Sağ",
		tab_open_left		:"Sol",
		tab_open_last		:"Son",
		tab_open_first		:"Ilk",
		save_button		:"Kayıt etmek"
	},
	"uk":{ // ウクライナ語
		setting_title		:"Налаштування QuickDrag",
		engine_title		:"Пошукова система ",
		is_address_forground	:" Відкривати посилання у новій активній вкладці",
		is_search_forground	:" Відкривати пошукові запити у новій активній вкладці",
		is_save_image		:" Дозволити перетягування зображень для їх завантаження",
		tab_title		:"Нова позиція вкладки",
		tab_open_right		:"Направо",
		tab_open_left		:"Наліво",
		tab_open_last		:"Останній",
		tab_open_first		:"Спочатку",
		save_button		:"Зберегти"
	},
	"vi-vn":{ // ベトナム語
		setting_title		:"Thiết Lập QuickDrag",
		engine_title		:"Công cụ tìm kiếm ",
		is_address_forground	:" Mở địa chỉ web trong thẻ tiền cảnh",
		is_search_forground	:" Mở kết quả tìm kiếm văn bản trong thẻ tiền cảnh",
		is_save_image		:" Sử dụng kéo và thả để tải xuống hình ảnh",
		tab_title		:"Vị trí tab mới",
		tab_open_right		:"Phải",
		tab_open_left		:"Trái",
		tab_open_last		:"Cuối cùng",
		tab_open_first		:"Đầu tiên",
		save_button		:"Lưu lại"
	},
	"ja":{ // 日本語
		setting_title		:"QuickDrag 設定",
		engine_title		:"検索エンジン ",
		is_address_forground	:" Webアドレスをフォアグラウンドタブで開く",
		is_search_forground	:" 検索結果をフォアグラウンドタブで開く",
		is_save_image		:" ドラッグ＆ドロップで画像を保存する",
		tab_title		:"新規タブ位置",
		tab_open_right		:"右",
		tab_open_left		:"左",
		tab_open_last		:"最後",
		tab_open_first		:"最初",
		save_button		:"保存"
	}
};