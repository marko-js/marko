// template.marko
const $template = "<p> </p>";
const $walks = "D l";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko !;D ;<p> </p>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let x = input.v;
	_html(`<p>${_text_resume($scope0_id, "#text/0", x + input.w, 1, $scope0_reason, 0)}</p>`);
	_scope($scope0_id, {
		input_w: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.w,
		x: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && x
	}, "__tests__/template.marko", 0, {
		input_w: ["input.w"],
		x: "1:6"
	}) || (_filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.w, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", x, !_server_guard($scope0_reason, 1)));
}, 1);
