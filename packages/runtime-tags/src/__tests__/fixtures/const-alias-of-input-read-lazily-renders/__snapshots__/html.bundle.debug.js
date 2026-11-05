// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div>${_text_mark($scope0_id, "#text/0", JSON.stringify(input), _write_guard($scope0_reason, 0))}</div><button class=log>log</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/tags/child.marko_0");
	_scope($scope0_id, { input }, "__tests__/tags/child.marko", 0, { input: 0 });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let a = "hello";
	_html(`<button class=change>change</button>${_el_mark($scope0_id, "#button/0")}`);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	child_default({ a });
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
