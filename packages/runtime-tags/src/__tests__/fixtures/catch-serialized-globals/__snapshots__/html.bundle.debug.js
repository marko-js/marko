// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_try($scope0_id, "#text/0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", rejectAfter(new Error("ERROR!"), 1), (data) => {
			const $scope3_id = _scope_id();
			_html(_escape(data));
		}, 0);
	}, void 0, (error) => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		const message = $global$1.settings.message;
		let clicked = false;
		_html(`<button>${_text_resume($scope2_id, "#text/1", clicked ? message : error.message)}</button>${_el_resume($scope2_id, "#button/0")}`);
		_script($scope2_id, "__tests__/template.marko_2");
		_scope($scope2_id, {
			error_message: error?.message,
			message,
			clicked: _write_if($scope2_reason, 0) && clicked
		}, "__tests__/template.marko", "7:4", {
			error_message: ["error.message", "7:11"],
			message: "8:12",
			clicked: "9:10"
		});
	}, void 0, "__tests__/template.marko_2*content");
}, 1);
