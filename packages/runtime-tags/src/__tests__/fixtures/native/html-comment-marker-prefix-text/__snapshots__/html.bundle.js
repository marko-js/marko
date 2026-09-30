// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}<!--${_escape_comment("M_$1 #text/1")}--><!--${_escape_comment("M_$1 b")}-->`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { e: count });
}, 1);
