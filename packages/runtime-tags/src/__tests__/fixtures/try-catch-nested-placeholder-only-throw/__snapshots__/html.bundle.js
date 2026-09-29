// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_try($scope1_id, "a", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_await($scope3_id, "a", resolveAfter("inner", 2), (value) => {
				const $scope5_id = _scope_id();
				let n = 0;
				_if(() => {}, $scope5_id, "a");
				_html(`<button>${_escape(value)} ${_text_resume($scope5_id, "d", n, 2)}</button>${_el_resume($scope5_id, "b")}`);
				_script($scope5_id, "a0");
				_scope($scope5_id, { g: n });
			});
		}, () => {
			_scope_reason();
			_scope_id();
			_html("loading");
		}, void 0, "a1");
	}, void 0, (err) => {
		const $scope2_reason = _scope_reason(), $sg__err_message = _serialize_guard($scope2_reason, 0);
		const $scope2_id = _scope_id();
		_html(`caught ${_text_resume($scope2_id, "a", err.message, $sg__err_message * 2)}`);
		_serialize_if($scope2_reason, 0) && _scope($scope2_id, {});
	}, void 0, "a2");
}, 1);
