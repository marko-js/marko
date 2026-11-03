// template.marko
let n = 0;
function random() {
	return ++n / 10;
}
_shells({ a: "a;D ;<a href=\"/\"> </a>" });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<a href="/">${_text_resume($scope0_id, "a", random(), 1, 0, 0)}</a>`);
	_scope($scope0_id, {});
}, 1);
