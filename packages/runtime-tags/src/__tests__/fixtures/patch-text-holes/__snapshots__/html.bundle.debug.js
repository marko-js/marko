// template.marko
const $template = "<div class=card><h1> </h1><p> </p></div>";
const $walks = "E lD m";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko;E lD ;<div class=card><h1> </h1><p> </p></div>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div class=card><h1>${_text_resume($scope0_id, "#text/0", input.title, void 0, $scope0_reason, 0)}</h1><p>${_text_resume($scope0_id, "#text/1", input.body, void 0, $scope0_reason, 1)}</p></div>`);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
