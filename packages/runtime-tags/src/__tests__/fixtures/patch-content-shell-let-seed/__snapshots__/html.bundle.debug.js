// tags/wrap.marko
const $template$1 = "<section><!></section>";
const $walks$1 = "D%l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/wrap.marko": "__tests__/tags/wrap.marko;D%;<section><!></section>" });
var wrap_default = _template("__tests__/tags/wrap.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</section>");
	_scope($scope0_id, {}, "__tests__/tags/wrap.marko", 0);
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content !__tests__/template.marko_2; D%c%;<button><!> <!></button>",
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l")};${_w0}`)($template$1)
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_show__OR__input_label = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			wrap_default({ content: _content("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				let n = 0;
				_html(`<button>${_text_resume($scope2_id, "#text/1", input.label, void 0, $scope0_reason, 2)} ${_text_resume($scope2_id, "#text/2", n, 2)}</button>${_el_resume($scope2_id, "#button/0")}`);
				_script($scope2_id, "__tests__/template.marko_2");
				_client_guard($scope0_reason, 2) && _patch_init($scope2_id, "__tests__/template.marko_2_input_label#0:4/init");
				_patch_fill($scope2_id, "PatchFill:__tests__/template.marko_fill1", n, 1);
				_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope2_id, {
					n,
					_: $wi__input_show__OR__input_label && _scope_with_id($scope1_id)
				}, "__tests__/template.marko", "2:4", { n: "3:10" }));
			}, $scope1_id, 1) });
			_patch_child_end();
			_scope($scope1_id, {
				_: $wi__input_show__OR__input_label && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_scope($scope0_id, {
		input_label: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.label,
		"ClosureScopes:input_label/5": _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_label__closures
	}, "__tests__/template.marko", 0, { input_label: ["input.label"] }) || _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 2));
}, 1);
