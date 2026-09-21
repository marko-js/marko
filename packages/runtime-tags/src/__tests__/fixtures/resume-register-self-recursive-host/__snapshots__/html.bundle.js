// tags/plain.marko
var plain_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $sg__input_content);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button id=inc>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "c", input.depth ? template_default : plain_default, { depth: 0 }, _content_resume("a0", () => {
		_scope_id();
		_scope_reason();
		_html("self recursive host: registered");
	}, $scope0_id), 0, _serialize_guard($scope0_reason, 0));
	_script($scope0_id, "a1");
	_scope($scope0_id, { g: count });
}, 1);
