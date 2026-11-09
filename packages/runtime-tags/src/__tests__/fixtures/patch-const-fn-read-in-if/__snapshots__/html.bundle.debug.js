// tags/counter.marko
const $template$1 = "<button class=inc> </button>";
const $walks$1 = " D l";
const $setup$1 = [[], ["__tests__/tags/counter.marko_0"]];
_shells({ "__tests__/tags/counter.marko": "__tests__/tags/counter.marko !__tests__/tags/counter.marko_0; D ;<button class=inc> </button>" });
var counter_default = _template("__tests__/tags/counter.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=inc>${_text_mark($scope0_id, "#text/1", n)}</button>${_el_mark($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/counter.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/counter.marko_0_n#2/fill", n, 1);
	_scope($scope0_id, { n }, "__tests__/tags/counter.marko", 0, { n: "1:6" });
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!><!>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b%b/${_w0}&`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/1>", $setup$1]);
_shells({
	"__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b%b/${_w0}&`)($walks$1)};${((_w0) => `<!><!>${_w0}`)($template$1)}`,
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;D ;<span> </span>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_x = _write_guard($scope0_reason, 1), $ui__input_x = _unfilled_if($scope0_reason, 1), $sg__input_a = _server_guard($scope0_reason, 0), $fg__input_a = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	$fg__input_a && $ui__input_x && _patch_write($scope0_id, "PatchMarkedWrite:input_a", input.a, !$sg__input_a);
	const f = _bind_resume(function() {
		return input.a;
	}, "__tests__/template.marko_0/f", $scope0_id);
	_if(() => {
		if (input.x) {
			const $scope1_id = _scope_id();
			_html(`<span>${_text_mark($scope1_id, "#text/0", f(), 1, $scope0_reason, 0)}</span>`);
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "__tests__/template.marko_1_f#0:6/setup");
			_scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_x, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/1", 0);
	counter_default({});
	_patch_child_end();
	$fg__input_a && _client_guard($scope0_reason, 1) && _patch_render($scope0_id, "__tests__/template.marko_1_f#0:6/setup", ["f", "input_a"]);
	_scope($scope0_id, {
		input_a: _write_if($scope0_reason, 1) && input.a,
		f: ($ui__input_x || _unfilled_if($scope0_reason, 0)) && f,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_a: ["input.a"],
		f: "1:8"
	}) || $fg__input_a && $ui__input_x && _patch_write($scope0_id, "PatchMarkedWrite:f", f, !$sg__input_a);
}, 1);
