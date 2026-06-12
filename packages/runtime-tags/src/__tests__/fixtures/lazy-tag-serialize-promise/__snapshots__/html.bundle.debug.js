// child.marko
var child_default = _template("__tests__/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const promise = Promise.resolve("hello");
	_html("<div id=ref>0</div>");
	_script($scope0_id, "__tests__/child.marko_0_promise");
	writeScope($scope0_id, { promise }, "__tests__/child.marko", 0, { promise: "1:8" });
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "ready:__tests__/child.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	$Child_withLoadAssets({});
}, 1);
