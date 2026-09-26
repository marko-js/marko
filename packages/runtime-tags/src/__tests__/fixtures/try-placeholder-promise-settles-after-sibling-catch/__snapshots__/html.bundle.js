// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "a", _content_resume("a2", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", resolveAfter("done", 3), (v) => {
			_scope_id();
			_html(`<span>${_escape(v)}</span>`);
		}, 0);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("a1", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		const promise = resolveAfter("hello", 2);
		_html("<div id=ref>0</div>");
		_script($scope2_id, "a0", 0);
		_scope($scope2_id, { a: promise });
	}, $scope0_id) }) });
	_try($scope0_id, "b", _content_resume("a4", () => {
		const $scope4_id = _scope_id();
		_scope_reason();
		_await($scope4_id, "a", rejectAfter(/* @__PURE__ */ new Error("caught"), 1), (v) => {
			_scope_id();
			_html(`<p>${_escape(v)}</p>`);
		}, 0);
	}, $scope0_id), { catch: attrTag({ content: _content_resume("a3", (err) => {
		const $scope5_reason = _scope_reason(), $sg__err_message = _serialize_guard($scope5_reason, 0);
		const $scope5_id = _scope_id();
		_html(_text_resume($scope5_id, "a", err.message, $sg__err_message));
		_serialize_if($scope5_reason, 0) && _scope($scope5_id, {});
	}, $scope0_id) }) });
}, 1);
