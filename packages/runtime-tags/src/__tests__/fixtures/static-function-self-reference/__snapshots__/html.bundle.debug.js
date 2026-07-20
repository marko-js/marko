// template.marko
function tick() {
	requestAnimationFrame(tick);
}
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<div>hello</div>");
}, 1);
