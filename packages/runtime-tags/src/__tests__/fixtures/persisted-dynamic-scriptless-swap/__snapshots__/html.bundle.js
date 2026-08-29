// template.marko
_shells({ a: "a;D%;<main><!></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<main>");
	_patch_dynamic_tag($scope0_id, "a", input.mode === "a" ? card_a_default : card_b_default, $scope0_owned, 0);
	_dynamic_tag($scope0_id, "a", input.mode === "a" ? card_a_default : card_b_default, { label: input.label }, 0, 0, _source_guard($scope0_reason, 0), 1);
	_html("</main>");
	$scope0_reason && _scope($scope0_id, {
		d: input.mode,
		e: input.label
	});
}, 1, 1);
