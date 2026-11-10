// template.marko
const $template = "<p> </p>";
const $walks = "D l";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko;D ;<p> </p>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_x__OR__input_y = _unfilled_if($scope0_reason, 0), $fg__input_x = _filled_guard($scope0_reason, 1), $fg__input_y = _filled_guard($scope0_reason, 2), $sg__input_y = _server_guard($scope0_reason, 2), $sg__input_x = _server_guard($scope0_reason, 1), $fg__input_x__OR__input_y = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const a = { y: input.y };
	const b = { x: input.x };
	const c = {
		a,
		b
	};
	_html(`<p>${_text_mark($scope0_id, "#text/0", input.x, 1, $scope0_reason, 1)}</p>`);
	_script($scope0_id, "__tests__/template.marko_0_c#8", 1, $fg__input_x__OR__input_y, [$fg__input_y && "input_y", $fg__input_x && "input_x"]);
	_patch_render($scope0_id, "__tests__/template.marko_0_a#5_b#6/setup", [$fg__input_y && "input_y", $fg__input_x && "input_x"], $scope0_reason, 0);
	_scope($scope0_id, {
		a: (_unfilled_if($scope0_reason, 1) || $ui__input_x__OR__input_y) && a,
		b: (_unfilled_if($scope0_reason, 2) || $ui__input_x__OR__input_y) && b,
		c
	}, "__tests__/template.marko", 0, {
		a: "2:8",
		b: "3:8",
		c: "4:8"
	}) || ($fg__input_x && _patch_write($scope0_id, "PatchMarkedWrite:input_x", input.x, !$sg__input_x), $fg__input_y && _patch_write($scope0_id, "PatchMarkedWrite:input_y", input.y, !$sg__input_y), $fg__input_y && _patch_write($scope0_id, "PatchMarkedWrite:a", a, !$sg__input_y), $fg__input_x && _patch_write($scope0_id, "PatchMarkedWrite:b", b, !$sg__input_x), $fg__input_x__OR__input_y && _patch_write($scope0_id, "PatchMarkedWrite:c", c, !_server_guard($scope0_reason, 0)));
}, 1);
