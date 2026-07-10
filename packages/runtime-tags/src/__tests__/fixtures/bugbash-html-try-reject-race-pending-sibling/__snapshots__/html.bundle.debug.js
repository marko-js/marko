// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("before");
	_try($scope0_id, "#text/0", _content_resume("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("a ");
		_await($scope1_id, "#text/0", resolveAfter("slow", 2), (v) => {
			const $scope3_id = _scope_id();
			_html(_escape(v));
		}, 0);
		_html(" b ");
		_try($scope1_id, "#text/1", _content_resume("__tests__/template.marko_4_content", () => {
			const $scope4_id = _scope_id();
			_scope_reason();
			_await($scope4_id, "#text/0", resolveAfter("inner-slow", 3), (v) => {
				const $scope6_id = _scope_id();
				_html(_escape(v));
			}, 0);
		}, $scope1_id), { catch: attrTag({ content: _content_resume("__tests__/template.marko_5_content", (e) => {
			const $scope5_reason = _scope_reason(), $sg__e_message = _serialize_guard($scope5_reason, 0);
			const $scope5_id = _scope_id();
			_html(`INNER:${_sep($sg__e_message)}${_escape(e.message)}${_el_resume($scope5_id, "#text/0", $sg__e_message)}`);
			_serialize_if($scope5_reason, 0) && writeScope($scope5_id, {}, "__tests__/template.marko", "9:6");
		}, $scope1_id) }) });
		_html(" c ");
		_await($scope1_id, "#text/2", rejectAfter(new Error("boom"), 1), (v) => {
			const $scope7_id = _scope_id();
			_html(_escape(v));
		}, 0);
		_html(" d");
	}, $scope0_id), { catch: attrTag({ content: _content_resume("__tests__/template.marko_2_content", (err) => {
		const $scope2_reason = _scope_reason(), $sg__err_message = _serialize_guard($scope2_reason, 0);
		const $scope2_id = _scope_id();
		_html(`CAUGHT:${_sep($sg__err_message)}${_escape(err.message)}${_el_resume($scope2_id, "#text/0", $sg__err_message)}`);
		_serialize_if($scope2_reason, 0) && writeScope($scope2_id, {}, "__tests__/template.marko", "4:4");
	}, $scope0_id) }) });
	_html("after");
}, 1);
