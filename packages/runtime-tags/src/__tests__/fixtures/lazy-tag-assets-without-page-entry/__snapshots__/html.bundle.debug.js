// child.marko
var child_default = _template("__tests__/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<p>child</p>");
});

// partial.marko
const $Child_withLoadAssets = withLoadAssets(child_default, flush, "ready:__tests__/child.marko", [{ type: "idle" }]);
var partial_default = _template("__tests__/partial.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	$Child_withLoadAssets({});
});

// template.marko
const partialHTML = partial_default.render({ $global: { renderId: "partial" } }).toString();
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div>${_escape(partialHTML.includes("child.marko.load.mjs"))}</div>`);
}, 1);
