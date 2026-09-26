// child.marko
var child_default = _template("__tests__/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<p>child</p>");
	const $return = _resume(() => console.log("called"), "__tests__/child.marko_0/_return");
	return $return;
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, flush, "ready:__tests__/child.marko", [{
	type: "on-click",
	selector: ".load"
}]);
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<button class=load>load</button>");
	const $childScope = _peek_scope_id();
	let api = $Child_withLoadAssets({});
	const actions = { api };
	_html(`<button class=call>call</button>${_el_resume($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {}, "__tests__/template.marko", 0, {
		api: "4:8",
		actions: "5:8"
	});
	_var_scope($childScope, $scope0_id, {
		api,
		actions
	});
}, 1);
