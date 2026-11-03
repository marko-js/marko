// template.marko
const $template = "<a href=\"/\"> </a>";
const $walks = "D l";
let n = 0;
function random() {
	return ++n / 10;
}
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko;D ;<a href=\"/\"> </a>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<a href="/">${_text_resume($scope0_id, "#text/0", random(), 1, 0, 0)}</a>`);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
