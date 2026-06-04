// child.marko
var child_default = _template("__tests__/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = input.value;
	_html(`<button class=child>${_escape(input.label)}${_el_resume($scope0_id, "#text/1", _serialize_guard($scope0_reason, 0))}: <!>${_escape(count)}${_el_resume($scope0_id, "#text/2")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/child.marko_0_count");
	writeScope($scope0_id, { count }, "__tests__/child.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
});

// template.marko
const $load_Child = withAssets(child_default, "ready:__tests__/child.marko", [{
	type: "visible",
	selector: ":is(body)"
}]);
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $si__input_value = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let parent = input.value;
	_html(`<button class=parent>parent <!>${_escape(parent)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	const $childScope = _peek_scope_id();
	$load_Child({
		label: "first",
		value: input.value
	});
	_await($scope0_id, "#text/4", resolveAfter(input.value + 10, 1), (value) => {
		const $scope1_id = _scope_id();
		let mid = value;
		_html(`<button class=mid>mid <!>${_escape(mid)}${_el_resume($scope1_id, "#text/1")}</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1_mid");
		writeScope($scope1_id, { mid }, "__tests__/template.marko", "11:2", { mid: "12:8" });
		_resume_branch($scope1_id);
	});
	_await($scope0_id, "#text/5", resolveAfter(input.value + 20, 2), (value) => {
		const $scope2_id = _scope_id();
		const $childScope2 = _peek_scope_id();
		$load_Child({
			label: "second",
			value
		});
		$si__input_value && writeScope($scope2_id, { "#childScope/1": _existing_scope($childScope2) }, "__tests__/template.marko", "18:2");
	}, _serialize_guard($scope0_reason, 0));
	_script($scope0_id, "__tests__/template.marko_0_parent");
	writeScope($scope0_id, {
		parent,
		"#childScope/3": $si__input_value && _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { parent: "4:6" });
	_resume_branch($scope0_id);
}, 1);
