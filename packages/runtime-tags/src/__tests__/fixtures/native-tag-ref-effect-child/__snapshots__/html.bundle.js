// tags/hello-setter.marko
var hello_setter_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const { el } = input;
	_script($scope0_id, "b0");
	writeScope($scope0_id, { c: el });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const el = _el($scope0_id, "a0");
	_html(`<div></div>${_el_resume($scope0_id, "a")}`);
	hello_setter_default({ el });
	writeScope($scope0_id, {});
}, 1);
