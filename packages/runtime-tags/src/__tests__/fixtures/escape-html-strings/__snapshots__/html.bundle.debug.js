// tags/child.marko
const value = "No!!";
var child_default = _template("__tests__/tags/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<span>child`\"'</span><span>${value}</span>");
});

// template.marko
const count = 1;
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div>${_escape(count)}\` `);
	child_default({});
	_html("</div>");
}, 1);
