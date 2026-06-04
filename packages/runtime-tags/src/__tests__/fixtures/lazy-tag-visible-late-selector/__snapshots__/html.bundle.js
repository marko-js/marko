// child.marko
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_escape(input.value)}${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 0))}</span>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// template.marko
const $load_Child = withAssets(child_default, "_a", [{
	type: "visible",
	selector: "#target"
}]);
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = false;
	let value = 0;
	_html(`<button id=show>Show</button>${_el_resume($scope0_id, "a")}<button id=inc>Inc</button>${_el_resume($scope0_id, "b")}`);
	_if(() => {}, $scope0_id, "c", 1, 1, 1, 0, 1);
	const $childScope = _peek_scope_id();
	_set_serialize_reason(1);
	$load_Child({ value });
	_script($scope0_id, "b0");
	_script($scope0_id, "b1");
	writeScope($scope0_id, {
		f: show,
		g: value,
		e: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);
