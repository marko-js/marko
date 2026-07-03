// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div id=only-placeholders>ab<!>${_escape("X")}${_el_resume($scope0_id, "a")}</div><div id=text-placeholder-text>mno<!>${_escape("Y")}${_el_resume($scope0_id, "b")}</div><button>update</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1);
