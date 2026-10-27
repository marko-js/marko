// tags/field.marko
const $template$1 = "<textarea></textarea>";
const $walks$1 = " b";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/field.marko": "__tests__/tags/field.marko; ;<textarea></textarea>" });
var field_default = _template("__tests__/tags/field.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<textarea></textarea>${_el_resume($scope0_id, "#textarea/0")}`);
	_script($scope0_id, "__tests__/tags/field.marko_0_input_onKeyDown#3", 1, _filled_guard($scope0_reason, 0), "input_onKeyDown");
	_scope($scope0_id, { input_onKeyDown: input.onKeyDown }, "__tests__/tags/field.marko", 0, { input_onKeyDown: ["input.onKeyDown"] }) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_onKeyDown", input.onKeyDown, !_server_guard($scope0_reason, 0));
});

// template.marko
const $template = "<!><!><p> </p>";
const $walks = "b%bD l";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%bD ;<!><!><p> </p>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;b%;<!><!><!>",
	"__tests__/template.marko_2*shell": /*@__PURE__*/ (() => `__tests__/template.marko_2*shell${_shell_marker(_shell_setup([[], ["__tests__/template.marko_2"]], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}& b`)(" b")};${/*@__PURE__*/ ((_w0) => `${_w0}<button>+</button>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_for_of([1, 2], (i) => {
				const $scope2_id = _scope_id();
				_set_scope_reason(($scope0_page ? 1 : 0) << 1);
				const $childScope = _patch_child($scope2_id, "#childScope/0", 0);
				field_default({ onKeyDown: _resume(function() {
					count += i;
				}, "__tests__/template.marko_2/onKeyDown", $scope2_id) });
				_patch_child_end();
				_html(`<button>+</button>${_el_resume($scope2_id, "#button/1")}`);
				_script($scope2_id, "__tests__/template.marko_2");
				_patch_write($scope2_id, "PatchWrite:i", i, 1);
				_scope($scope2_id, {
					i,
					_: _scope_with_id($scope1_id),
					"#childScope/0": _existing_scope($childScope)
				}, "__tests__/template.marko", "3:4", { i: "3:8" });
			}, 0, $scope1_id, "#text/0", 1, void 0, void 0, void 0, void 0, "__tests__/template.marko_2*shell", 0, 0);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_html(`<p>${_text_resume($scope0_id, "#text/1", count)}</p>`);
	_scope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
