// template.marko
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<div><h1${_patch_attr($scope0_id, "#h1/0", "title", $global().locale)}>${_patch_text($scope0_id, "#text/1", $global().brand)}${_el_resume($scope0_id, "#text/1")}</h1>${_el_resume($scope0_id, "#h1/0")}<p>${_patch_text($scope0_id, "#text/2", input.name)}${_el_resume($scope0_id, "#text/2")}</p></div>`);
	$scope0_reason && writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
