// tags/let-global.marko
var subsByKey;
var let_global_default = _template("__tests__/tags/let-global.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = $global()[input.value];
	const $return = value;
	_script($scope0_id, "__tests__/tags/let-global.marko_0_input_value");
	writeScope($scope0_id, {
		input_value: input.value,
		"#TagVariableChange": _resume(function(next) {
			$global()[input.value] = next;
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
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_a/var");
	let b = a + 1;
	_html(`<div>${_escape(a)}${_el_resume($scope0_id, "#text/2")}</div><div>${_escape(b)}${_el_resume($scope0_id, "#text/3")}</div><button>${_escape(`${a}`)},${_escape(`${b}`)}${_el_resume($scope0_id, "#text/5")}</button>${_el_resume($scope0_id, "#button/4")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		a,
		b,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		a: "1:13",
		b: "2:6"
	});
	_resume_branch($scope0_id);
}, 1);
