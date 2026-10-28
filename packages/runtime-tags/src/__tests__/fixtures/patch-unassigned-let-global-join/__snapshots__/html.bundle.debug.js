// template.marko
const $template = "<p> </p>";
const $walks = "D l";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko !;D ;<p> </p>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let x = $global$1.v;
	_html(`<p>${_text_resume($scope0_id, "#text/0", x + input.w)}</p>`);
	_fill_global_subscribe("__tests__/template.marko_0_$global_v#5", $scope0_id);
	_scope($scope0_id, {
		input_w: input.w,
		x: _write_if($scope0_reason, 0) && x
	}, "__tests__/template.marko", 0, {
		input_w: ["input.w"],
		x: "1:6"
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.w, !_server_guard($scope0_reason, 0));
}, 1);
