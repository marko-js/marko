// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<div><button>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}<!--${_escape_comment(count)} + ${_escape_comment(count)} = ${_escape_comment(0)}-->${_el_resume($scope0_id, "c")}</div>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { d: count });
}, 1);
