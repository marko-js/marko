// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_w = _write_guard($scope0_reason, 1), $wi__input_w__OR__input_show = _write_if($scope0_reason, 0), $wi__input_show = _write_if($scope0_reason, 2), $wi__input_w = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_w__closures = new Set();
	const Body = { content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<p>${_text_resume($scope1_id, "#text/0", input.w, $wg__input_w)}</p>`);
		$wi__input_w__OR__input_show && _subscribe($wi__input_w && $input_w__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2"), "__tests__/template.marko_1_input_w#0:3/subscribe", $wg__input_w);
		$wg__input_w || $wi__input_w__OR__input_show && _resume_branch($scope1_id);
	}, $scope0_id) };
	let view = input.show ? Body : null;
	_dynamic_tag($scope0_id, "#text/0", view, {}, 0, 0, 0);
	$wi__input_w__OR__input_show && _scope($scope0_id, {
		input_w: $wi__input_show && input.w,
		Body: $wi__input_show && Body,
		"ClosureScopes:input_w/8": $wi__input_w && $input_w__closures
	}, "__tests__/template.marko", 0, {
		input_w: ["input.w"],
		Body: "1:9"
	});
	$wi__input_w__OR__input_show && _resume_branch($scope0_id);
}, 1);
