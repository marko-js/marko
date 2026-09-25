// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $return = { open: false };
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let state = child_default({});
	_html(`<button class=open>open</button>${_el_resume($scope0_id, "#button/2")}<button class=read>read</button>${_el_resume($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { state }, "__tests__/template.marko", 0, { state: "1:8" });
}, 1);
