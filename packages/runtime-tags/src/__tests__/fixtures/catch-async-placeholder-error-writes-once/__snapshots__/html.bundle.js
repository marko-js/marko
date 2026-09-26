// child.marko
var child_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const promise = resolveAfter("hello", 3);
	_html("<div id=ref>0</div>");
	_script($scope0_id, "a0", 0);
	_scope($scope0_id, { a: promise });
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "_a");
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "a", _content_resume("b2", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", resolveAfter("content", 1), (value) => {
			_scope_id();
			_html(_escape(value));
		}, 0);
	}, $scope0_id), {
		placeholder: attrTag({ content: _content_resume("b0", () => {
			_scope_reason();
			_await(_scope_id(), "a", resolveAfter("placeholder", 2), (value) => {
				_scope_id();
				_html(_escape(value));
			}, 0);
		}, $scope0_id) }),
		catch: attrTag({ content: _content_resume("b1", (err) => {
			const $scope4_reason = _scope_reason(), $sg__err_message = _serialize_guard($scope4_reason, 0);
			const $scope4_id = _scope_id();
			_html(`caught ${_text_resume($scope4_id, "a", err.message, $sg__err_message * 2)}`);
			$Child_withLoadAssets({});
			_serialize_if($scope4_reason, 0) && _scope($scope4_id, {});
		}, $scope0_id) })
	});
}, 1);
