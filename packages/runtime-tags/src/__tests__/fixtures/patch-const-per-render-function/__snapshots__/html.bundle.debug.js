// tags/shower.marko
const $template$1 = "<button>show</button><output> </output>";
const $walks$1 = " bD l";
const $setup$1 = [[], ["__tests__/tags/shower.marko_0"]];
_shells({ "__tests__/tags/shower.marko": "__tests__/tags/shower.marko !__tests__/tags/shower.marko_0; bD ;<button>show</button><output> </output>" });
var shower_default = _template("__tests__/tags/shower.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let shown = "";
	_html(`<button>show</button>${_el_resume($scope0_id, "#button/0")}<output>${_patch_text($scope0_id, "#text/1", shown, void 0, 0, 0, 1)}</output>`);
	_script($scope0_id, "__tests__/tags/shower.marko_0");
	_scope($scope0_id, { input }, "__tests__/tags/shower.marko", 0, { input: 0 }) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchWrite:input", input, !_server_guard($scope0_reason, 0));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<label> </label><input>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` D l b/${_w0}&`)($walks$1);
let n = 0;
const $setup = _shell_setup([[], []], ["#childScope/3>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => ` D l b/${_w0}&`)($walks$1)};${((_w0) => `<label> </label><input>${_w0}`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const uid = "u" + ++n;
	_html(`<label${_patch_attr($scope0_id, "PatchAttr:#label/0 for", "for", `${uid}-${input.name}`, $scope0_reason, 0)}>${_patch_text($scope0_id, "#text/1", input.label, void 0, $scope0_reason, 1)}</label>${_el_resume($scope0_id, "#label/0", _mask_group($scope0_reason, 0))}<input${_patch_input_value($scope0_id, "#input/2", input.value, void 0, "PatchControl:2#input/2", $scope0_reason, 2)}${_patch_attr($scope0_id, "PatchAttr:#input/2 id", "id", `${uid}-${input.name}`, $scope0_reason, 0)}${_patch_attr($scope0_id, "PatchAttr:#input/2 name", "name", input.name, $scope0_reason, 0)}>${_el_resume($scope0_id, "#input/2", _mask_group($scope0_reason, 2) || _mask_group($scope0_reason, 0))}`);
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "#childScope/3", 0);
	shower_default(_patch_live($childScope, { getId: _resume(function() {
		return uid;
	}, "__tests__/template.marko_0/getId", $scope0_id) }, $scope0_id, ""));
	_patch_child_end();
	_scope($scope0_id, {
		uid,
		"#childScope/3": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { uid: "2:8" }) || (_client_guard($scope0_reason, 0) ? _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", uid) : _patch_write($scope0_id, "PatchWrite:uid", uid));
}, 1);
