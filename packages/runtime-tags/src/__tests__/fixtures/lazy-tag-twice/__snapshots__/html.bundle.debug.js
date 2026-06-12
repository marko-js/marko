// child.marko
var child_default = _template("__tests__/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = input.value;
	_html(`<button${_attr("id", input.id)}>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/child.marko_0_count");
	writeScope($scope0_id, { count }, "__tests__/child.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "ready:__tests__/child.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	$Child_withLoadAssets({
		id: "a",
		value: input.value
	});
	const $childScope2 = _peek_scope_id();
	$Child_withLoadAssets({
		id: "b",
		value: input.value * 10
	});
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {
		"#childScope/1": _existing_scope($childScope),
		"#childScope/3": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0);
}, 1);
