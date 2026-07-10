// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("before");
	_try($scope0_id, "#text/0", _content_resume("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("a ");
		_await($scope1_id, "#text/0", resolveAfter("first", 1), (v) => {
			const $scope4_id = _scope_id();
			_html(_escape(v));
		}, 0);
		_html(" b ");
		_await($scope1_id, "#text/1", rejectAfter(new Error("boom"), 3), (v) => {
			const $scope5_id = _scope_id();
			_html(_escape(v));
		}, 0);
		_html(" c");
	}, $scope0_id), {
		placeholder: attrTag({ content: _content_resume("__tests__/template.marko_2_content", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html("LOADING");
		}, $scope0_id) }),
		catch: attrTag({ content: _content_resume("__tests__/template.marko_3_content", (err) => {
			const $scope3_reason = _scope_reason(), $sg__err_message = _serialize_guard($scope3_reason, 0);
			const $scope3_id = _scope_id();
			_html(`CAUGHT:${_sep($sg__err_message)}${_escape(err.message)}${_el_resume($scope3_id, "#text/0", $sg__err_message)}`);
			_serialize_if($scope3_reason, 0) && writeScope($scope3_id, {}, "__tests__/template.marko", "5:4");
		}, $scope0_id) })
	});
	_html("after");
	_await($scope0_id, "#text/1", resolveAfter("outer", 2), (v) => {
		const $scope6_id = _scope_id();
		_html(_escape(v));
	}, 0);
}, 1);
