// template.marko
const $template = "<div></div>";
const $walks = " b";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko; ;<div></div>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_page = _filled_guard($scope0_reason, 1), $fg__input_n = _filled_guard($scope0_reason, 2), $cg__input_page = _client_guard($scope0_reason, 1), $cg__input_n = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<div></div>${_el_mark($scope0_id, "#div/0")}`);
	_script($scope0_id, "__tests__/template.marko_0_input_page#3_input_n#4", 1, ($fg__input_page || $fg__input_n) && ($cg__input_page || $cg__input_n ? 2 : 1), (($fg__input_page ? " input_page" : "") + ($fg__input_n ? " input_n" : "")).slice(1), "__tests__/template.marko_0_input_page#3_input_n#4/setup", $scope0_reason, 0) || _script($scope0_id, "__tests__/template.marko_0_input_page#3_input_n#4_$global_user_name#7", 1, ($fg__input_page || $fg__input_n) && ($cg__input_page || $cg__input_n ? 2 : 1));
	_scope($scope0_id, {
		input_page: input.page,
		input_n: input.n
	}, "__tests__/template.marko", 0, {
		input_page: ["input.page"],
		input_n: ["input.n"]
	}) || ($fg__input_page && _patch_write($scope0_id, "PatchMarkedWrite:input_page", input.page, !_server_guard($scope0_reason, 1)), $fg__input_n && _patch_write($scope0_id, "PatchMarkedWrite:input_n", input.n, !_server_guard($scope0_reason, 2)));
}, 1);
