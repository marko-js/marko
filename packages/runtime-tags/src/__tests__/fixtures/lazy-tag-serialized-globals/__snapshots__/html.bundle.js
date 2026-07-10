// child.marko
var child_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button>count: <!>${_escape(0)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { c: void 0 });
	_resume_branch($scope0_id);
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "_a");
var template_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	$Child_withLoadAssets({});
}, 1);
