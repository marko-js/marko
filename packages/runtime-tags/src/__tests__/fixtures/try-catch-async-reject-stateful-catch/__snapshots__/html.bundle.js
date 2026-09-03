// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "a", _content_resume("a2", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", rejectAfter(/* @__PURE__ */ new Error("nope"), 1), (value) => {
			_scope_id();
			_html(_escape(value));
		}, 0);
	}, $scope0_id), { catch: attrTag({ content: _content_resume("a1", (err) => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		let n = 0;
		_html(`<button>${_text_resume($scope2_id, "b", err.message, _serialize_guard($scope2_reason, 0))} ${_text_resume($scope2_id, "c", n, 2)}</button>${_el_resume($scope2_id, "a")}`);
		_script($scope2_id, "a0");
		_scope($scope2_id, { g: n });
	}, $scope0_id) }) });
}, 1);
