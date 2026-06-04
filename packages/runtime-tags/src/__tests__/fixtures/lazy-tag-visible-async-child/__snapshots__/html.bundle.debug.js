// child.marko
var child_default = _template("__tests__/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_await($scope0_id, "#text/0", resolveAfter(input.value, 1), (value) => {
		const $scope1_id = _scope_id();
		let count = value;
		_html(`<button class=child>child <!>${_escape(count)}${_el_resume($scope1_id, "#text/1")}</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/child.marko_1_count");
		writeScope($scope1_id, { count }, "__tests__/child.marko", "3:2", { count: "4:8" });
		_resume_branch($scope1_id);
	});
});

// template.marko
const $load_Child = withAssets(child_default, "ready:__tests__/child.marko", [{
	type: "visible",
	selector: ":is(body)",
	options: { rootMargin: "100px" }
}]);
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = input.value;
	_html(`<button class=parent>parent <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	const $childScope = _peek_scope_id();
	$load_Child({ value: input.value });
	_script($scope0_id, "__tests__/template.marko_0_count");
	writeScope($scope0_id, {
		count,
		"#childScope/3": _serialize_if($scope0_reason, 0) && _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "3:6" });
	_resume_branch($scope0_id);
}, 1);
