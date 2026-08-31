// child-a.marko
var child_a_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span class=a>${_text_resume($scope0_id, "a", input.value, _serialize_guard($scope0_reason, 0))}</span>`);
	_script($scope0_id, "a0");
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// child-b.marko
var child_b_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span class=b>${_text_resume($scope0_id, "a", input.value * 2, _serialize_guard($scope0_reason, 0))}</span>`);
	_script($scope0_id, "b0");
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
const $ChildA_withLoadAssets = withLoadAssets(child_a_default, "_a");
const $ChildB_withLoadAssets = withLoadAssets(child_b_default, "_b");
var template_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = 0;
	_html(`<button>Inc</button>${_el_resume($scope0_id, "a")}`);
	_set_serialize_reason(1);
	const $childScope = _peek_scope_id();
	$ChildA_withLoadAssets({ value });
	_set_serialize_reason(1);
	const $childScope2 = _peek_scope_id();
	$ChildB_withLoadAssets({ value });
	_script($scope0_id, "c0");
	_scope($scope0_id, {
		f: value,
		c: _existing_scope($childScope),
		e: _existing_scope($childScope2)
	});
	_resume_branch($scope0_id);
}, 1);
