// template.marko
const $template = "<a>x</a><img>";
const $walks = " b b";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko; b ;<a>x</a><img>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_url = _filled_guard($scope0_reason, 1), $fg__input_width = _filled_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	_html(`<a${_attr("href", input.url, $scope0_id, "PatchAttr:#a/0 href", $scope0_reason, 1)}${_attr("title", input.title, $scope0_id, "PatchAttr:#a/0 title", $scope0_reason, 2)}${_attr_class(input.cls, $scope0_id, "PatchAttr:#a/0 class", $scope0_reason, 3)}>x</a>${_el_mark($scope0_id, "#a/0", _updates_from($scope0_reason, 1) || _updates_from($scope0_reason, 2) || _updates_from($scope0_reason, 3))}<img${_attr("src", `${input.url}?w=${input.width}`, $scope0_id, "PatchAttr:#img/1 src", $scope0_reason, 0)}>${_el_mark($scope0_id, "#img/1", _updates_from($scope0_reason, 0))}`);
	_patch_render($scope0_id, "__tests__/template.marko_0_input_url#4_input_width#7/setup", [$fg__input_url && "input_url", $fg__input_width && "input_width"], $scope0_reason, 0);
	_scope($scope0_id, {
		input_url: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 0)) && input.url,
		input_width: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.width
	}, "__tests__/template.marko", 0, {
		input_url: ["input.url"],
		input_width: ["input.width"]
	}) || ($fg__input_url && _client_guard($scope0_reason, 4) && _patch_write($scope0_id, "PatchMarkedWrite:input_url", input.url, !_server_guard($scope0_reason, 1)), $fg__input_width && _client_guard($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_width", input.width, !_server_guard($scope0_reason, 4)));
}, 1);
