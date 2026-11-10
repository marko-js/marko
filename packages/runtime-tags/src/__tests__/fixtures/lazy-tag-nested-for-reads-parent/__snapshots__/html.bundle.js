// grand-child.marko
var grand_child_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let copy = input.obj;
	_html(`<button class=grand>${_text_mark($scope0_id, "b", copy.name)}</button>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, { f: copy });
});

// child.marko
const $GrandChild_withLoadAssets = withLoadAssets(() => grand_child_default, "b", flush, "_b");
var child_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let obj = { name: "shared" };
	_html(`<button class=child>${_text_mark($scope0_id, "b", obj.name)}</button>${_el_mark($scope0_id, "a")}`);
	_for_until(3, 0, 1, () => {
		const $scope1_id = _scope_id();
		const $childScope = _peek_scope_id();
		$GrandChild_withLoadAssets({ obj });
		_scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			b: _existing_scope($childScope)
		});
	}, 0, $scope0_id, "c", 1, 0);
	_script($scope0_id, "a0");
	_scope($scope0_id, { d: obj });
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(() => child_default, "a", flush, "_a");
var template_default = _template("c", (input) => {
	_scope_reason();
	_scope_id();
	$Child_withLoadAssets({});
}, 1);
