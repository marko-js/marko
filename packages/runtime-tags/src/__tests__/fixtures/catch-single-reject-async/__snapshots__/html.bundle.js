// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("a");
	_try($scope0_id, "a", _content_resume("a1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("b");
		_await($scope1_id, "a", rejectAfter(/* @__PURE__ */ new Error("ERROR!"), 2), (data) => {
			_scope_id();
			_html(_escape(data));
		}, 0);
		_html("c");
	}, $scope0_id), { catch: attrTag({ content: _content_resume("a0", (error) => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html(`${_escape(error.message)}${_el_resume($scope2_id, "a", _serialize_guard($scope2_reason, 0))}`);
		_serialize_if($scope2_reason, 0) && writeScope($scope2_id, {});
	}, $scope0_id) }) });
	_html("d");
	_await($scope0_id, "b", resolveAfter("e", 1), (data) => {
		_scope_id();
		_html(_escape(data));
	}, 0);
	_html("f");
}, 1);
