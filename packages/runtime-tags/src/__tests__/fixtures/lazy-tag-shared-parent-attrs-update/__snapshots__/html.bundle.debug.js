// components/child.marko
var child_default = _template("__tests__/components/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_escape(input.value)}${_el_resume($scope0_id, "#text/0", _serialize_guard($scope0_reason, 0))}</span>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/components/child.marko", 0);
});

// parent-a.marko
const $load_Child$1 = withAssets(child_default, "ready:__tests__/components/child.marko");
var parent_a_default = _template("__tests__/parent-a.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	_set_serialize_reason(_serialize_guard($scope0_reason, 0));
	$load_Child$1({ value: input.value });
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/parent-a.marko", 0);
});

// parent-b.marko
const $load_Child = withAssets(child_default, "ready:__tests__/components/child.marko");
var parent_b_default = _template("__tests__/parent-b.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	_set_serialize_reason(_serialize_guard($scope0_reason, 0));
	$load_Child({ value: input.value * 2 });
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/parent-b.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = 0;
	_html(`<button>Inc</button>${_el_resume($scope0_id, "#button/0")}`);
	const $childScope = _peek_scope_id();
	_set_serialize_reason(1);
	parent_a_default({ value });
	const $childScope2 = _peek_scope_id();
	_set_serialize_reason(1);
	parent_b_default({ value });
	_script($scope0_id, "__tests__/template.marko_0_value");
	writeScope($scope0_id, {
		value,
		"#childScope/1": _existing_scope($childScope),
		"#childScope/2": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, { value: "4:6" });
	_resume_branch($scope0_id);
}, 1);
