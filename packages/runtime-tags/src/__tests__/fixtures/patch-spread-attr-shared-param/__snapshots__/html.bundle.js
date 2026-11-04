// template.marko
_shells({ a: "a; b ;<a>x</a><img>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_url = _filled_guard($scope0_reason, 1), $fg__input_width = _filled_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	_html(`<a${_attr("href", input.url, $scope0_id, "aa$href", $scope0_reason, 1)}${_attr("title", input.title, $scope0_id, "aa$title", $scope0_reason, 2)}${_attr_class(input.cls, $scope0_id, "aa$class", $scope0_reason, 3)}>x</a>${_el_mark($scope0_id, "a", _updates_from($scope0_reason, 1) || _updates_from($scope0_reason, 2) || _updates_from($scope0_reason, 3))}<img${_attr("src", `${input.url}?w=${input.width}`, $scope0_id, "ab$src", $scope0_reason, 0)}>${_el_mark($scope0_id, "b", _updates_from($scope0_reason, 0))}`);
	_patch_render($scope0_id, "a0", [$fg__input_url && "e", $fg__input_width && "h"], $scope0_reason, 0);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 0)) && input.url,
		h: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.width
	}) || ($fg__input_url && _client_guard($scope0_reason, 4) && _patch_write($scope0_id, "xe", input.url, !_server_guard($scope0_reason, 1)), $fg__input_width && _client_guard($scope0_reason, 1) && _patch_write($scope0_id, "xh", input.width, !_server_guard($scope0_reason, 4)));
}, 1);
