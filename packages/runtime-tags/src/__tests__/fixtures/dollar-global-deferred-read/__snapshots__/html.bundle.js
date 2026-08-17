// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_try($scope0_id, "a", _content_resume("a1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", $global$1.slow.then(() => $global$1.fast), (v) => {
			_scope_id();
			_html(`<div>${_escape(v)}</div>`);
		}, 0);
	}, $scope0_id), { catch: attrTag({ content: _content_resume("a0", (err) => {
		const $scope2_reason = _scope_reason(), $sg__err_message = _serialize_guard($scope2_reason, 0);
		const $scope2_id = _scope_id();
		_html(`<div>caught: ${_sep($sg__err_message)}${_escape(err.message)}${_el_resume($scope2_id, "a", $sg__err_message)}</div>`);
		_serialize_if($scope2_reason, 0) && writeScope($scope2_id, {});
	}, $scope0_id) }) });
}, 1);
