// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<div>${_html_resume($scope0_id, "a", "<b>small</b>")}</div><p>${_html_resume($scope0_id, "b", "<b>small</b>")}</p><button>${_text_resume($scope0_id, "d", n)}</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { e: n });
}, 1);
