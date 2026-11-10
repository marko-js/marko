// grand-child.marko
var grand_child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $wg__input_content);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// child.marko
const $GrandChild_withLoadAssets = withLoadAssets(() => grand_child_default, "b", flush, "_b");
var child_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	forUntil(3, 0, 1, () => {
		const $scope1_id = _scope_id();
		$GrandChild_withLoadAssets({ content: _content("a1", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			let count = 0;
			_html(`<button>${_text_mark($scope2_id, "b", count)}</button>${_el_mark($scope2_id, "a")}`);
			_script($scope2_id, "a0");
			_scope($scope2_id, { c: count });
		}, $scope1_id) });
	});
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(() => child_default, "a", flush, "_a");
var template_default = _template("c", (input) => {
	_scope_reason();
	_scope_id();
	$Child_withLoadAssets({});
}, 1);
