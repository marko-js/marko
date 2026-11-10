// grand-child.marko
var grand_child_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<div");
	_attrs_content(input, "a", $scope0_id, "div");
	_html(`</div>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_script($scope0_id, "b1");
	_scope($scope0_id, {});
});

// child.marko
const $GrandChild_withLoadAssets = withLoadAssets(() => grand_child_default, "b", flush, "_b");
var child_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	$GrandChild_withLoadAssets({ content: _content("a1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		let count = 0;
		_html(`<button>count:${_text_mark($scope1_id, "b", count, 2)}</button>${_el_mark($scope1_id, "a")}`);
		_script($scope1_id, "a0");
		_scope($scope1_id, { c: count });
	}, $scope0_id) });
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(() => child_default, "a", flush, "_a");
var template_default = _template("c", (input) => {
	_scope_reason();
	_scope_id();
	$Child_withLoadAssets({});
}, 1);
