// child.marko
const $template$1 = "<button><!>:<!></button>";
const $walks$1 = " D%c%l";
const $setup$1 = [[], ["__tests__/child.marko_0"]];
_shells({ "__tests__/child.marko": "__tests__/child.marko !__tests__/child.marko_0; D%c%;<button><!>:<!></button>" });
var child_default = _template("__tests__/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", input.label, 1, $scope0_reason, 0)}:${_text_resume($scope0_id, "#text/2", count, 2)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/child.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/child.marko_fill0", count, 1);
	_scope($scope0_id, { count }, "__tests__/child.marko", 0, { count: "1:6" });
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!><!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b%b/${_w0}&%c`)($walks$1);
const $Child_withLoadAssets = withLoadAssets(() => child_default, "__tests__/child.marko", flush, "ready:__tests__/child.marko");
const $setup = _shell_setup([[], []], ["#childScope/1>", $setup$1]);
_shells({
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content;D ;<em> </em>",
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;D ;<b> </b>",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content",
	"__tests__/template.marko_1_#text#0/await": "__tests__/template.marko_1_#text#0/await;D ;<b> </b>",
	"__tests__/template.marko_1_#text#3/await": "__tests__/template.marko_1_#text#3/await;D ;<em> </em>",
	"__tests__/template.marko_1*content": /*@__PURE__*/ (() => `__tests__/template.marko_1*content${_shell_marker(_shell_setup([[], []], ["#childScope/2>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `b%b%b/${_w0}&%c`)($walks$1)};${/*@__PURE__*/ ((_w0) => `<!><!><!>${_w0}<!><!>`)($template$1)}`)(),
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b%b/${_w0}&%c`)($walks$1)};${((_w0) => `<!><!>${_w0}<!><!>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_a = _client_guard($scope0_reason, 2), $cg__input_b = _client_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_a__closures = new Set();
	const $input_b__closures = new Set();
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/1", 0);
	$Child_withLoadAssets({ label: input.label });
	_patch_child_end();
	_try($scope0_id, "#text/2", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", input.a, (a) => {
			const $scope3_id = _scope_id();
			_html(`<b>${_text_resume($scope3_id, "#text/0", a, 1, $scope0_reason, 2)}</b>`);
			_scope($scope3_id, {}, "__tests__/template.marko", "5:4");
		}, 1, "__tests__/template.marko_3*content", 1);
		_set_scope_reason(0);
		const $childScope2 = _peek_scope_id($scope1_id, "#childScope/2", 1);
		$Child_withLoadAssets({ label: "in-try" });
		_patch_child_end();
		_await($scope1_id, "#text/3", input.b, (b) => {
			const $scope4_id = _scope_id();
			_html(`<em>${_text_resume($scope4_id, "#text/0", b, 1, $scope0_reason, 3)}</em>`);
			_scope($scope4_id, {}, "__tests__/template.marko", "7:4");
		}, 1, "__tests__/template.marko_4*content", 1);
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, $cg__input_a ? "__tests__/template.marko_1_input_a#0:6/init" : "__tests__/template.marko_1_input_a#0:6/subscribe");
		_unfilled_if($scope0_reason, 3) && _patch_init($scope1_id, $cg__input_b ? "__tests__/template.marko_1_input_b#0:7/init" : "__tests__/template.marko_1_input_b#0:7/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 3) && $input_b__closures, _subscribe(_unfilled_if($scope0_reason, 2) && $input_a__closures, _scope($scope1_id, {
			_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
			"#childScope/2": _existing_scope($childScope2)
		}, "__tests__/template.marko", "4:2"), $cg__input_a && "__tests__/template.marko_1_input_a#0:6/subscribe"), $cg__input_b && "__tests__/template.marko_1_input_b#0:7/subscribe");
	}, () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html("<i>loading</i>");
	}, void 0, "__tests__/template.marko_2*content", void 0, "__tests__/template.marko_1*content", 1, void 0, 2);
	_scope($scope0_id, {
		"#childScope/1": _existing_scope($childScope),
		"ClosureScopes:input_a/8": _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_a__closures,
		"ClosureScopes:input_b/9": _write_if($scope0_reason, 3) && _unfilled_if($scope0_reason, 3) && $input_b__closures
	}, "__tests__/template.marko", 0);
}, 1);
