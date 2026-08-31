// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div id=only-placeholders>ab${_text_resume($scope0_id, "a", "X", 2)}</div><div id=text-placeholder-text>mno${_text_resume($scope0_id, "b", "Y", 2)}</div><button>update</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1);
