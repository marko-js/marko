// template.marko
const $template = "<div><h1> </h1><p> </p></div>";
const $walks = "D D lD m";
_shells({ "__tests__/template.marko": "__tests__/template.marko;D D lD ;<div><h1> </h1><p> </p></div>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<div><h1${_patch_attr($scope0_id, "#h1/0", "title", $global$1.locale)}>${_patch_text($scope0_id, "#text/1", $global$1.brand)}${_el_resume($scope0_id, "#text/1")}</h1>${_el_resume($scope0_id, "#h1/0")}<p>${_patch_text($scope0_id, "#text/2", input.name, $scope0_owned, 0)}${_el_resume($scope0_id, "#text/2")}</p></div>`);
	$scope0_reason && writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1, 1);
