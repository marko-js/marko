// tags/custom-tag/index.marko
var custom_tag_default = _template("__tests__/tags/custom-tag/index.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const { thing: { x, content } } = input;
	_dynamic_tag($scope0_id, "#text/0", content, {}, 0, 0, _serialize_guard($scope0_reason, 2));
	_html(`<div>${_escape(x)}${_el_resume($scope0_id, "#text/1", _serialize_guard($scope0_reason, 1))}</div>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/tags/custom-tag/index.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
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
	if (x) {
		$thing = attrTag({
			x: 1,
			content: _content("__tests__/template.marko_1_content", () => {
				_scope_reason();
				const $scope1_id = _scope_id();
				_html("Hello");
			})
		});
	} else {
		$thing = attrTag({
			x: 2,
			content: _content("__tests__/template.marko_2_content", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html("Goodbye");
			})
		});
	}
	custom_tag_default({ thing: $thing });
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
