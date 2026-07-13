// child.marko
var child_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	_html("<span id=child>child</span>");
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "_a");
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "a", _content_resume("b3", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_try($scope1_id, "a", _content_resume("b1", () => {
			_scope_id();
			_scope_reason();
			$Child_withLoadAssets({});
		}, $scope1_id), { catch: attrTag({ content: _content_resume("b0", (err) => {
			const $scope4_reason = _scope_reason(), $sg__err_message = _serialize_guard($scope4_reason, 0);
			const $scope4_id = _scope_id();
			_html(`caught: ${_sep($sg__err_message)}${_escape(err.message)}${_el_resume($scope4_id, "a", $sg__err_message)}`);
			_serialize_if($scope4_reason, 0) && writeScope($scope4_id, {});
		}, $scope1_id) }) });
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("b2", () => {
		_scope_reason();
		_scope_id();
		_html("loading outer...");
	}, $scope0_id) }) });
}, 1);
