// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const label = input.label;
	_html("<div class=target></div><p class=static>page body</p>");
	_script($scope0_id, "a1");
	writeScope($scope0_id, { d: label });
}, 1);
