// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<table><tr><th><button>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}</th></tr><tr><td>foot</td></tr></table>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { c: n });
}, 1);
