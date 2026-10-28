// tags/counter.marko
const $template$1 = "<button class=inc> </button>";
const $walks$1 = " D l";
const $setup$1 = [[], ["__tests__/tags/counter.marko_0"]];
_shells({ "__tests__/tags/counter.marko": "__tests__/tags/counter.marko !__tests__/tags/counter.marko_0; D ;<button class=inc> </button>" });
var counter_default = _template("__tests__/tags/counter.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=inc>${_text_resume($scope0_id, "#text/1", n)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/counter.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/counter.marko_fill0", n, 1);
	_scope($scope0_id, { n }, "__tests__/tags/counter.marko", 0, { n: "1:6" });
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!><!>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b%b/${_w0}&`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/1>", $setup$1]);
_shells({
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b%b/${_w0}&`)($walks$1)};${((_w0) => `<!><!>${_w0}`)($template$1)}`)(),
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;D ;<span> </span>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_a = _server_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 0) && _unfilled_if($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_a", input.a, !$sg__input_a);
	const f = _bind_resume(function() {
		return input.a;
	}, "__tests__/template.marko_0/f", $scope0_id);
	_if(() => {
		if (input.x) {
			const $scope1_id = _scope_id();
			_html(`<span>${_text_resume($scope1_id, "#text/0", f(), 1, $scope0_reason, 0)}</span>`);
			_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "__tests__/template.marko_1_f#0:6/init");
			_scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/1", 0);
	counter_default({});
	_patch_child_end();
	_scope($scope0_id, {
		input_a: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.a,
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && f,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_a: ["input.a"],
		f: "1:8"
	}) || _filled_guard($scope0_reason, 0) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", f, !$sg__input_a);
}, 1);
