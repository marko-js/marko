// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	_html("<div id=el></div><div>");
	forOf(["hello"], (_, index) => {
		const $scope1_id = _scope_id();
		_html(`<button>Click</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a0");
		writeScope($scope1_id, { M: index });
	});
	_html("</div>");
}, 1);
