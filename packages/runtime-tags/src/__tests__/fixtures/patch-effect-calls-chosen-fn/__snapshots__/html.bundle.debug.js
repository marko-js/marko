// template.marko
const $template = "<output></output>";
const $walks = " b";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko !; ;<output></output>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_title = _server_guard($scope0_reason, 1), $cg__input_upper = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !$sg__input_title);
	const up = _bind_resume(() => "U" + input.title, "__tests__/template.marko_0/up", $scope0_id);
	const low = _bind_resume(() => "l" + input.title, "__tests__/template.marko_0/low", $scope0_id);
	const pick = input.upper ? up : low;
	_html(`<output></output>${_el_resume($scope0_id, "#output/0")}`);
	_script($scope0_id, "__tests__/template.marko_0_pick#8");
	_filled_guard($scope0_reason, 0) && _patch_effect($scope0_id, _client_guard($scope0_reason, 0) ? "PatchQueuedEffect:__tests__/template.marko_0_pick#8" : "PatchEffect:__tests__/template.marko_0_pick#8", "pick");
	_scope($scope0_id, {
		input_title: input.title,
		input_upper: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.upper,
		up: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && up,
		low: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && low,
		pick
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		input_upper: ["input.upper"],
		up: "1:8",
		low: "2:8",
		pick: "3:8"
	}) || (_filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.upper, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 1) && $cg__input_upper && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", up, !$sg__input_title), _filled_guard($scope0_reason, 1) && $cg__input_upper && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill2", low, !$sg__input_title), _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:pick", pick, !_server_guard($scope0_reason, 0)));
}, 1);
