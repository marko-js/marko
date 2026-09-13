// tags/probe.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
_shells({ "__tests__/tags/probe.marko": "__tests__/tags/probe.marko !__tests__/tags/probe.marko_0_input_label#3;D ;<p> </p>" });
var probe_default = _template_persisted("__tests__/tags/probe.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let seen = "";
	_html(`<p>${_text_resume($scope0_id, "#text/0", seen)}</p>`);
	_script($scope0_id, "__tests__/tags/probe.marko_0_input_label#3");
	_patch_effect($scope0_id, "__tests__/tags/probe.marko_0_input_label#3", "input_label");
	_patch_value($scope0_id, "__tests__/tags/probe.marko0", seen, 1);
	$scope0_reason ? _scope($scope0_id, { input_label: input.label }, "__tests__/tags/probe.marko", 0, { input_label: ["input.label"] }) : _filled_guard($scope0_owned, 0) && _patch_write($scope0_id, "input_label", input.label);
}, 0, 0);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l");
_shells({ "__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko;${_w0};${_w1}`)(((_w0) => `/${_w0}&`)("D l"), $template$1) });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_set_serialize_reason({ 0: _mask_group($scope0_owned, 0) });
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	probe_default({ label: input.label });
	$scope0_reason && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1, () => [probe_default]);
