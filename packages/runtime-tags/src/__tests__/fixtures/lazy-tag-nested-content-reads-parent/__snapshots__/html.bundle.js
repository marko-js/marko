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
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	$GrandChild_withLoadAssets({ content: _content("a2", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<button>count:${_text_mark($scope1_id, "b", count, 2)}</button>${_el_mark($scope1_id, "a")}`);
		_script($scope1_id, "a0");
		_subscribe($count__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a1");
	}, $scope0_id) });
	_scope($scope0_id, {
		c: count,
		d: $count__closures
	});
	_resume_branch($scope0_id);
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(() => child_default, "a", flush, "_a");
var template_default = _template("c", (input) => {
	_scope_reason();
	_scope_id();
	$Child_withLoadAssets({});
}, 1);
