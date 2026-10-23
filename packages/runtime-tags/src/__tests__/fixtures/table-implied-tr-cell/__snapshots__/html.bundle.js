// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<table><tbody><td><button>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}</td></tbody></table><table><td>${_text_resume($scope0_id, "c", n)}</td></table>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { d: n });
}, 1);
