// tags/hello-setter.marko
var hello_setter_default = _template("__tests__/tags/hello-setter.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const { el } = input;
	_script($scope0_id, "__tests__/tags/hello-setter.marko_0_el");
	writeScope($scope0_id, { el }, "__tests__/tags/hello-setter.marko", 0, { el: "1:10" });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const el = _el($scope0_id, "__tests__/template.marko_0_#div");
	_html(`<div></div>${_el_resume($scope0_id, "#div/0")}`);
	hello_setter_default({ el });
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
