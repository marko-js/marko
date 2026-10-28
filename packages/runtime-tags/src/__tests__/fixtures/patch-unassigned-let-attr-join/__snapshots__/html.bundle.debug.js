// template.marko
const $template = "<div>t</div>";
const $walks = " b";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko !; ;<div>t</div>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let x = input.v;
	_html(`<div${_attr_class(x + input.w)}>t</div>${_el_resume($scope0_id, "#div/0")}`);
	!_client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", x, 1);
	_scope($scope0_id, {
		input_w: input.w,
		x: _write_if($scope0_reason, 1) && x
	}, "__tests__/template.marko", 0, {
		input_w: ["input.w"],
		x: "1:6"
	}) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.w, !_server_guard($scope0_reason, 1));
}, 1);
