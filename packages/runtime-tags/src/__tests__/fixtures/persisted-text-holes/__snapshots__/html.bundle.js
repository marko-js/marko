// template.marko
var template_default = _template_persisted("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div class=card><h1>${_patch_text($scope0_id, "a", input.title)}${_escape(input.title)}${_el_resume($scope0_id, "a")}</h1><p>${_patch_text($scope0_id, "b", input.body)}${_escape(input.body)}${_el_resume($scope0_id, "b")}</p></div>`);
	writeScope($scope0_id, {});
}, 1);
