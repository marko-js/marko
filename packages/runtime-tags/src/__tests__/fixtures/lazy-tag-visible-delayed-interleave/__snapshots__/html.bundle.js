// child.marko
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = input.value;
	_html(`<button class=child>${_escape(input.label)}${_el_resume($scope0_id, "b", _serialize_guard($scope0_reason, 0))}: <!>${_escape(count)}${_el_resume($scope0_id, "c")}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { h: count });
	_resume_branch($scope0_id);
});

// template.marko
const $load_Child = withAssets(child_default, "_a", [{
	type: "visible",
	selector: ":is(body)"
}]);
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $si__input_value = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let parent = input.value;
	_html(`<button class=parent>parent <!>${_escape(parent)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	const $childScope = _peek_scope_id();
	$load_Child({
		label: "first",
		value: input.value
	});
	_await($scope0_id, "e", resolveAfter(input.value + 10, 1), (value) => {
		const $scope1_id = _scope_id();
		let mid = value;
		_html(`<button class=mid>mid <!>${_escape(mid)}${_el_resume($scope1_id, "b")}</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "b0");
		writeScope($scope1_id, { e: mid });
		_resume_branch($scope1_id);
	});
	_await($scope0_id, "f", resolveAfter(input.value + 20, 2), (value) => {
		const $scope2_id = _scope_id();
		const $childScope2 = _peek_scope_id();
		$load_Child({
			label: "second",
			value
		});
		$si__input_value && writeScope($scope2_id, { b: _existing_scope($childScope2) });
	}, _serialize_guard($scope0_reason, 0));
	_script($scope0_id, "b1");
	writeScope($scope0_id, {
		j: parent,
		d: $si__input_value && _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);
