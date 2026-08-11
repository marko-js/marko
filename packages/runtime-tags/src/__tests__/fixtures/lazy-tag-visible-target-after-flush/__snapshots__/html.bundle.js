// child.marko
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_value = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const { value } = input;
	_html(`<div>child ${_sep($sg__input_value)}${_escape(value)}${_el_resume($scope0_id, "a", $sg__input_value)}</div>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "_a", [{
	type: "visible",
	selector: "#footer"
}]);
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_serialize_reason(_serialize_guard($scope0_reason, 0));
	const $childScope = _peek_scope_id();
	$Child_withLoadAssets({ value: input.value });
	_try($scope0_id, "c", _content_resume("b1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", resolveAfter(0, 4), () => {
			_scope_id();
			_html("<footer id=footer>late</footer>");
		}, 0);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("b0", () => {
		_scope_reason();
		_scope_id();
		_html("loading...");
	}, $scope0_id) }) });
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, { b: _existing_scope($childScope) });
}, 1);
