// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "#text/0", _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "#text/0", resolveAfter("done", 3), (v) => {
			const $scope3_id = _scope_id();
			_html(`<span>${_escape(v)}</span>`);
		}, 0);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_2*content", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		const promise = resolveAfter("hello", 2);
		_html("<div id=ref>0</div>");
		_script($scope2_id, "__tests__/template.marko_2_promise#0", 0);
		_scope($scope2_id, { promise }, "__tests__/template.marko", "7:4", { promise: "8:12" });
	}, $scope0_id) }) });
	_try($scope0_id, "#text/1", _content_resume("__tests__/template.marko_4*content", () => {
		const $scope4_id = _scope_id();
		_scope_reason();
		_await($scope4_id, "#text/0", rejectAfter(new Error("caught"), 1), (v) => {
			const $scope6_id = _scope_id();
			_html(`<p>${_escape(v)}</p>`);
		}, 0);
	}, $scope0_id), { catch: attrTag({ content: _content_resume("__tests__/template.marko_5*content", (err) => {
		const $scope5_reason = _scope_reason(), $sg__err_message = _serialize_guard($scope5_reason, 0);
		const $scope5_id = _scope_id();
		_html(_text_resume($scope5_id, "#text/0", err.message, $sg__err_message));
		_serialize_if($scope5_reason, 0) && _scope($scope5_id, {}, "__tests__/template.marko", "19:4");
	}, $scope0_id) }) });
}, 1);
