// tags/child.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 0;
	_html(`<button class=inc>${_escape(x)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	const $return = x + input.extra;
	_script($scope0_id, "b0");
	writeScope($scope0_id, {
		e: input.extra,
		f: x
	});
	_resume_branch($scope0_id);
	return $return;
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let name = "Marko";
	const $childScope = _peek_scope_id();
	let data = child_default({ extra: 1 });
	_var($scope0_id, "b", $childScope, "a0");
	const message = `${name} ${data}`;
	_html(`<div>${_escape(message)}${_el_resume($scope0_id, "c")}</div>`);
	writeScope($scope0_id, {
		d: name,
		a: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);
