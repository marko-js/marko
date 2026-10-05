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
const $Child_withLoadAssets = withLoadAssets(child_default, flush$1, "_a");
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", resolveAfter("content", 1), (value) => {
			_scope_id();
			_html(_escape(value));
		}, 0);
	}, () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_await($scope2_id, "a", resolveAfter("placeholder", 2), (value) => {
			_scope_id();
			_html(_escape(value));
		}, 0);
	}, (err) => {
		const $scope4_reason = _scope_reason(), $wg__err_message = _write_guard($scope4_reason, 0);
		const $scope4_id = _scope_id();
		_html(`caught ${_text_resume($scope4_id, "a", err.message, $wg__err_message * 2)}`);
		$Child_withLoadAssets({});
		_write_if($scope4_reason, 0) && _scope($scope4_id, {});
	}, "b0", "b1");
}, 1);
