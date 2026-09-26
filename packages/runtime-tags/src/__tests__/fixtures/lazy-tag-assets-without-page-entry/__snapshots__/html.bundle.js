// child.marko
var child_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	_html("<p>child</p>");
});

// partial.marko
const $Child_withLoadAssets = withLoadAssets(child_default, flush, "_a", [{ type: "idle" }]);
var partial_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	$Child_withLoadAssets({});
});

// template.marko
const partialHTML = partial_default.render({ $global: { renderId: "partial" } }).toString();
var template_default = _template("c", (input) => {
	_scope_reason();
	_scope_id();
	_html(`<div>${_escape(partialHTML.includes("child.marko.load.mjs"))}</div>`);
}, 1);
