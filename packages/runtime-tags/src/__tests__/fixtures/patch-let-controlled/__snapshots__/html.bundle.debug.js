// template.marko
const $template = "<p> </p>";
const $walks = "D l";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko !;D ;<p> </p>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_w = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let x = input.v;
	_html(`<p>${_text_mark($scope0_id, "#text/0", x + input.w)}</p>`);
	_patch_render($scope0_id, "__tests__/template.marko_0_input_w#4_x#5/setup", (($fg__input_w ? " input_w" : "") + (_filled_guard($scope0_reason, 0) ? " input_v" : "")).slice(1));
	_patch_let_change($scope0_id, "PatchFill:__tests__/template.marko_0_x#5/fill", x, 0, 1, $scope0_reason, 0);
	_scope($scope0_id, {
		input_w: input.w,
		x: _write_if($scope0_reason, 1) && x
	}, "__tests__/template.marko", 0, {
		input_w: ["input.w"],
		x: "1:6"
	}) || $fg__input_w && _patch_write($scope0_id, "PatchMarkedWrite:input_w", input.w, !_server_guard($scope0_reason, 1));
}, 1);
