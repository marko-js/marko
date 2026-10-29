// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_w = _write_guard($scope0_reason, 0), $wi__input_w = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_w__closures = new Set();
	let items = input.items;
	forOf(items, (v) => {
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", Promise.resolve(v), (r) => {
			const $scope2_id = _scope_id();
			_html(`<p>${_text_resume($scope2_id, "#text/0", r + input.w, $wg__input_w)}</p>`);
			$wi__input_w && _subscribe($input_w__closures, _scope($scope2_id, { r }, "__tests__/template.marko", "2:19", { r: "2:25" }), "__tests__/template.marko_2_input_w#0:4/subscribe", $wg__input_w);
			$wg__input_w || $wi__input_w && _resume_branch($scope2_id);
		}, $wg__input_w);
		$wi__input_w && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2");
	});
	$wi__input_w && _scope($scope0_id, { "ClosureScopes:input_w/6": $input_w__closures }, "__tests__/template.marko", 0);
	$wi__input_w && _resume_branch($scope0_id);
}, 1);
