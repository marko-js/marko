// child.marko
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = input.value;
	_html(`<button class=child>${_escape(input.value)}${_el_resume($scope0_id, "b", _serialize_guard($scope0_reason, 0))}: <!>${_escape(count)}${_el_resume($scope0_id, "c")}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { g: count });
	_resume_branch($scope0_id);
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "_a");
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = 0;
	_html(`<button class=parent>parent: <!>${_escape(value)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	const $childScope = _peek_scope_id();
	_set_serialize_reason(1);
	$Child_withLoadAssets({ value });
	_script($scope0_id, "b0");
	writeScope($scope0_id, {
		e: value,
		d: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);
