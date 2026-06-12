// child-a.marko
var child_a_default = _template("__tests__/child-a.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span class=a>${_escape(input.value)}${_el_resume($scope0_id, "#text/0", _serialize_guard($scope0_reason, 0))}</span>`);
	_script($scope0_id, "__tests__/child-a.marko_0");
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/child-a.marko", 0);
});

// child-b.marko
var child_b_default = _template("__tests__/child-b.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span class=b>${_escape(input.value * 2)}${_el_resume($scope0_id, "#text/0", _serialize_guard($scope0_reason, 0))}</span>`);
	_script($scope0_id, "__tests__/child-b.marko_0");
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/child-b.marko", 0);
});

// template.marko
const $ChildA_withLoadAssets = withLoadAssets(child_a_default, "ready:__tests__/child-a.marko");
const $ChildB_withLoadAssets = withLoadAssets(child_b_default, "ready:__tests__/child-b.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = 0;
	_html(`<button>Inc</button>${_el_resume($scope0_id, "#button/0")}`);
	const $childScope = _peek_scope_id();
	_set_serialize_reason(1);
	$ChildA_withLoadAssets({ value });
	const $childScope2 = _peek_scope_id();
	_set_serialize_reason(1);
	$ChildB_withLoadAssets({ value });
	_script($scope0_id, "__tests__/template.marko_0_value");
	writeScope($scope0_id, {
		value,
		"#childScope/2": _existing_scope($childScope),
		"#childScope/4": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, { value: "4:6" });
	_resume_branch($scope0_id);
}, 1);
