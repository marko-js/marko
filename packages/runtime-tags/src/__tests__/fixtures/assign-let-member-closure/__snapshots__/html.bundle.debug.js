// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let live = { open: false };
	_html(`<span>${_text_resume($scope0_id, "#text/0", live.open ? "open" : "closed")}</span><button class=open>open</button>${_el_resume($scope0_id, "#button/1")}<button class=apply>apply</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_script($scope0_id, "__tests__/template.marko_0_live#3");
	_scope($scope0_id, { live }, "__tests__/template.marko", 0, { live: "1:6" });
}, 1);
