// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_w = _write_guard($scope0_reason, 0), $wi__input_w = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_w__closures = new Set();
	let items = input.items;
	const Body = { content: _content("__tests__/template.marko_1*content", ({ v }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__v = _write_guard($scope1_reason, 0), $wi__v = _write_if($scope1_reason, 0);
		_html(`<p>${_text_resume($scope1_id, "#text/0", v + input.w, $wg__input_w || $wg__v)}</p>`);
		($wi__input_w || $wi__v) && _subscribe($wi__input_w && $input_w__closures, _scope($scope1_id, {
			v: $wi__input_w && v,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "2:2", { v: "2:15" }), "__tests__/template.marko_1_input_w#0:4/subscribe", $wg__input_w || $wg__v);
		$wg__input_w || $wg__v || ($wi__input_w || $wi__v) && _resume_branch($scope1_id);
	}, $scope0_id) };
	forOf(items, (v) => {
		const $scope2_id = _scope_id();
		Body.content({ v });
	});
	$wi__input_w && _scope($scope0_id, {
		input_w: input.w,
		"ClosureScopes:input_w/6": $wi__input_w && $input_w__closures
	}, "__tests__/template.marko", 0, { input_w: ["input.w"] });
	$wi__input_w && _resume_branch($scope0_id);
}, 1);
