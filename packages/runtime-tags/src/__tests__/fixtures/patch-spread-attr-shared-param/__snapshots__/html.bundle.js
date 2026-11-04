// template.marko
_shells({ a: "a !a0; b ;<a>x</a><img>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_url = _filled_guard($scope0_reason, 5), $fg__input_title = _filled_guard($scope0_reason, 6), $fg__input_cls = _filled_guard($scope0_reason, 7), $fg__input_width = _filled_guard($scope0_reason, 8);
	const $scope0_id = _scope_id();
	const attrs = {
		href: input.url,
		title: input.title,
		class: input.cls
	};
	_html(`<a${_attrs(attrs, "a", $scope0_id, "a", 0, $scope0_reason, 3)}>x</a>${_el_mark($scope0_id, "a")}<img${_attr("src", `${input.url}?w=${input.width}`, $scope0_id, "b", $scope0_reason, 2)}>${_el_mark($scope0_id, "b", _updates_from($scope0_reason, 2))}`);
	_script($scope0_id, "a0", 1, $fg__input_url || $fg__input_title || $fg__input_cls, [
		$fg__input_url && "e",
		$fg__input_title && "f",
		$fg__input_cls && "g"
	]);
	_patch_render($scope0_id, "a1", [
		$fg__input_url && "e",
		$fg__input_title && "f",
		$fg__input_cls && "g"
	], $scope0_reason, 3);
	_patch_render($scope0_id, "a2", [$fg__input_url && "e", $fg__input_width && "i"], $scope0_reason, 2);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.url,
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.title,
		g: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 3)) && input.cls,
		i: (_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 2)) && input.width
	}) || ($fg__input_url && _client_guard($scope0_reason, 4) && _patch_write($scope0_id, "xe", input.url, !_server_guard($scope0_reason, 5)), $fg__input_title && _client_guard($scope0_reason, 1) && _patch_write($scope0_id, "xf", input.title, !_server_guard($scope0_reason, 6)), $fg__input_cls && _client_guard($scope0_reason, 0) && _patch_write($scope0_id, "xg", input.cls, !_server_guard($scope0_reason, 7)), $fg__input_width && _client_guard($scope0_reason, 5) && _patch_write($scope0_id, "xi", input.width, !_server_guard($scope0_reason, 8)));
}, 1);
