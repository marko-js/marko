// tags/store.marko
const $template$2 = "";
const $walks$2 = "";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/store.marko": "^__tests__/tags/store.marko !," });
_stateful_return("__tests__/tags/store.marko");
var store_default = _template("__tests__/tags/store.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let last = 0;
	const $return = {
		last,
		set: _resume(function(next) {
			last = next;
		}, "__tests__/tags/store.marko_0/_return", $scope0_id)
	};
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/store.marko_fill0", last, 1);
	return $return;
});

// tags/child.marko
const $template$1 = "<button><!> <!></button>";
const $walks$1 = " D%c%l";
const $setup$1 = [[], ["__tests__/tags/child.marko_0"]];
_shells({ "__tests__/tags/child.marko": "__tests__/tags/child.marko !__tests__/tags/child.marko_0; D%c%;<button><!> <!></button>" });
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button>${_text_resume($scope0_id, "#text/1", input.label, void 0, $scope0_reason, 2)} ${_text_resume($scope0_id, "#text/2", input.s.last, 2, $scope0_reason, 1)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/child.marko_0");
	_scope($scope0_id, { input_s: input.s }, "__tests__/tags/child.marko", 0, { input_s: ["input.s"] }) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchWrite:input_s", input.s, !_server_guard($scope0_reason, 0));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)("", $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `0${_w0}&/${_w1}&`)("", $walks$1);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$2], ["#childScope/2>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0, _w1) => `0${_w0}&/${_w1}&`)("", $walks$1)};${((_w0, _w1) => `${_w0}${_w1}`)("", $template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0, 1);
	let s = store_default({});
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_s#6/var");
	_patch_child_end();
	_set_scope_reason(10 | _mask_group($scope0_reason, 0) << 5);
	const $childScope2 = _peek_scope_id($scope0_id, "#childScope/2", 1);
	child_default({
		s,
		label: input.label
	});
	_patch_child_end();
	_scope($scope0_id, {
		"#childScope/0": _existing_scope($childScope),
		"#childScope/2": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0);
}, 1);
