// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_w = _write_guard($scope0_reason, 2), $wi__input_v__OR__input_w = _write_if($scope0_reason, 0), $wg__input_v = _write_guard($scope0_reason, 1), $wi__input_v = _write_if($scope0_reason, 1), $wi__input_w = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_w__closures = new Set();
	let show = input.show;
	_if(() => {
		if (input.v) {
			const $scope1_id = _scope_id();
			const Body = { content: _content("__tests__/template.marko_2*content", () => {
				const $scope2_id = _scope_id();
				const $scope2_reason = _scope_reason();
				_html(`<p>${_text_resume($scope2_id, "#text/0", input.w, $wg__input_w)}</p>`);
				$wi__input_v__OR__input_w && _subscribe($wi__input_w && $input_w__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "2:14"), "__tests__/template.marko_2_input_w#0:5/subscribe", $wg__input_w);
				$wg__input_w || $wi__input_v__OR__input_w && _resume_branch($scope2_id);
			}, $scope1_id) };
			if (show) {
				const $scope3_id = _scope_id();
				Body.content({});
			}
			$wi__input_v__OR__input_w && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", $wg__input_v, $wg__input_v);
	$wi__input_v__OR__input_w && _scope($scope0_id, {
		input_w: $wi__input_v && input.w,
		show: $wi__input_v && show,
		"ClosureScopes:input_w/7": $wi__input_w && $input_w__closures
	}, "__tests__/template.marko", 0, {
		input_w: ["input.w"],
		show: "1:6"
	});
	$wg__input_v || $wi__input_v__OR__input_w && _resume_branch($scope0_id);
}, 1);
