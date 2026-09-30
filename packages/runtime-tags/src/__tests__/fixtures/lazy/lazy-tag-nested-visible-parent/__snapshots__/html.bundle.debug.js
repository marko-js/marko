// grand-child.marko
var grand_child_default = _template("__tests__/grand-child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let copy = input.obj;
	_html(`<button class=grand>grand:${_text_resume($scope0_id, "#text/1", copy.name, 2)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/grand-child.marko_0");
	_scope($scope0_id, { copy }, "__tests__/grand-child.marko", 0, { copy: "1:6" });
});

// child.marko
const $GrandChild_withLoadAssets = withLoadAssets(grand_child_default, "ready:__tests__/grand-child.marko");
var child_default = _template("__tests__/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let obj = { name: "shared" };
	_html(`<button class=child>child:${_text_resume($scope0_id, "#text/1", obj.name, 2)}</button>${_el_resume($scope0_id, "#button/0")}`);
	const $childScope = _peek_scope_id();
	$GrandChild_withLoadAssets({ obj });
	_script($scope0_id, "__tests__/child.marko_0");
	_scope($scope0_id, {
		obj,
		"#childScope/3": _existing_scope($childScope)
	}, "__tests__/child.marko", 0, { obj: "3:6" });
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "ready:__tests__/child.marko", [{
	type: "visible",
	selector: "body"
}]);
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	$Child_withLoadAssets({});
}, 1);
