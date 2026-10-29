// tags/outer.marko
const $template$1 = "<button>clear</button><section><!></section>";
const $walks$1 = " bD%l";
const $setup$1 = [[], ["__tests__/tags/outer.marko_0"]];
_shells({ "__tests__/tags/outer.marko": "__tests__/tags/outer.marko !__tests__/tags/outer.marko_0; bD%;<button>clear</button><section><!></section>" });
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let value = input.data;
	_first_value($scope0_id, "value", value, $scope0_reason, 0);
	_html(`<button>clear</button>${_el_resume($scope0_id, "#button/0")}<section>`);
	_dynamic_tag($scope0_id, "#text/1", value.content, {}, 2, 0, 0, 1, $scope0_reason, 0, "value");
	_html("</section>");
	_script($scope0_id, "__tests__/tags/outer.marko_0");
	_scope($scope0_id, {}, "__tests__/tags/outer.marko", 0) || _content_withhold(input.data);
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content __tests__/template.marko_1_input_label#0:3/subscribe",
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell;D ;<em> </em>",
	"__tests__/template.marko_3*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_3*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1)
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 1), $cg__input_label = _client_guard($scope0_reason, 1), $wi__input_label__OR__input_show = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 2), $wi__input_label = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const Body = { content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_if(() => {
			if (input.label !== "x") {
				const $scope2_id = _scope_id();
				_html(`<em>${_text_resume($scope2_id, "#text/0", input.label, 1, $scope0_reason, 1)}</em>`);
				_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, $cg__input_label ? "__tests__/template.marko_2_input_label#0:3/init" : "__tests__/template.marko_2_input_label#0:3/subscribe");
				_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope2_id, {
					_: $wi__input_label__OR__input_show && _scope_with_id($scope1_id),
					"ClosureSignalIndex:input_label/7": $wi__input_label && 1
				}, "__tests__/template.marko", "1:15"));
				return 0;
			}
		}, $scope1_id, "#text/0", 1, $wg__input_label, 1, 0, 0, ["__tests__/template.marko_2*shell"], $scope0_reason, 1);
		$cg__input_label && _patch_init($scope1_id, "__tests__/template.marko_1_input_label#0:3/init");
		$wi__input_label__OR__input_show && _subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2"));
		$wg__input_label || $wi__input_label__OR__input_show && _resume_branch($scope1_id);
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope3_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope3_id, "#childScope/0", 0);
			outer_default({ data: _patch_live($childScope, { content: Body.content }, $scope3_id, "") });
			_patch_child_end();
			_scope($scope3_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_3*shell"], $scope0_reason, 2);
	_scope($scope0_id, {
		input_label: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1)) && input.label,
		Body_content: _unfilled_if($scope0_reason, 2) && Body?.content,
		"ClosureScopes:input_label/7": $wi__input_label && $input_label__closures
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		Body_content: ["Body.content", "1:9"]
	}) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 1));
}, 1);
