// template.marko
const $template = "<output></output>";
const $walks = " b";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko; ;<output></output>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_title__OR__input_upper = _unfilled_if($scope0_reason, 0), $ui__input_upper = _unfilled_if($scope0_reason, 2), $fg__input_title = _filled_guard($scope0_reason, 1), $ui__input_title = _unfilled_if($scope0_reason, 1), $sg__input_title = _server_guard($scope0_reason, 1), $fg__input_title__OR__input_upper = _filled_guard($scope0_reason, 0), $fg__input_upper = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	$fg__input_title && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !$sg__input_title);
	const up = _bind_resume(() => "U" + input.title, "__tests__/template.marko_0/up", $scope0_id);
	const low = _bind_resume(() => "l" + input.title, "__tests__/template.marko_0/low", $scope0_id);
	const pick = input.upper ? up : low;
	_html(`<output></output>${_el_mark($scope0_id, "#output/0")}`);
	_script($scope0_id, "__tests__/template.marko_0_pick#8", 1, $fg__input_title__OR__input_upper, ["pick", $fg__input_title && "input_title"]);
	_patch_render($scope0_id, "__tests__/template.marko_0_input_upper#4_up#5_low#6/setup", [
		$fg__input_upper && "input_upper",
		$fg__input_title && "up",
		$fg__input_title && "input_title",
		$fg__input_title && "low"
	], $scope0_reason, 0);
	_scope($scope0_id, {
		input_title: input.title,
		input_upper: ($ui__input_title || $ui__input_title__OR__input_upper) && input.upper,
		up: ($ui__input_upper || $ui__input_title__OR__input_upper) && up,
		low: ($ui__input_upper || $ui__input_title__OR__input_upper) && low,
		pick
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		input_upper: ["input.upper"],
		up: "1:8",
		low: "2:8",
		pick: "3:8"
	}) || ($fg__input_upper && $ui__input_title && _patch_write($scope0_id, "PatchMarkedWrite:input_upper", input.upper, !_server_guard($scope0_reason, 2)), $fg__input_title && $ui__input_upper && _patch_write($scope0_id, "PatchMarkedWrite:up", up, !$sg__input_title), $fg__input_title && $ui__input_upper && _patch_write($scope0_id, "PatchMarkedWrite:low", low, !$sg__input_title), $fg__input_title__OR__input_upper && _patch_write($scope0_id, "PatchMarkedWrite:pick", pick, !_server_guard($scope0_reason, 0)));
}, 1);
