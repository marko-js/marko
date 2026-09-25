// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const live = { open: false };
	const { open } = live;
	_html(`<span>${live.open ? "open" : "closed"}</span><button class=open>open</button>${_el_resume($scope0_id, "#button/1")}<button class=read>read</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { live }, "__tests__/template.marko", 0, { live: "1:8" });
}, 1);
