// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const go = _action($scope0_id, "__tests__/template.marko_0_go#2/action");
	_html(`<a href=/next>go ${_text_resume($scope0_id, "#text/1", go.pending, 2)}</a>${_el_resume($scope0_id, "#a/0")}`);
	_script($scope0_id, "__tests__/template.marko_0_go#2");
	_scope($scope0_id, {
		go,
		"TagVariableChange:go": void 0 || void 0
	}, "__tests__/template.marko", 0, {
		go: "1:9",
		"TagVariableChange:go": ["goFn", "1:9"]
	});
}, 1);
