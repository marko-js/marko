// template.marko
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div class=card><h1>${_escape(input.title)}${_el_resume($scope0_id, "a")}${_patch_hole($scope0_id, "a", input.title)}</h1><p>${_escape(input.body)}${_el_resume($scope0_id, "b")}${_patch_hole($scope0_id, "b", input.body)}</p></div>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
}, 1);
