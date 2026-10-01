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
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_try($scope1_id, "a", () => {
			_scope_reason();
			_scope_id();
			$Child_withLoadAssets({});
		}, void 0, (err) => {
			const $scope4_reason = _scope_reason(), $wg__err_message = _write_guard($scope4_reason, 0);
			const $scope4_id = _scope_id();
			_html(`caught: ${_text_resume($scope4_id, "a", err.message, $wg__err_message * 2)}`);
			_write_if($scope4_reason, 0) && _scope($scope4_id, {});
		}, void 0, "b0");
	}, () => {
		_scope_reason();
		_scope_id();
		_html("loading outer...");
	}, void 0, "b1");
}, 1);
