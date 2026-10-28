// layout.marko
const $template$1 = "<html><body><main><!><!></main></body></html>";
const $walks$1 = "F%b%n";
const $setup$1 = [[], []];
_shells({
	"__tests__/layout.marko": "__tests__/layout.marko !;F%b%;<html><body><main><!><!></main></body></html>",
	"__tests__/layout.marko_1*shell": "__tests__/layout.marko_1*shell;D ;<p> </p>"
});
var layout_default = _template("__tests__/layout.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 4), $wg__input_content = _write_guard($scope0_reason, 7), $cg__input_show = _client_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	_html(`<html>${_flush_head()}<body><main>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_resume($scope1_id, "#text/0", input.a + input.b, void 0, $scope0_reason, 2)}</p>`);
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/layout.marko_1_input_a#0:5_input_b#0:6/init");
			_scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) }, "__tests__/layout.marko", "4:8");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/layout.marko_1*shell"], $scope0_reason, 4);
	_dynamic_tag($scope0_id, "#text/1", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 7);
	_html("</main>"), _trailers("</body></html>");
	_scope($scope0_id, {
		input_a: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.a,
		input_b: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.b
	}, "__tests__/layout.marko", 0, {
		input_a: ["input.a"],
		input_b: ["input.b"]
	}) || (_filled_guard($scope0_reason, 5) && ($cg__input_show ? _patch_fill($scope0_id, "PatchFill:__tests__/layout.marko_fill0/unpatched", input.a) : _client_guard($scope0_reason, 6) && _patch_fill($scope0_id, "PatchFill:__tests__/layout.marko_fill0", input.a, !_server_guard($scope0_reason, 5))), _filled_guard($scope0_reason, 6) && ($cg__input_show ? _patch_fill($scope0_id, "PatchFill:__tests__/layout.marko_fill1/unpatched", input.b) : _client_guard($scope0_reason, 5) && _patch_fill($scope0_id, "PatchFill:__tests__/layout.marko_fill1", input.b, !_server_guard($scope0_reason, 6))));
}, 1);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ ((_w0) => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1) });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let a = 1;
	_set_scope_reason(2534 | (_mask_group($scope0_reason, 0) << 3 | _mask_group($scope0_reason, 2) << 9 | _mask_group($scope0_reason, 1) << 13));
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	layout_default({
		a,
		b: input.b,
		show: input.show,
		content: _content("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_html(`<button>inc</button>${_el_resume($scope1_id, "#button/0")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2");
		}, $scope0_id)
	});
	_patch_child_end();
	_scope($scope0_id, {
		a,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { a: "2:6" });
}, 1);
