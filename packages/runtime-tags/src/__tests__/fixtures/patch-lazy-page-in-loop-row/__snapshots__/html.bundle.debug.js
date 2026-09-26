// page.marko
const $template$1 = "<button class=row><!>:<!></button>";
const $walks$1 = " D%c%l";
_shells({ "__tests__/page.marko": "__tests__/page.marko !__tests__/page.marko_0; D%c%;<button class=row><!>:<!></button>" });
var page_default = _template_patch("__tests__/page.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=row>${_patch_text($scope0_id, "#text/1", input.n, void 0, $scope0_reason, 0)}:${_text_resume($scope0_id, "#text/2", count, 2)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/page.marko_0");
	_patch_value($scope0_id, "__tests__/page.marko0", count, 1);
	$scope0_page && _scope($scope0_id, { count }, "__tests__/page.marko", 0, { count: "1:6" });
}, 0, 0);

// template.marko
const $template = "<button> </button><ul></ul>";
const $walks = " D l b";
const $Page_withLoadAssets = withLoadAssets(page_default, "ready:__tests__/page.marko", void 0, 1);
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D l ;<button> </button><ul></ul>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1*shell;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `D%b/${_w0}&l`)($walks$1), /*@__PURE__*/ ((_w0) => `<li><!>${_w0}</li>`)($template$1))
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button>${_text_resume($scope0_id, "#text/1", open ? "close" : "open")}</button>${_el_resume($scope0_id, "#button/0")}<ul>`);
	_for_of(input.rows, (n) => {
		const $scope1_id = _scope_id();
		_html("<li>");
		_set_serialize_reason(0);
		const $childScope = _peek_scope_id();
		_patch_child($scope1_id, "#childScope/1", $childScope);
		$Page_withLoadAssets({ n });
		_html("</li>");
		_scope($scope1_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/template.marko", "6:4");
	}, (n) => n, $scope0_id, "#ul/2", 1, 1, _source_guard($scope0_reason, 0), void 0, void 0, "__tests__/template.marko_1*shell", $scope0_reason, 0);
	_html(`</ul>${_el_resume($scope0_id, "#ul/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, { open }, "__tests__/template.marko", 0, { open: "3:6" });
}, 1, () => [$Page_withLoadAssets]);
