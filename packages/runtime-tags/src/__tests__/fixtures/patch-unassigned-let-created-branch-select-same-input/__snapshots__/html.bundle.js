// template.marko
_shells({
	a: "a !;b%;<!><!><!>",
	a0: "a0 a3;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1), $wi__input_show = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let x = input.v;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_if(() => {
				if (x === "a") {
					const $scope2_id = _scope_id();
					_html("<p>A</p>");
					_scope($scope2_id, {});
					return 0;
				} else {
					const $scope3_id = _scope_id();
					_html("<p>B</p>");
					_scope($scope3_id, {});
					return 1;
				}
			}, $scope1_id, "a", 1, 1, 0, 0, 1);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a0"], $scope0_reason, 1);
	!_client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va1", x, 1);
	_scope($scope0_id, { f: $wi__input_show && x });
	$wg__input_show || $wi__input_show && _resume_branch($scope0_id);
}, 1);
