// tags/child.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	_html("<span>child`\"'</span><span>${value}</span>");
});

// template.marko
const count = 1;
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	_html(`<div>${_escape(count)}\` `);
	child_default({});
	_html("</div>");
}, 1);
