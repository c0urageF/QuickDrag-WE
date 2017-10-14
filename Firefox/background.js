// background.js
// quickdrag.js���烁�b�Z�[�W����M
chrome.runtime.onMessage.addListener(
function (request, sender, sendResponse) {
	switch (request.type) {
		case 'searchURL':
			searchURL(request, sendResponse);
			break;
		default:
			// console.log("unknown type");
			// console.log(request);
			break;
		}
	}
);

// �^�u���J��
function searchURL(request, callback) {
	chrome.tabs.create({url:request.value, active: request.isforground});
	callback("searchURL:" + request.value);
}
