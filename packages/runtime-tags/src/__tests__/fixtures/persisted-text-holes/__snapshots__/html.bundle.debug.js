// template.marko
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	_persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<div class=card><h1>${_patch_text($scope0_id, "#text/0", input.title)}${_escape(input.title)}${_el_resume($scope0_id, "#text/0")}</h1><p>${_patch_text($scope0_id, "#text/1", input.body)}${_escape(input.body)}${_el_resume($scope0_id, "#text/1")}</p></div>`);
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
