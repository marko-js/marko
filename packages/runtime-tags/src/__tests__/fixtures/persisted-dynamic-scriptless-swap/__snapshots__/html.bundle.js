// template.marko
_shells({ a: "a;D%;<main><!></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_mode__OR__input_label = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<main>");
	const $tag = input.mode === "a" ? card_a_default : card_b_default;
	const $input2 = { label: input.label };
	_patch_dynamic_tag($scope0_id, "a", $tag, $input2, 0, 0, 0, $scope0_owned, 0);
	_dynamic_tag($scope0_id, "a", $tag, $input2, 0, 0, $sg__input_mode__OR__input_label, 1);
	_html("</main>");
	$scope0_reason && _scope($scope0_id, {
		d: input.mode,
		e: input.label
	});
}, 1, 1);
