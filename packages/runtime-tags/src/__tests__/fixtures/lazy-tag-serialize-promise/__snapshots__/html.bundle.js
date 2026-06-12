// child.marko
var child_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const promise = Promise.resolve("hello");
	_html("<div id=ref>0</div>");
	_script($scope0_id, "a0");
	writeScope($scope0_id, { a: promise });
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "_a");
var template_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	$Child_withLoadAssets({});
}, 1);
