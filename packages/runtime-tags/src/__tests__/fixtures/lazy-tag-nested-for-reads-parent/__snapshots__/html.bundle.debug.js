// grand-child.marko
var grand_child_default = _template("__tests__/grand-child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let copy = input.obj;
	_html(`<button class=grand>${_text_mark($scope0_id, "#text/1", copy.name)}</button>${_el_mark($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/grand-child.marko_0");
	_scope($scope0_id, { copy }, "__tests__/grand-child.marko", 0, { copy: "1:6" });
});

// child.marko
const $GrandChild_withLoadAssets = withLoadAssets(() => grand_child_default, "__tests__/grand-child.marko", flush, "ready:__tests__/grand-child.marko");
var child_default = _template("__tests__/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let obj = { name: "shared" };
	_html(`<button class=child>${_text_mark($scope0_id, "#text/1", obj.name)}</button>${_el_mark($scope0_id, "#button/0")}`);
	_for_until(3, 0, 1, () => {
		const $scope1_id = _scope_id();
		const $childScope = _peek_scope_id();
		$GrandChild_withLoadAssets({ obj });
		_scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			"#childScope/1": _existing_scope($childScope)
		}, "__tests__/child.marko", "5:2");
	}, 0, $scope0_id, "#text/2", 1, 0);
	_script($scope0_id, "__tests__/child.marko_0");
	_scope($scope0_id, { obj }, "__tests__/child.marko", 0, { obj: "3:6" });
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(() => child_default, "__tests__/child.marko", flush, "ready:__tests__/child.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	$Child_withLoadAssets({});
}, 1);
