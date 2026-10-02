// child.css
var child_default$1 = ".child {\n  color: green;\n}\n";

// child.marko
var child_default = _template("__tests__/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<span class=child>${_text_resume($scope0_id, "#text/0", input.value, $wg__input_value)}</span>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/child.marko", 0);
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "ready:__tests__/child.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_await($scope0_id, "#text/0", resolveAfter("try", 1), (t) => {
		const $scope1_id = _scope_id();
		_try($scope1_id, "#text/0", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_await($scope2_id, "#text/0", resolveAfter("body", 2), (v) => {
				const $scope3_id = _scope_id();
				_html(`${_escape(t)} ${_escape(v)}`);
			}, 0);
		}, () => {
			_scope_reason();
			const $scope4_id = _scope_id();
			$Child_withLoadAssets({ value: "loading" });
		}, void 0, "__tests__/template.marko_4*content");
	}, 0);
}, 1);
