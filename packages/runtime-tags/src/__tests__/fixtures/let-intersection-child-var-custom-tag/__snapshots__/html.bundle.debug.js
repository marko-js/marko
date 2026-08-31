// tags/let-global.marko
var subsByKey;
var let_global_default = _template("__tests__/tags/let-global.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let value = $global$1[input.value];
	const $return = value;
	_script($scope0_id, "__tests__/tags/let-global.marko_0_input_value#2");
	_scope($scope0_id, {
		input_value: input.value,
		"#TagVariableChange": _resume(function(next) {
			$global$1[input.value] = next;
			subsByKey[input.value]?.forEach((cb) => cb());
		}, "__tests__/tags/let-global.marko_0/valueChange", $scope0_id) || void 0
	}, "__tests__/tags/let-global.marko", 0, { input_value: ["input.value"] });
	_resume_branch($scope0_id);
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	let a = let_global_default({ value: "count" });
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_a#6/var");
	let b = a + 1;
	_html(`<div>${_text_resume($scope0_id, "#text/2", a)}</div><div>${_text_resume($scope0_id, "#text/3", b)}</div><button>${_text_resume($scope0_id, "#text/5", `${a},${b}`)}</button>${_el_resume($scope0_id, "#button/4")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		a,
		b,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		a: "1:13",
		b: "2:6"
	});
	_resume_branch($scope0_id);
}, 1);
