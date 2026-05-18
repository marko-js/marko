// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<div id=el></div><div>");
	forOf(["hello"], (_, index) => {
		const $scope1_id = _scope_id();
		_html(`<button>Click</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		writeScope($scope1_id, { "#LoopKey": index }, "__tests__/template.marko", "3:4", { "#LoopKey": "3:11" });
	});
	_html("</div>");
}, 1);
