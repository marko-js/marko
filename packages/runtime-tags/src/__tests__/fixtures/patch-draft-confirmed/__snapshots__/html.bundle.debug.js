// template.marko
const $template = "<button> </button>";
const $walks = " D l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D ;<button> </button>" });
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const _pageSource = input.page;
	let page = _pageSource;
	_html(`<button>${_text_resume($scope0_id, "#text/1", page)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page ? _scope($scope0_id, {
		_pageSource,
		page
	}, "__tests__/template.marko", 0, {
		_pageSource: 0,
		page: "1:8"
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "__tests__/template.marko0", _pageSource);
}, 1, 0);
