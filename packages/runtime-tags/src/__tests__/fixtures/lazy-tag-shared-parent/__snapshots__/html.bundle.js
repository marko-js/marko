// components/child.marko
var child_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_escape(input.value)}${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 0))}</span>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// parent-a.marko
const $lazy_Child$1 = withAssets(child_default, "_d");
var parent_a_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	_set_serialize_reason(_serialize_guard($scope0_reason, 0));
	$lazy_Child$1({ value: input.value });
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, { b: _existing_scope($childScope) });
});

// parent-b.marko
const $lazy_Child = withAssets(child_default, "_d");
var parent_b_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	_set_serialize_reason(_serialize_guard($scope0_reason, 0));
	$lazy_Child({ value: input.value * 2 });
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, { b: _existing_scope($childScope) });
});

// template.marko
var template_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = 1;
	_html(`<button>Inc</button>${_el_resume($scope0_id, "a")}`);
	const $childScope = _peek_scope_id();
	_set_serialize_reason(1);
	parent_a_default({ value });
	const $childScope2 = _peek_scope_id();
	_set_serialize_reason(1);
	parent_b_default({ value });
	_script($scope0_id, "c0");
	writeScope($scope0_id, {
		d: value,
		b: _existing_scope($childScope),
		c: _existing_scope($childScope2)
	});
	_resume_branch($scope0_id);
}, 1);
