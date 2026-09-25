// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const live = { open: false };
	_html(`<button class=open>open</button>${_el_resume($scope0_id, "#button/0")}<button class=read>read</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_script($scope0_id, "__tests__/template.marko_0_live#2");
	_scope($scope0_id, { live }, "__tests__/template.marko", 0, { live: "1:8" });
}, 1);
