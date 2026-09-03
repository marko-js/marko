// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "a", _content_resume("a2", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", resolveAfter("ready", 1), (value) => {
			const $scope3_id = _scope_id();
			let n = 0;
			_if(() => {}, $scope3_id, "a", 1, 1, 1, 0, 1);
			_html(`<button>${_escape(value)} ${_text_resume($scope3_id, "d", n, 2)}</button>${_el_resume($scope3_id, "b")}`);
			_script($scope3_id, "a0");
			_scope($scope3_id, { g: n });
		});
	}, $scope0_id), { catch: attrTag({ content: _content_resume("a1", (err) => {
		const $scope2_reason = _scope_reason(), $sg__err_message = _serialize_guard($scope2_reason, 0);
		const $scope2_id = _scope_id();
		_html(`caught ${_text_resume($scope2_id, "a", err.message, $sg__err_message * 2)}`);
		_serialize_if($scope2_reason, 0) && _scope($scope2_id, {});
	}, $scope0_id) }) });
}, 1);
