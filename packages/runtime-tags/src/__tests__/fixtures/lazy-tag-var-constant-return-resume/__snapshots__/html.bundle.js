// child.marko
var child_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	_html("<p>child</p>");
	return _resume(() => console.log("called"), "a0");
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, flush, "_a", [{
	type: "on-click",
	selector: ".load"
}]);
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<button class=load>load</button>");
	const $childScope = _peek_scope_id();
	let api = $Child_withLoadAssets({});
	const actions = { api };
	_html(`<button class=call>call</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, {});
	_var_scope($childScope, $scope0_id, {
		e: api,
		f: actions
	});
}, 1);
