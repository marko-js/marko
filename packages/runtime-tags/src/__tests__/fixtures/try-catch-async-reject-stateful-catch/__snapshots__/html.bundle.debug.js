// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "#text/0", _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "#text/0", rejectAfter(new Error("nope"), 1), (value) => {
			const $scope3_id = _scope_id();
			_html(_escape(value));
		}, 0);
	}, $scope0_id), { catch: attrTag({ content: _content_resume("__tests__/template.marko_2*content", (err) => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		let n = 0;
		_html(`<button>${_text_resume($scope2_id, "#text/1", err.message, _serialize_guard($scope2_reason, 0))} ${_text_resume($scope2_id, "#text/2", n, 2)}</button>${_el_resume($scope2_id, "#button/0")}`);
		_script($scope2_id, "__tests__/template.marko_2");
		_scope($scope2_id, { n }, "__tests__/template.marko", "7:4", { n: "8:10" });
	}, $scope0_id) }) });
}, 1);
