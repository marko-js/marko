// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_promise = _write_guard($scope0_reason, 0), $wi__input_promise = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_promise__closures = new Set();
	_html("<main>");
	_try($scope0_id, "#text/0", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", input.promise, (v) => {
			const $scope3_id = _scope_id();
			_html(`<span>${_text_resume($scope3_id, "#text/0", v, $wg__input_promise)}</span>`);
			$wi__input_promise && _scope($scope3_id, {}, "__tests__/template.marko", "3:6");
		}, $wg__input_promise);
		$wi__input_promise && _subscribe($input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4"), "__tests__/template.marko_1_input_promise#0:3/subscribe", 0);
		$wi__input_promise && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("<i>loading</i>");
	}, void 0, "__tests__/template.marko_2*content");
	_html("</main>");
	$wi__input_promise && _scope($scope0_id, { "ClosureScopes:input_promise/4": $input_promise__closures }, "__tests__/template.marko", 0);
}, 1);
