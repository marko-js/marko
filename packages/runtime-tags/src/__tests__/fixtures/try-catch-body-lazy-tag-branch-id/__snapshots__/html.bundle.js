// child.marko
var child_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<span>child</span>");
	_script($scope0_id, "a0", 0);
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "_a");
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "a", _content_resume("b1", () => {
		_scope_id();
		_scope_reason();
		$Child_withLoadAssets({});
	}, $scope0_id), { catch: attrTag({ content: _content_resume("b0", (err) => {
		const $scope2_reason = _scope_reason(), $sg__err_message = _serialize_guard($scope2_reason, 0);
		const $scope2_id = _scope_id();
		_html(_text_resume($scope2_id, "a", err.message, $sg__err_message));
		_serialize_if($scope2_reason, 0) && _scope($scope2_id, {});
	}, $scope0_id) }) });
}, 1);
