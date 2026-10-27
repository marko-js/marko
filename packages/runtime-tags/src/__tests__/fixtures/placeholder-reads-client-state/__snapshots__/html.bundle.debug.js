// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_promise = _write_guard($scope0_reason, 0), $wi__input_promise = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $n__closures = new Set();
	const $input_promise__closures = new Set();
	let n = 0;
	_html("<main>");
	_try($scope0_id, "#text/0", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", input.promise, (value) => {
			const $scope4_id = _scope_id();
			_html(`<em>${_text_resume($scope4_id, "#text/0", value, $wg__input_promise)}</em>`);
			$wi__input_promise && _scope($scope4_id, {}, "__tests__/template.marko", "4:6");
		}, $wg__input_promise);
		$wi__input_promise && _subscribe($input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4"), "__tests__/template.marko_1_input_promise#0:5/subscribe", 0);
		$wi__input_promise && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("<p>loading</p>");
		_if(() => {
			if (n) {
				const $scope3_id = _scope_id();
				_html(`<b>ph ${_text_resume($scope3_id, "#text/0", n, 2)}</b>`);
				_script($scope3_id, "__tests__/template.marko_3");
				_subscribe($n__closures, _scope($scope3_id, { "ClosureSignalIndex:n/8": 1 }, "__tests__/template.marko", "9:8"), "__tests__/template.marko_3_n#0:6/subscribe");
				return 0;
			}
		}, $scope2_id, "#text/0", 1, 1, 0, 0, 1);
		_subscribe($n__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "7:6"), "__tests__/template.marko_2_n#0:6/subscribe");
	}, void 0, "__tests__/template.marko_2*content");
	_html(`<button>${_text_resume($scope0_id, "#text/2", n)}</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		n,
		"ClosureScopes:n/8": $n__closures,
		"ClosureScopes:input_promise/7": $wi__input_promise && $input_promise__closures
	}, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);
