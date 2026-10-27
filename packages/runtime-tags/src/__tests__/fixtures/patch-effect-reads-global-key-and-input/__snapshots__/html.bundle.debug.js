// template.marko
const $template = "<div></div>";
const $walks = " b";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko; ;<div></div>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<div></div>${_el_resume($scope0_id, "#div/0")}`);
	_script($scope0_id, "__tests__/template.marko_0_input_page#3_$global_user_name#6");
	_filled_guard($scope0_reason, 0) && _patch_effect($scope0_id, _client_guard($scope0_reason, 0) ? "PatchQueuedEffect:__tests__/template.marko_0_input_page#3_$global_user_name#6" : "PatchEffect:__tests__/template.marko_0_input_page#3_$global_user_name#6", "input_page");
	$scope0_page ? _scope($scope0_id, { input_page: input.page }, "__tests__/template.marko", 0, { input_page: ["input.page"] }) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_page", input.page, !_server_guard($scope0_reason, 0));
}, 1);
