// tags/hello/index.marko
var hello_default = _template("__tests__/tags/hello/index.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.item, [1], 0, 1, _serialize_guard($scope0_reason, 0));
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/tags/hello/index.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = true;
	const $childScope = _peek_scope_id();
	_set_serialize_reason(1);
	let $item;
	if (x) {
		$item = attrTag({ content: _content("__tests__/template.marko_1_content", (y) => {
			const $scope1_reason = _scope_reason(), $sg__y = _serialize_guard($scope1_reason, 0);
			const $scope1_id = _scope_id();
			_html(`y: ${_sep($sg__y)}${_escape(y)}${_el_resume($scope1_id, "#text/0", $sg__y)}`);
			_serialize_if($scope1_reason, 0) && writeScope($scope1_id, {}, "__tests__/template.marko", "4:10");
		}) });
	}
	hello_default({ item: $item });
	_html(`<button>Toggle</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		x,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { x: "1:6" });
	_resume_branch($scope0_id);
}, 1);
