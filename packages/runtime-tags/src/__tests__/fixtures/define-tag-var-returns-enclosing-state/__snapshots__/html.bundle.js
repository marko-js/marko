// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button>${_text_mark($scope0_id, "b", count)}</button>${_el_mark($scope0_id, "a")}`);
	const Double = { content: _content("a0", (input) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		const $return = 0;
		_subscribe($count__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a1", 0);
		_resume_branch($scope1_id);
		return $return;
	}, $scope0_id) };
	const $childScope = _peek_scope_id();
	Double.content({});
	_var($scope0_id, "d", $childScope, "a2");
	_if(() => {}, $scope0_id, "e", 1, 1, 0, 0, 1);
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		f: count,
		h: $count__closures,
		c: _existing_scope($childScope)
	});
}, 1);
