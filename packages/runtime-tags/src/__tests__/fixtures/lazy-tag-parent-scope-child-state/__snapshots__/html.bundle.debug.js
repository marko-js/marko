// child.marko
var child_default = _template("__tests__/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = input.value;
	_html(`<button class=child>${_escape(input.value)}${_el_resume($scope0_id, "#text/1", _serialize_guard($scope0_reason, 0))}: <!>${_escape(count)}${_el_resume($scope0_id, "#text/2")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/child.marko_0_count");
	writeScope($scope0_id, { count }, "__tests__/child.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
});

// template.marko
const $load_Child = withAssets(child_default, "ready:__tests__/child.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = 0;
	_html(`<button class=parent>parent: <!>${_escape(value)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	const $childScope = _peek_scope_id();
	_set_serialize_reason(1);
	$load_Child({ value });
	_script($scope0_id, "__tests__/template.marko_0_value");
	writeScope($scope0_id, {
		value,
		"#childScope/3": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { value: "3:6" });
	_resume_branch($scope0_id);
}, 1);
