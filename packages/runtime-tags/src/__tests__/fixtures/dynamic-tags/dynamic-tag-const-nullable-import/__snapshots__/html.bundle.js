// tags/custom-tag.marko
var custom_tag_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<div class=custom>custom ${_text_resume($scope0_id, "a", input.content ? "with" : "without", $sg__input_content * 2)} body</div>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = false;
	_dynamic_tag($scope0_id, "a", null, {}, _content("a0", () => {
		_scope_id();
		_scope_reason();
		_html("Fallback Body");
	}, $scope0_id));
	_html(`<button id=toggle></button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, { c: show });
}, 1);
