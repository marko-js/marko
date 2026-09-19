// child.marko
var child_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	_html("<span class=child>c</span>");
});

// template.marko
withLoadAssets(child_default, "_a");
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button>Show</button>${_el_resume($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", null, { value: 1 });
	_script($scope0_id, "b0");
	_scope($scope0_id, {});
}, 1);
