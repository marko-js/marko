// child.marko
var child_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = input.value;
	_await($scope0_id, "a", resolveAfter(10, 1), (value) => {
		const $scope1_id = _scope_id();
		_html(`<button>${_escape(count)}${_el_resume($scope1_id, "b")}:${_escape(value)}</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a0");
		_subscribe($count__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope1_id);
	});
	writeScope($scope0_id, {
		e: count,
		Be: $count__closures
	});
	_resume_branch($scope0_id);
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "_a");
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<div id=before>before</div>");
	const $childScope = _peek_scope_id();
	$Child_withLoadAssets({ value: input.value });
	_html("<div id=after>after</div>");
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, { b: _existing_scope($childScope) });
}, 1);
