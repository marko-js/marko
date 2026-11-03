// template.marko
_shells({ a: "a;E lD ;<div class=card><h1> </h1><p> </p></div>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div class=card><h1>${_text_resume($scope0_id, "a", input.title, 1, $scope0_reason, 0)}</h1><p>${_text_resume($scope0_id, "b", input.body, 1, $scope0_reason, 1)}</p></div>`);
	_scope($scope0_id, {});
}, 1);
