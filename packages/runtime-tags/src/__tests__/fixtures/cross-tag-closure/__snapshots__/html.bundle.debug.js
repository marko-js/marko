// tags/my-let.marko
var my_let_default = _template("__tests__/tags/my-let.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = input.value;
	const $return = value;
	writeScope($scope0_id, { "#TagVariableChange": _resume((_new_value) => {
		value = _new_value;
	}, "__tests__/tags/my-let.marko_0/valueChange", $scope0_id) || void 0 }, "__tests__/tags/my-let.marko", 0);
	_resume_branch($scope0_id);
	return $return;
});

// tags/my-tag.marko
var my_tag_default = _template("__tests__/tags/my-tag.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, _serialize_guard($scope0_reason, 0));
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/tags/my-tag.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = new Set();
	const $childScope = _peek_scope_id();
	let count = my_let_default({ value: 0 });
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_count/var");
	my_tag_default({ content: _content("__tests__/template.marko_1_content", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<button>${_escape(count)}${_el_resume($scope1_id, "#text/1")}</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1_count");
		_subscribe($count__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:1"));
		_resume_branch($scope1_id);
	}) });
	writeScope($scope0_id, {
		count,
		"#childScope/0": _existing_scope($childScope),
		"ClosureScopes:count": $count__closures
	}, "__tests__/template.marko", 0, { count: "1:8" });
}, 1);
