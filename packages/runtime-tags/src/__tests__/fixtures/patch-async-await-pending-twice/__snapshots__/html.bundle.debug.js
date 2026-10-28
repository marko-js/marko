// template.marko
const $template = "<main><h1> </h1><!></main>";
const $walks = "E l%l";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;D ;<em> </em>",
	"__tests__/template.marko_0_#text#1/await": "__tests__/template.marko_0_#text#1/await;D ;<em> </em>",
	"__tests__/template.marko": "__tests__/template.marko;E l%;<main><h1> </h1><!></main>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_text_resume($scope0_id, "#text/0", input.title, 1, $scope0_reason, 0)}</h1>`);
	_await($scope0_id, "#text/1", input.promise, (value) => {
		const $scope1_id = _scope_id();
		_html(`<em>${_text_resume($scope1_id, "#text/0", value, 1, $scope0_reason, 1)}</em>`);
		_scope($scope1_id, {}, "__tests__/template.marko", "3:4");
	}, 1, "__tests__/template.marko_1*content", _unfilled_if($scope0_reason, 1) && 2, 1);
	_html("</main>");
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
