// tags/hello/index.marko
var hello_default = _template("__tests__/tags/hello/index.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.item, [1], 0, 1, _serialize_guard($scope0_reason, 0));
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/hello/index.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = true;
	_set_serialize_reason(1);
	let $item;
	if (x) {
		$item = attrTag({ content: _content("__tests__/template.marko_1*content", (y) => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_html(`y: ${_text_resume($scope1_id, "#text/0", y, _serialize_guard($scope1_reason, 0) * 2)}`);
			_serialize_if($scope1_reason, 0) && _scope($scope1_id, {}, "__tests__/template.marko", "4:10");
		}, $scope0_id) });
	}
	const $childScope = _peek_scope_id();
	let menuEl = hello_default({ item: $item });
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_menuEl#4/var");
	_html(`<button>Toggle</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		x,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { x: "1:6" });
	_resume_branch($scope0_id);
}, 1);
