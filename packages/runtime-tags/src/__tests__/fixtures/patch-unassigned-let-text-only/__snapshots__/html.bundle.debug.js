// template.marko
const $template = "<p> </p><p> </p>";
const $walks = "D lD l";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko;D lD ;<p> </p><p> </p>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let x = input.v;
	_html(`<p>${_text_resume($scope0_id, "#text/0", x)}</p><p>${_text_resume($scope0_id, "#text/1", input.w, 1, $scope0_reason, 1)}</p>`);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
