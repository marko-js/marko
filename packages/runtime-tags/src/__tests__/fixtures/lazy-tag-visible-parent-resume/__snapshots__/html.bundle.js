// child.marko
var child_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = input.value;
	_html(`<button class=child>child <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { f: count });
	_resume_branch($scope0_id);
});

// template.marko
const $load_Child = withAssets(child_default, "_a", [{
	type: "visible",
	selector: ":is(body)",
	options: { rootMargin: "100px" }
}]);
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = input.value;
	_html(`<button class=parent>parent <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	const $childScope = _peek_scope_id();
	$load_Child({ value: input.value });
	_script($scope0_id, "b0");
	writeScope($scope0_id, {
		h: count,
		d: _serialize_if($scope0_reason, 0) && _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);
