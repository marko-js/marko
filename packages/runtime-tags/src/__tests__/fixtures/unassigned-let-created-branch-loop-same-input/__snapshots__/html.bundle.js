// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $wi__input_show = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let xs = input.items;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			forOf(xs, (i) => {
				_scope_id();
				_html(`<p>${_escape(i)}</p>`);
			});
			$wi__input_show && _scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", $wg__input_show, $wg__input_show);
	$wi__input_show && _scope($scope0_id, { f: xs });
	$wg__input_show || $wi__input_show && _resume_branch($scope0_id);
}, 1);
