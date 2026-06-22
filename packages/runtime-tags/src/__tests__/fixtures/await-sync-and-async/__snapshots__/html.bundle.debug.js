// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_sync = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_await($scope0_id, "#text/0", input.sync, (a) => {
		const $scope1_id = _scope_id();
		_html(`Sync: ${_sep($sg__input_sync)}${_escape(a)}${_el_resume($scope1_id, "#text/0", $sg__input_sync)}`);
		_serialize_if($scope0_reason, 0) && writeScope($scope1_id, {}, "__tests__/template.marko", "3:2");
	}, $sg__input_sync);
	_await($scope0_id, "#text/1", resolveAfter("async", 1), (b) => {
		const $scope2_id = _scope_id();
		_html(`Async: ${_escape(b)}`);
	}, 0);
}, 1);
