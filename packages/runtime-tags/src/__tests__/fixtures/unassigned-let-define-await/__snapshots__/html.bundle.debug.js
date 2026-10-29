// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_v__OR__input_w = _write_guard($scope0_reason, 0), $wi__input_w = _write_if($scope0_reason, 2), $wi__input_v__OR__input_w = _write_if($scope0_reason, 0), $wi__input_v = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_w__closures = new Set();
	const $input_v__closures = new Set();
	let show = input.show;
	const Body = { content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_await($scope1_id, "#text/0", Promise.resolve(input.v), (r) => {
			const $scope2_id = _scope_id();
			_html(`<p>${_text_resume($scope2_id, "#text/0", r + input.w, $wg__input_v__OR__input_w)}</p>`);
			$wi__input_v__OR__input_w && _subscribe($wi__input_w && $input_w__closures, _scope($scope2_id, { r: $wi__input_w && r }, "__tests__/template.marko", "2:15", { r: "2:21" }), "__tests__/template.marko_2_input_w#0:5/subscribe", $wg__input_v__OR__input_w);
			$wg__input_v__OR__input_w || $wi__input_v__OR__input_w && _resume_branch($scope2_id);
		}, $wg__input_v__OR__input_w);
		$wi__input_v__OR__input_w && _subscribe($wi__input_v && $input_v__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2"), "__tests__/template.marko_1_input_v#0:4/subscribe", 0);
		$wi__input_v__OR__input_w && _resume_branch($scope1_id);
	}, $scope0_id) };
	if (show) {
		const $scope3_id = _scope_id();
		Body.content({});
	}
	$wi__input_v__OR__input_w && _scope($scope0_id, {
		input_w: $wi__input_v && input.w,
		"ClosureScopes:input_w/8": $wi__input_w && $input_w__closures,
		"ClosureScopes:input_v/7": $wi__input_v && $input_v__closures
	}, "__tests__/template.marko", 0, { input_w: ["input.w"] });
	$wi__input_v__OR__input_w && _resume_branch($scope0_id);
}, 1);
