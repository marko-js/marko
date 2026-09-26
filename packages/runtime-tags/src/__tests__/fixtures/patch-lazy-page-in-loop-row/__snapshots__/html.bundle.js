// page.marko
const $template = "<button class=row><!>:<!></button>";
const $walks = " D%c%l";
_shells({ a: "a !a0; D%c%;<button class=row><!>:<!></button>" });
var page_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=row>${_patch_text($scope0_id, "b", input.n, void 0, $scope0_reason, 0)}:${_text_resume($scope0_id, "c", count, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_patch_value($scope0_id, "a0", count, 1);
	$scope0_page && _scope($scope0_id, { g: count });
}, 0, 0);

// template.marko
const $Page_withLoadAssets = withLoadAssets(page_default, "_a", void 0, 1);
_shells({
	b: "b !b1; D l ;<button> </button><ul></ul>",
	b0: /*@__PURE__*/ ((_w0, _w1) => `b0;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `D%b/${_w0}&l`)($walks), /*@__PURE__*/ ((_w0) => `<li><!>${_w0}</li>`)($template))
});
var template_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_rows = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button>${_text_resume($scope0_id, "b", "open")}</button>${_el_resume($scope0_id, "a")}<ul>`);
	_for_of(input.rows, (n) => {
		const $scope1_id = _scope_id();
		_html("<li>");
		_set_serialize_reason(0);
		const $childScope = _peek_scope_id();
		_patch_child($scope1_id, "b", $childScope);
		$Page_withLoadAssets({ n });
		_html("</li>");
		_scope($scope1_id, { b: _existing_scope($childScope) });
	}, (n) => n, $scope0_id, "c", 1, $sg__input_rows, $sg__input_rows, void 0, void 0, "b0", $scope0_reason, 0);
	_html(`</ul>${_el_resume($scope0_id, "c", $sg__input_rows)}`);
	_script($scope0_id, "b1");
	$scope0_page && _scope($scope0_id, { g: open });
}, 1, () => [$Page_withLoadAssets]);
