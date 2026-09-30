// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("a");
	_try($scope0_id, "a", () => {
		_scope_reason();
		_scope_id();
		_html(`b${_escape((() => {
			throw new Error("ERROR!");
		})())}`);
	}, void 0, (error) => {
		const $scope2_reason = _scope_reason(), $sg__error_message = _serialize_guard($scope2_reason, 0);
		const $scope2_id = _scope_id();
		_html(_text_resume($scope2_id, "a", error.message, $sg__error_message));
		_serialize_if($scope2_reason, 0) && _scope($scope2_id, {});
	}, void 0, "a0");
	_html("d");
}, 1);
