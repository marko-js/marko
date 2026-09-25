// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let live = { open: false };
	_html(`<span>${_text_resume($scope0_id, "a", live.open ? "open" : "closed")}</span><button class=open>open</button>${_el_resume($scope0_id, "b")}<button class=apply>apply</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	_scope($scope0_id, { d: live });
}, 1);
