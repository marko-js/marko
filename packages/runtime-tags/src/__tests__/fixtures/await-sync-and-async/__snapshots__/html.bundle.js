// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_sync = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_await($scope0_id, "a", input.sync, (a) => {
		const $scope1_id = _scope_id();
		_html(`Sync: ${_text_resume($scope1_id, "a", a, $wg__input_sync * 2)}`);
		_write_if($scope0_reason, 0) && _scope($scope1_id, {});
	}, $wg__input_sync);
	_await($scope0_id, "b", resolveAfter("async", 1), (b) => {
		_scope_id();
		_html(`Async: ${_escape(b)}`);
	}, 0);
}, 1);
