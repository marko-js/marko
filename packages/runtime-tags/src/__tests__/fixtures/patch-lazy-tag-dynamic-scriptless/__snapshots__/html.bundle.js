// child.marko
_shells({ a: "a;D ;<p class=child> </p>" });
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<p class=child>${_text_resume($scope0_id, "a", input.label, 1, $scope0_reason, 0)}</p>`);
	_scope($scope0_id, {});
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(() => child_default, "a", flush, "_a");
_shells({ b: "b !;D%;<main><!></main>" });
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show__OR__input_label = _write_guard($scope0_reason, 0), $cg__input_label = _client_guard($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.show ? $Child_withLoadAssets : null, { label: input.label }, 1, 0, 0, $wg__input_show__OR__input_label, $scope0_reason, 0);
	_html("</main>");
	_scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.show,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.label
	}) || (_filled_guard($scope0_reason, 1) && $cg__input_label && _patch_fill($scope0_id, "vb0", input.show, !_server_guard($scope0_reason, 1)), $cg__input_label && _content_withhold(input.show), _filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "vb1", input.label, !_server_guard($scope0_reason, 2)), $cg__input_show && _content_withhold(input.label));
}, 1);
