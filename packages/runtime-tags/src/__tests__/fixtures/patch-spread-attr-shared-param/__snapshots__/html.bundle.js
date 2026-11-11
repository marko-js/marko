// template.marko
_shells({ a: "a !a0; b ;<a>x</a><img>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_url__OR__input_title__OR__input_cls = _unfilled_if($scope0_reason, 3), $ui__input_url__OR__input_width = _unfilled_if($scope0_reason, 2), $ui__input_title__OR__input_cls__OR__input_width = _unfilled_if($scope0_reason, 4), $fg__input_url = _filled_guard($scope0_reason, 5), $fg__input_title = _filled_guard($scope0_reason, 6), $fg__input_cls = _filled_guard($scope0_reason, 7), $fg__input_width = _filled_guard($scope0_reason, 8);
	const $scope0_id = _scope_id();
	const attrs = {
		href: input.url,
		title: input.title,
		class: input.cls
	};
	_html(`<a${_attrs(attrs, "a", $scope0_id, "a", 0, $scope0_reason, 3)}>x</a>${_el_mark($scope0_id, "a")}<img${_attr("src", `${input.url}?w=${input.width}`, $scope0_id, "b", $scope0_reason, 2)}>${_el_mark($scope0_id, "b", _updates_from($scope0_reason, 2))}`);
	_script($scope0_id, "a0");
	_patch_render($scope0_id, "a1", (($fg__input_url ? " e" : "") + ($fg__input_title ? " f" : "") + ($fg__input_cls ? " g" : "")).slice(1), $scope0_reason, 3);
	_patch_render($scope0_id, "a2", (($fg__input_url ? " e" : "") + ($fg__input_width ? " i" : "")).slice(1), $scope0_reason, 2);
	_scope($scope0_id, {
		e: ($ui__input_title__OR__input_cls__OR__input_width || $ui__input_url__OR__input_width || $ui__input_url__OR__input_title__OR__input_cls) && input.url,
		f: $ui__input_url__OR__input_title__OR__input_cls && input.title,
		g: $ui__input_url__OR__input_title__OR__input_cls && input.cls,
		i: $ui__input_url__OR__input_width && input.width
	}) || ($fg__input_url && $ui__input_title__OR__input_cls__OR__input_width && _patch_write($scope0_id, "xe", input.url, !_server_guard($scope0_reason, 5)), $fg__input_title && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xf", input.title, !_server_guard($scope0_reason, 6)), $fg__input_cls && _unfilled_if($scope0_reason, 0) && _patch_write($scope0_id, "xg", input.cls, !_server_guard($scope0_reason, 7)), $fg__input_width && _unfilled_if($scope0_reason, 5) && _patch_write($scope0_id, "xi", input.width, !_server_guard($scope0_reason, 8)));
}, 1);
