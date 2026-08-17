// template.marko
const $template = "<main><h1> </h1><details><summary>More</summary><p>Body</p></details></main>";
const $walks = "E l l";
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", input.title, $scope0_owned, 0)}${_el_resume($scope0_id, "#text/0")}</h1><details${_attr_details_or_dialog_open($scope0_id, "#details/1", input.show, _resume(function(next) {
		document.querySelector("main").dataset.open = String(next);
	}, "__tests__/template.marko_0/openChange"))}${_patch_bind($scope0_id, "ControlledHandler:#details/1", _resume(function(next) {
		document.querySelector("main").dataset.open = String(next);
	}, "__tests__/template.marko_0/openChange"))}${_patch_control($scope0_id, "#details/1", 4, input.show, $scope0_owned, 1)}><summary>More</summary><p>Body</p></details>${_el_resume($scope0_id, "#details/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && writeScope($scope0_id, {}, "__tests__/template.marko", 0, { "ControlledHandler:#details/1": ["openChange", "3:28"] });
}, 1, 0);
