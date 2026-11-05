// child.marko
var child_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	$global();
	_html("<span></span>");
	_script($scope0_id, "a0", 0);
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(() => child_default, "a", flush, "_a");
var template_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	_html("<main>");
	$Child_withLoadAssets({});
	_html("</main>");
}, 1);
