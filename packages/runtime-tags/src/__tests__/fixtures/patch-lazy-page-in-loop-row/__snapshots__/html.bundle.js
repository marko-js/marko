// page.marko
const $template = "<button class=row><!>:<!></button>";
const $walks = " D%c%l";
const $setup = [[], ["a0"]];
_shells({ a: "a !a0; D%c%;<button class=row><!>:<!></button>" });
var page_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=row>${_patch_text($scope0_id, "b", input.n, void 0, $scope0_reason, 0)}:${_text_resume($scope0_id, "c", count, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_patch_fill($scope0_id, "va1", count, 1);
	_scope($scope0_id, { g: count });
});

// template.marko
const $Page_withLoadAssets = withLoadAssets(() => page_default, "a", flush, "_a");
_shells({
	b: "b !b1; D l ;<button> </button><ul></ul>",
	b0: /*@__PURE__*/ (() => `b0${_shell_marker(_shell_setup([[], []], ["b>", $setup]))};${/*@__PURE__*/ ((_w0) => `D%b/${_w0}&l`)($walks)};${/*@__PURE__*/ ((_w0) => `<li><!>${_w0}</li>`)($template)}`)()
});
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button>${_text_resume($scope0_id, "b", "open")}</button>${_el_resume($scope0_id, "a")}<ul>`);
	_for_of(input.rows, (n) => {
		const $scope1_id = _scope_id();
		_html("<li>");
		_set_scope_reason(0);
		const $childScope = _patch_child($scope1_id, "b", 0);
		$Page_withLoadAssets({ n });
		_patch_child_end();
		_html("</li>");
		_scope($scope1_id, { b: _existing_scope($childScope) });
	}, (n) => n, $scope0_id, "c", 1, void 0, void 0, void 0, void 0, "b0", $scope0_reason, 0);
	_html(`</ul>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "b1");
	_scope($scope0_id, { g: open });
}, 1);
