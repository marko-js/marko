// child.marko
var child_default = _template("__tests__/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $return = input.value * 2;
	return $return;
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, flush, "ready:__tests__/child.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = 1;
	const $childScope = _peek_scope_id();
	let doubled = $Child_withLoadAssets({ value });
	_var($scope0_id, "#scopeOffset/2", $childScope, "__tests__/template.marko_0_doubled#6/var");
	_html(`<button>${_text_resume($scope0_id, "#text/4", doubled)}</button>${_el_resume($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		value,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { value: "3:6" });
}, 1);
