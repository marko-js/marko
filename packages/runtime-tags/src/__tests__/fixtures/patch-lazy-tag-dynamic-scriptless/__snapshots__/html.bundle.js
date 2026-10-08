// child.marko
_shells({ a: "a;D ;<p class=child> </p>" });
var child_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<p class=child>${_patch_text($scope0_id, "a", input.label, void 0, $scope0_reason, 0)}</p>`);
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, flush, "_a");
_shells({ b: "b !;D%;<main><!></main>" });
var template_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show__OR__input_label = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	const $tag = input.show ? $Child_withLoadAssets : null;
	const $input2 = { label: input.label };
	_dynamic_tag($scope0_id, "a", $tag, $input2, 0, 0, $wg__input_show__OR__input_label, void 0, _patch_dynamic_tag($scope0_id, "a", $tag, $input2, 0, 0, $scope0_reason, 0));
	_html("</main>");
	_patch_write($scope0_id, "d", input.show, 1);
	_patch_write($scope0_id, "e", input.label, 1);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "b2");
	$scope0_page ? _scope($scope0_id, {
		d: _source_if($scope0_reason, 2) && input.show,
		e: _source_if($scope0_reason, 1) && input.label
	}) : (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "b0", input.show), _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "b1", input.label));
}, 1);
