// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 1;
	const myObj = {
		foo: 1,
		bar: x + 1
	};
	_html(`<div>${_escape(JSON.stringify(myObj))}${_el_resume($scope0_id, "#text/0")}</div><button>${_escape(x)}${_el_resume($scope0_id, "#text/2")}</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0_x");
	writeScope($scope0_id, { x }, "__tests__/template.marko", 0, { x: "1:6" });
	_resume_branch($scope0_id);
}, 1);
