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
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ ((_w0) => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&`)("D%l")};${_w0}`)($template$1) });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_a = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_a__closures = new Set();
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	wrap_default({ content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		let n = 0;
		_html(`<div><button class=n>n</button>${_el_resume($scope1_id, "#button/0")}<p class=j>${_text_resume($scope1_id, "#text/1", input.a + n)}</p><div class=e></div>${_el_resume($scope1_id, "#div/2")}</div>`);
		_script($scope1_id, "__tests__/template.marko_1_input_a#0:3", 1, _filled_guard($scope0_reason, 0), ">input_a");
		_script($scope1_id, "__tests__/template.marko_1");
		_subscribe($wi__input_a && $input_a__closures, _scope($scope1_id, {
			n,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "1:2", { n: "3:6" }), "__tests__/template.marko_1_input_a#0:3/subscribe");
	}, $scope0_id) });
	_patch_child_end();
	_scope($scope0_id, {
		input_a: input.a,
		"ClosureScopes:input_a/4": $wi__input_a && $input_a__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { input_a: ["input.a"] }) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.a, !_server_guard($scope0_reason, 0));
}, 1);
