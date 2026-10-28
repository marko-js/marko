// template.marko
const $template = "<ul></ul>";
const $walks = " b";
let n = 0;
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko; ;<ul></ul>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;D%c%;<li><!>:<!></li>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<ul>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_text_resume($scope1_id, "#text/0", item.id, 1, $scope0_reason, 0)}:${_text_resume($scope1_id, "#text/1", ++n, 2, 0, 0)}</li>`);
		_scope($scope1_id, {}, "__tests__/template.marko", "3:4");
	}, "id", $scope0_id, "#ul/0", 1, 1, 1, 0, 0, "__tests__/template.marko_1*shell", $scope0_reason, 0);
	_html(`</ul>${_el_resume($scope0_id, "#ul/0")}`);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
