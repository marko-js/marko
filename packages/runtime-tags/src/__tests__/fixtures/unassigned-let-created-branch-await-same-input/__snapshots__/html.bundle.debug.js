// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $wi__input_show = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let x = input.v;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "#text/0", Promise.resolve(x), (r) => {
				const $scope2_id = _scope_id();
				_html(`<p>${_escape(r)}</p>`);
			}, 0);
			$wi__input_show && _scope($scope1_id, {}, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", $wg__input_show, $wg__input_show);
	$wi__input_show && _scope($scope0_id, { x }, "__tests__/template.marko", 0, { x: "1:6" });
	$wg__input_show || $wi__input_show && _resume_branch($scope0_id);
}, 1);
