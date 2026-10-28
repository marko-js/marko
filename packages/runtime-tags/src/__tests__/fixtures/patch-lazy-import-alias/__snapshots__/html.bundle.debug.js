// child.marko
const $template$1 = "<span class=child>child <!></span>";
const $walks$1 = "Db%l";
const $setup$1 = [[], []];
_shells({ "__tests__/child.marko": "__tests__/child.marko;Db%;<span class=child>child <!></span>" });
var child_default = _template("__tests__/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span class=child>child ${_text_resume($scope0_id, "#text/0", input.label, 2, $scope0_reason, 0)}</span>`);
	_scope($scope0_id, {}, "__tests__/child.marko", 0);
});

// template.marko
const $template = "<main></main>";
const $walks = " b";
const $Child_withLoadAssets = withLoadAssets(() => child_default, "__tests__/child.marko", flush, "ready:__tests__/child.marko");
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko; ;<main></main>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], ["__tests__/template.marko_1"]], ["#childScope/3>", $setup$1]))};${/*@__PURE__*/ ((_w0) => ` D l%b/${_w0}&b`)($walks$1)};${/*@__PURE__*/ ((_w0) => `<button> </button><!>${_w0}<!>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let n = 0;
			const X = $Child_withLoadAssets;
			_html(`<button>${_text_resume($scope1_id, "#text/1", n)}</button>${_el_resume($scope1_id, "#button/0")}`);
			_set_scope_reason(2);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/3", 0);
			$Child_withLoadAssets({ label: n });
			_patch_child_end();
			_script($scope1_id, "__tests__/template.marko_1");
			_patch_fill($scope1_id, "PatchFill:__tests__/template.marko_fill0", n, 1);
			_scope($scope1_id, {
				n,
				"#childScope/3": _existing_scope($childScope)
			}, "__tests__/template.marko", "4:4", { n: "5:10" });
			return 0;
		}
	}, $scope0_id, "#main/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_html(`</main>${_el_resume($scope0_id, "#main/0", $wg__input_show)}`);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
