// tags/counter-box/index.marko
var counter_box_default = _template("__tests__/tags/counter-box/index.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let mode = "a";
	_html(`<span>${_text_resume($scope0_id, "#text/0", mode)}</span><button class=mode>b</button>${_el_resume($scope0_id, "#button/1")}`);
	const $return = mode;
	_script($scope0_id, "__tests__/tags/counter-box/index.marko_0");
	_scope($scope0_id, {
		input_onA: input.onA,
		input_onB: input.onB,
		mode,
		"#TagVariableChange": (mode === "a" ? input.onA : input.onB) || void 0
	}, "__tests__/tags/counter-box/index.marko", 0, {
		input_onA: ["input.onA"],
		input_onB: ["input.onB"],
		mode: "1:6"
	});
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	let count = counter_box_default({
		onA: input.a,
		onB: input.b
	});
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_count#7/var");
	_html(`<p>${_text_resume($scope0_id, "#text/2", count)}</p>`);
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
