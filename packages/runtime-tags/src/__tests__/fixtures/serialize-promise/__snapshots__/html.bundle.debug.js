// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const promise = Promise.resolve("hello");
	_html("<div id=ref>0</div>");
	_script($scope0_id, "__tests__/template.marko_0_promise");
	writeScope($scope0_id, { promise }, "__tests__/template.marko", 0, { promise: "1:8" });
}, 1);
