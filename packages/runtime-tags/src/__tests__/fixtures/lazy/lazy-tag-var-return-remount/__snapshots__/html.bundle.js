// tags/inner.marko
var inner_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let focused = 0;
	const focus = _resume(() => {
		focused++;
	}, "c0", $scope0_id);
	_html(`<p>focused ${_text_resume($scope0_id, "a", focused, 2)}</p>`);
	const $return = focus;
	_scope($scope0_id, { b: focused });
	return $return;
});

// child.marko
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	let focus = inner_default({});
	_var($scope0_id, "b", $childScope, "a0");
	_html(`<span>${_text_resume($scope0_id, "c", input.label, _serialize_guard($scope0_reason, 0))}</span>`);
	const $return = focus;
	_scope($scope0_id, { a: _existing_scope($childScope) });
	return $return;
});

// template.marko
withLoadAssets(child_default, "_a");
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let mounted = false;
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {}, $scope0_id, "b");
	_script($scope0_id, "b2");
	_scope($scope0_id, { c: mounted });
}, 1);
