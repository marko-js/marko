// child.marko
_shells({ a: "a;D ;<p class=child> </p>" });
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<p class=child>${_text_mark($scope0_id, "a", input.label, 1, $scope0_reason, 0)}</p>`);
	_scope($scope0_id, {});
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(() => child_default, "a", flush, "_a");
_shells({ b: "b;D%;<main><!></main>" });
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show__OR__input_label = _write_guard($scope0_reason, 0), $ui__input_show__OR__input_label = _unfilled_if($scope0_reason, 0), $ui__input_label = _unfilled_if($scope0_reason, 2), $ui__input_show = _unfilled_if($scope0_reason, 1), $fg__input_show = _filled_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.show ? $Child_withLoadAssets : null, { label: input.label }, 1, 0, 0, $wg__input_show__OR__input_label, $scope0_reason, 0);
	_html("</main>");
	_patch_render($scope0_id, "b0", [$fg__input_show && "d", $fg__input_label && "e"], $scope0_reason, 0);
	_scope($scope0_id, {
		d: ($ui__input_label || $ui__input_show__OR__input_label) && input.show,
		e: ($ui__input_show || $ui__input_show__OR__input_label) && input.label
	}) || ($fg__input_show && $ui__input_label && _patch_write($scope0_id, "xd", input.show, !_server_guard($scope0_reason, 1)), $fg__input_label && $ui__input_show && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 2)));
}, 1);
