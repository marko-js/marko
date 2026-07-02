// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 0;
	let prev = false;
	_html(`<div>x=<span>${_escape(x)}${_el_resume($scope0_id, "#text/0")}</span>, was=<!>${_escape(prev)}${_el_resume($scope0_id, "#text/1")}</div><button id=increment>Increment</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_script($scope0_id, "__tests__/template.marko_0_x");
	writeScope($scope0_id, { x }, "__tests__/template.marko", 0, { x: "1:6" });
	_resume_branch($scope0_id);
}, 1);
