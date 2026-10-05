// child.marko
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<span class=child>${_text_resume($scope0_id, "a", input.value, $wg__input_value)}</span>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, flush$1, "_a");
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_await($scope0_id, "a", resolveAfter("try", 1), (t) => {
		const $scope1_id = _scope_id();
		_try($scope1_id, "a", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_await($scope2_id, "a", resolveAfter("body", 2), (v) => {
				_scope_id();
				_html(`${_escape(t)} ${_escape(v)}`);
			}, 0);
		}, () => {
			_scope_reason();
			_scope_id();
			$Child_withLoadAssets({ value: "loading" });
		}, void 0, "b0");
	}, 0);
}, 1);
