// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "#text/0", _content_resume("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "#text/0", rejectAfter(new Error("ERROR!"), 1), (data) => {
			const $scope3_id = _scope_id();
			_html(_escape(data));
		}, 0);
	}, $scope0_id), { catch: attrTag({ content: _content_resume("__tests__/template.marko_2_content", (error) => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		const message = $global().settings.message;
		let clicked = false;
		_html(`<button>${_escape(clicked ? message : error.message)}${_el_resume($scope2_id, "#text/1")}</button>${_el_resume($scope2_id, "#button/0")}`);
		_script($scope2_id, "__tests__/template.marko_2");
		writeScope($scope2_id, {
			error_message: error?.message,
			message,
			clicked: _serialize_if($scope2_reason, 0) && clicked
		}, "__tests__/template.marko", "7:4", {
			error_message: ["error.message", "7:11"],
			message: "8:12",
			clicked: "9:10"
		});
		_resume_branch($scope2_id);
	}, $scope0_id) }) });
}, 1);
