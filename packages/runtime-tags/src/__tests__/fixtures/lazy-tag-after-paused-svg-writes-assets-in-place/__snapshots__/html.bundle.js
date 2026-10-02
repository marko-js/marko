// child.marko
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<span class=child>${_text_resume($scope0_id, "a", input.value, $wg__input_value)}</span>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "_a");
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<svg>");
	_await($scope0_id, "a", resolveAfter("rr", 2), (v) => {
		_scope_id();
		_html(`<rect${_attr("width", v.length)} height=1></rect>`);
	}, 0);
	_html("</svg>");
	_await($scope0_id, "b", resolveAfter("x", 1), (v) => {
		_scope_id();
		$Child_withLoadAssets({ value: v });
	}, 0);
}, 1);
