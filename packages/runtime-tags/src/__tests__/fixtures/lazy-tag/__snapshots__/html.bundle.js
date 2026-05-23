// child.marko
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = input.value;
	_html(`<button>${_escape(input.label)}${_el_resume($scope0_id, "b", _serialize_guard($scope0_reason, 0))}: <!>${_escape(count)}${_el_resume($scope0_id, "c")}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { h: count });
	_resume_branch($scope0_id);
});

// template.marko
const $lazy_Child = withAssets(child_default, "_a");
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	$lazy_Child({
		label: "x",
		value: input.value
	});
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, { b: _existing_scope($childScope) });
}, 1);
