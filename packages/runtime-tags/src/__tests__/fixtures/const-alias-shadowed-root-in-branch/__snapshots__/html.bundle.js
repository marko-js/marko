// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const x = input.x;
	{
		const $scope1_id = _scope_id();
		_html(`<button>${_text_resume($scope1_id, "b", "")}</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a0");
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}
	_scope($scope0_id, { d: x });
}, 1);
