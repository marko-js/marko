// child.marko
var child_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let item = input.item;
	_html(`<button class=child>${_text_mark($scope0_id, "b", item.name)}</button>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { f: item });
});

// parent.marko
const $Child_withLoadAssets = withLoadAssets(() => child_default, "a", flush$1, "_a");
var parent_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const first = { name: "first" };
	_html(`<button class=parent>parent</button>${_el_mark($scope0_id, "a")}`);
	$Child_withLoadAssets({ item: first });
	_await($scope0_id, "d", resolveAfter("second", 1), (name) => {
		const $scope1_id = _scope_id();
		const second = { name };
		_html(`<button class=later>later</button>${_el_mark($scope1_id, "a")}`);
		$Child_withLoadAssets({ item: second });
		_try($scope1_id, "d", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_await($scope2_id, "a", resolveAfter("third", 2), (_) => {
				_scope_id();
				$Child_withLoadAssets({ item: first });
			}, 0);
		}, () => {
			_scope_reason();
			_scope_id();
			_html("loading");
		}, void 0, "b0");
		_script($scope1_id, "b1");
		_scope($scope1_id, { g: second });
	});
	_script($scope0_id, "b2");
	_scope($scope0_id, { e: first });
});

// template.marko
const $Parent_withLoadAssets = withLoadAssets(() => parent_default, "b", flush$1, "_b");
var template_default = _template("c", (input) => {
	_scope_reason();
	_scope_id();
	$Parent_withLoadAssets({});
}, 1);
