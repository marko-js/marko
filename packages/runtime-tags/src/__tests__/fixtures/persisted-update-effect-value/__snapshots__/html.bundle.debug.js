// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const label = input.label;
	_html("<div class=target></div><p class=static>page body</p>");
	_script($scope0_id, "__tests__/template.marko_0_label");
	writeScope($scope0_id, { label }, "__tests__/template.marko", 0, { label: "5:8" });
}, 1);
