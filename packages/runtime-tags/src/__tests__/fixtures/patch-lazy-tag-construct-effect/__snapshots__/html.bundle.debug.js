// child.marko
const $template$1 = "<button><!>:<!></button>";
const $walks$1 = " D%c%l";
const $setup$1 = [[], ["__tests__/child.marko_0"]];
_shells({ "__tests__/child.marko": "__tests__/child.marko !__tests__/child.marko_0; D%c%;<button><!>:<!></button>" });
var child_default = _template("__tests__/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", input.label, void 0, $scope0_reason, 0)}:${_text_resume($scope0_id, "#text/2", count, 2)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/child.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/child.marko_fill0", count, 1);
	_scope($scope0_id, { count }, "__tests__/child.marko", 0, { count: "1:6" });
});

// template.marko
const $template = "<main></main>";
const $walks = " b";
const $Child_withLoadAssets = withLoadAssets(() => child_default, "__tests__/child.marko", flush, "ready:__tests__/child.marko");
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !; ;<main></main>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], ["__tests__/template.marko_1_input_attrs#0:4"]], ["#childScope/2>", $setup$1]))};${/*@__PURE__*/ ((_w0) => ` b%b/${_w0}&b`)($walks$1)};${/*@__PURE__*/ ((_w0) => `<div>x</div><!>${_w0}<!>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<div${_attrs(input.attrs, "#div/0", $scope1_id, "div", void 0, $scope0_reason, 2)}>x</div>${_el_resume($scope1_id, "#div/0")}`);
			_set_scope_reason(_mask_group($scope0_reason, 3) << 1);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/2", 0);
			$Child_withLoadAssets({ label: input.label });
			_patch_child_end();
			_script($scope1_id, "__tests__/template.marko_1_input_attrs#0:4");
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/template.marko_1_input_attrs#0:4/init");
			_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "__tests__/template.marko_1_input_label#0:5/init");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				"#childScope/2": _existing_scope($childScope)
			}, "__tests__/template.marko", "4:4", { "EventAttributes:#div/0": ["...input.attrs", "5:13"] });
			return 0;
		}
	}, $scope0_id, "#main/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_html(`</main>${_el_resume($scope0_id, "#main/0", $wg__input_show)}`);
	_scope($scope0_id, {
		input_attrs: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.attrs,
		input_label: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.label
	}, "__tests__/template.marko", 0, {
		input_attrs: ["input.attrs"],
		input_label: ["input.label"]
	}) || (_filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.attrs, !_server_guard($scope0_reason, 2)), $cg__input_show && _content_withhold(input.attrs), _filled_guard($scope0_reason, 3) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.label, !_server_guard($scope0_reason, 3)));
}, 1);
