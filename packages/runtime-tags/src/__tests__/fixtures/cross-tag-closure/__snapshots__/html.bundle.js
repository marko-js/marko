// tags/my-let.marko
var my_let_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = input.value;
	const $return = value;
	writeScope($scope0_id, { U: _resume((_new_value) => {
		value = _new_value;
	}, "b0", $scope0_id) || void 0 });
	_resume_branch($scope0_id);
	return $return;
});

// tags/my-tag.marko
var my_tag_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, _serialize_guard($scope0_reason, 0));
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	const $childScope = _peek_scope_id();
	let count = my_let_default({ value: 0 });
	_var($scope0_id, "b", $childScope, "a0");
	my_tag_default({ content: _content("a2", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<button>${_escape(count)}${_el_resume($scope1_id, "b")}</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a1");
		_subscribe($count__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope1_id);
	}) });
	writeScope($scope0_id, {
		d: count,
		a: _existing_scope($childScope),
		Bd: $count__closures
	});
}, 1);
