// tags/custom-tag/index.marko
var custom_tag_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const { thing: { x, content } } = input;
	_dynamic_tag($scope0_id, "a", content, {}, 0, 0, _serialize_guard($scope0_reason, 2));
	_html(`<div>${_escape(x)}${_el_resume($scope0_id, "b", _serialize_guard($scope0_reason, 1))}</div>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_x = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const { x } = input;
	const $childScope = _peek_scope_id();
	_set_serialize_reason({
		0: $sg__input_x,
		1: $sg__input_x,
		2: $sg__input_x
	});
	let $thing;
	if (x) $thing = attrTag({
		x: 1,
		content: _content("a0", () => {
			_scope_reason();
			_scope_id();
			_html("Hello");
		})
	});
	else $thing = attrTag({
		x: 2,
		content: _content("a1", () => {
			_scope_reason();
			_scope_id();
			_html("Goodbye");
		})
	});
	custom_tag_default({ thing: $thing });
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
