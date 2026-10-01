// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("a");
	_try($scope0_id, "#text/0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`b${_escape((() => {
			throw new Error("ERROR!");
		})())}`);
	}, void 0, (error) => {
		const $scope2_reason = _scope_reason(), $wg__error_message = _write_guard($scope2_reason, 0);
		const $scope2_id = _scope_id();
		_html(_text_resume($scope2_id, "#text/0", error.message, $wg__error_message));
		_write_if($scope2_reason, 0) && _scope($scope2_id, {}, "__tests__/template.marko", "4:4");
	}, void 0, "__tests__/template.marko_2*content");
	_html("d");
}, 1);
