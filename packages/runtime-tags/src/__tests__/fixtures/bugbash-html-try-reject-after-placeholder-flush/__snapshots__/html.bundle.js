// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("before");
	_try($scope0_id, "a", _content_resume("a2", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("a ");
		_await($scope1_id, "a", resolveAfter("first", 1), (v) => {
			_scope_id();
			_html(_escape(v));
		}, 0);
		_html(" b ");
		_await($scope1_id, "b", rejectAfter(/* @__PURE__ */ new Error("boom"), 3), (v) => {
			_scope_id();
			_html(_escape(v));
		}, 0);
		_html(" c");
	}, $scope0_id), {
		placeholder: attrTag({ content: _content_resume("a0", () => {
			_scope_reason();
			_scope_id();
			_html("LOADING");
		}, $scope0_id) }),
		catch: attrTag({ content: _content_resume("a1", (err) => {
			const $scope3_reason = _scope_reason(), $sg__err_message = _serialize_guard($scope3_reason, 0);
			const $scope3_id = _scope_id();
			_html(`CAUGHT:${_sep($sg__err_message)}${_escape(err.message)}${_el_resume($scope3_id, "a", $sg__err_message)}`);
			_serialize_if($scope3_reason, 0) && writeScope($scope3_id, {});
		}, $scope0_id) })
	});
	_html("after");
	_await($scope0_id, "b", resolveAfter("outer", 2), (v) => {
		_scope_id();
		_html(_escape(v));
	}, 0);
}, 1);
