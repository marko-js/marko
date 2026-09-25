// tags/child.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	return { open: false };
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let state = child_default({});
	_html(`<button class=open>open</button>${_el_resume($scope0_id, "c")}<button class=read>read</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { e: state });
}, 1);
