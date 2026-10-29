// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_w = _write_guard($scope0_reason, 0), $wi__input_w = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_w__closures = new Set();
	const Body = { content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<p>${_text_resume($scope1_id, "#text/0", input.w, $wg__input_w)}</p>`);
		$wi__input_w && _subscribe($input_w__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2"), "__tests__/template.marko_1_input_w#0:3/subscribe", $wg__input_w);
		$wg__input_w || $wi__input_w && _resume_branch($scope1_id);
	}, $scope0_id) };
	_await($scope0_id, "#text/0", Promise.resolve(input.v), (r) => {
		const $scope2_id = _scope_id();
		Body.content({});
	}, 0);
	$wi__input_w && _scope($scope0_id, { "ClosureScopes:input_w/5": $input_w__closures }, "__tests__/template.marko", 0);
}, 1);
