// grand-child.marko
var grand_child_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let copy = input.obj;
	_html(`<button class=grand>grand:<!>${_escape(copy.name)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	writeScope($scope0_id, { f: copy });
	_resume_branch($scope0_id);
});

// child.marko
const $GrandChild_withLoadAssets = withLoadAssets(grand_child_default, "_b");
var child_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let obj = { name: "shared" };
	_html(`<button class=child>child:<!>${_escape(obj.name)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	const $childScope = _peek_scope_id();
	$GrandChild_withLoadAssets({ obj });
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		e: obj,
		d: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "_a", [{
	type: "visible",
	selector: "body"
}]);
var template_default = _template("c", (input) => {
	_scope_reason();
	_scope_id();
	$Child_withLoadAssets({});
}, 1);
