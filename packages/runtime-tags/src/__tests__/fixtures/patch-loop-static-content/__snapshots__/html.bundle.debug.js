// template.marko
const $template = "<main><h1> </h1><!></main>";
const $walks = "E l%l";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko;E l%;<main><h1> </h1><!></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;Db%;<p>item <!></p>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_text_resume($scope0_id, "#text/0", input.title, 1, $scope0_reason, 0)}</h1>`);
	_for_of(["a", "b"], (name) => {
		const $scope1_id = _scope_id();
		_html(`<p>item ${_text_resume($scope1_id, "#text/0", name, 2, 0, 0)}</p>`);
		_scope($scope1_id, {}, "__tests__/template.marko", "3:4");
	}, 0, $scope0_id, "#text/1", 1, 1, 1, 0, 0, "__tests__/template.marko_1*shell", 0, 0);
	_html("</main>");
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
