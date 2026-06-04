// child.marko
var child_default = _template("__tests__/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_escape(input.value)}${_el_resume($scope0_id, "#text/0", _serialize_guard($scope0_reason, 0))}</span>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/child.marko", 0);
});

// template.marko
const $load_Child = withAssets(child_default, "ready:__tests__/child.marko", [{
	type: "on-mouseover",
	selector: ":is(body)"
}]);
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = 0;
	_html(`<button>Inc</button>${_el_resume($scope0_id, "#button/0")}`);
	const $childScope = _peek_scope_id();
	_set_serialize_reason(1);
	$load_Child({ value });
	_script($scope0_id, "__tests__/template.marko_0_value");
	writeScope($scope0_id, {
		value,
		"#childScope/2": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { value: "3:6" });
	_resume_branch($scope0_id);
}, 1);
