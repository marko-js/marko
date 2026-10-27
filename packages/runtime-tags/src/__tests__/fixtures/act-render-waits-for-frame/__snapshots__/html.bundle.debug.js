// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	const act = _action($scope0_id, "__tests__/template.marko_0_act#5/action");
	_html(`<form><button name=_action value=add${_attr("disabled", act.pending)}>Add</button>${_el_resume($scope0_id, "#button/1")}</form>${_el_resume($scope0_id, "#form/0")}<button>${_text_resume($scope0_id, "#text/3", count)}</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_script($scope0_id, "__tests__/template.marko_0_act#5");
	_scope($scope0_id, {
		count,
		act,
		"TagVariableChange:act": _resume(async (ev) => {
			ev.preventDefault();
			count++;
			await new Promise((resolve) => setTimeout(resolve, 100));
		}, "__tests__/template.marko_0/act", $scope0_id) || void 0
	}, "__tests__/template.marko", 0, {
		count: "1:6",
		act: "2:9",
		"TagVariableChange:act": ["actFn", "2:9"]
	});
}, 1);
