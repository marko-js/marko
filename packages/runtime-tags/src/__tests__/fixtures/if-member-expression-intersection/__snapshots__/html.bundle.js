// tags/child.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let hide = true;
	let text = "";
	const id = _id();
	_html(`<div${_attr("id", id)}>`);
	_if(() => {}, $scope0_id, "a", 1, 1, 1, "</div>", 1, 1);
	_script($scope0_id, "b0");
	writeScope($scope0_id, {
		b: hide,
		c: text,
		d: text?.length,
		f: id
	});
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	child_default({});
	child_default({});
}, 1);
