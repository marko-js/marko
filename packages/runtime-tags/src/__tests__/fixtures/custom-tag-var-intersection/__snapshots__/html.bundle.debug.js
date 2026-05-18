// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 0;
	_html(`<button class=inc>${_escape(x)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	const $return = x + input.extra;
	_script($scope0_id, "__tests__/tags/child.marko_0_x");
	writeScope($scope0_id, {
		input_extra: input.extra,
		x
	}, "__tests__/tags/child.marko", 0, {
		input_extra: ["input.extra"],
		x: "1:6"
	});
	_resume_branch($scope0_id);
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let name = "Marko";
	const $childScope = _peek_scope_id();
	let data = child_default({ extra: 1 });
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_data/var");
	const message = `${name} ${data}`;
	_html(`<div>${_escape(message)}${_el_resume($scope0_id, "#text/2")}</div>`);
	writeScope($scope0_id, {
		name,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { name: "1:6" });
	_resume_branch($scope0_id);
}, 1);
