// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", resolveAfter("ready", 1), (value) => {
			const $scope3_id = _scope_id();
			let n = 0;
			_if(() => {}, $scope3_id, "a");
			_html(`<button>${_escape(value)} ${_text_resume($scope3_id, "d", n, 2)}</button>${_el_resume($scope3_id, "b")}`);
			_script($scope3_id, "a0");
			_scope($scope3_id, { g: n });
		});
	}, void 0, (err) => {
		const $scope2_reason = _scope_reason(), $wg__err_message = _write_guard($scope2_reason, 0);
		const $scope2_id = _scope_id();
		_html(`caught ${_text_resume($scope2_id, "a", err.message, $wg__err_message * 2)}`);
		_write_if($scope2_reason, 0) && _scope($scope2_id, {});
	}, void 0, "a1");
}, 1);
