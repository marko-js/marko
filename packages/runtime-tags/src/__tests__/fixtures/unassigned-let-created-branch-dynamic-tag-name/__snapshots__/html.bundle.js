// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $wi__input_show = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let x = input.v;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", x === "a" ? "b" : "i", {}, _content("a0", () => {
				_scope_id();
				_scope_reason();
				_html("t");
			}, $scope1_id), 0, 0);
			$wi__input_show && _scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", $wg__input_show, $wg__input_show);
	$wi__input_show && _scope($scope0_id, { f: x });
	$wg__input_show || $wi__input_show && _resume_branch($scope0_id);
}, 1);
