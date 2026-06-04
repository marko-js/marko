// child-a.marko
var child_a_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span class=a>${_escape(input.value)}${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 0))}</span>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// child-b.marko
var child_b_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span class=b>${_escape(input.value * 2)}${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 0))}</span>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// template.marko
const $load_ChildA = withAssets(child_a_default, "_a", [{
	type: "visible",
	selector: ":is(body)"
}]);
const $load_ChildB = withAssets(child_b_default, "_b", [{
	type: "visible",
	selector: ":is(body)"
}]);
var template_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = input.value;
	_html(`<button>Inc</button>${_el_resume($scope0_id, "a")}<div class=a>`);
	const $childScope = _peek_scope_id();
	_set_serialize_reason(1);
	$load_ChildA({ value });
	_html("</div><div class=b>");
	const $childScope2 = _peek_scope_id();
	_set_serialize_reason(1);
	$load_ChildB({ value });
	_html("</div>");
	_script($scope0_id, "c0");
	writeScope($scope0_id, {
		i: value,
		c: _existing_scope($childScope),
		e: _existing_scope($childScope2)
	});
	_resume_branch($scope0_id);
}, 1);
