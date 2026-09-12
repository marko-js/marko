// child.marko
_shells({ a: "a;D ;<p class=child> </p>" });
var child_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<p class=child>${_patch_text($scope0_id, "a", input.label, void 0, $scope0_owned, 0)}</p>`);
	$scope0_reason && _scope($scope0_id, {});
}, 0, 0);

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "_a", void 0, 1);
_shells({ b: "b;D%;<main><!></main>" });
var template_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show__OR__input_label = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<main>");
	const $tag = input.show ? $Child_withLoadAssets : null;
	const $input2 = { label: input.label };
	_dynamic_tag($scope0_id, "a", $tag, $input2, 0, 0, $sg__input_show__OR__input_label, _patch_dynamic_tag($scope0_id, "a", $tag, $input2, 0, 0, $scope0_owned, 0));
	_html("</main>");
	$scope0_reason && _scope($scope0_id, {
		d: _source_if($scope0_reason, 2) && input.show,
		e: _source_if($scope0_reason, 1) && input.label
	});
}, 1, 1);
