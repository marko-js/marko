// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button${_attr("disabled", input.act.pending)}>go</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/child.marko_0_input_act#3");
	_scope($scope0_id, { input_act: input.act }, "__tests__/tags/child.marko", 0, { input_act: ["input.act"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const act = _action($scope0_id, "__tests__/template.marko_0_act#1/action");
	const $childScope = _peek_scope_id();
	child_default({ act });
	_scope($scope0_id, {
		"TagVariableChange:act": _resume(async () => {
			await resolveAfter(0);
		}, "__tests__/template.marko_0/act") || void 0,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { "TagVariableChange:act": ["actFn", "2:9"] });
}, 1);
