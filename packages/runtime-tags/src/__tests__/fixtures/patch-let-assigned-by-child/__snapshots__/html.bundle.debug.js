// tags/label.marko
const $template$1 = "<button> </button>";
const $walks$1 = " D l";
const $setup$1 = [[], ["__tests__/tags/label.marko_0"]];
_shells({ "__tests__/tags/label.marko": "__tests__/tags/label.marko !__tests__/tags/label.marko_0; D ;<button> </button>" });
var label_default = _template("__tests__/tags/label.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button>${_text_resume($scope0_id, "#text/1", input.label, 1, $scope0_reason, 1)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/label.marko_0");
	_scope($scope0_id, { input_onHide: input.onHide }, "__tests__/tags/label.marko", 0, { input_onHide: ["input.onHide"] }) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchWrite:input_onHide", input.onHide, !_server_guard($scope0_reason, 0));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!><!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&%c`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&%c`)($walks$1)};${((_w0) => `${_w0}<!><!>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_promise = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let x = input.v;
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	label_default({
		label: "hide",
		onHide: _resume(function() {
			x = "";
		}, "__tests__/template.marko_0/onHide", $scope0_id)
	});
	_patch_child_end();
	_if(() => {
		if (x) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "#text/0", input.promise, (value) => {
				const $scope2_id = _scope_id();
				_html(`<em>${_text_resume($scope2_id, "#text/0", value, $wg__input_promise)}</em>`);
				_write_if($scope0_reason, 1) && _scope($scope2_id, {}, "__tests__/template.marko", "4:4");
			}, $wg__input_promise, 0);
			_scope($scope1_id, {}, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_scope($scope0_id, {
		input_promise: input.promise,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { input_promise: ["input.promise"] }) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.promise, !_server_guard($scope0_reason, 1));
}, 1);
