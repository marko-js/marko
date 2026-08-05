// template.marko
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title)}${_escape(input.title)}${_el_resume($scope0_id, "a")}</h1><details${_attr_details_or_dialog_open($scope0_id, "b", input.show, _resume(function(next) {
		document.querySelector("main").dataset.open = String(next);
	}, "a0"))}${_patch_bind($scope0_id, "Eb", _resume(function(next) {
		document.querySelector("main").dataset.open = String(next);
	}, "a0"))}${_patch_control($scope0_id, "b", 4, input.show)}><summary>More</summary><p>Body</p></details>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a1");
	$scope0_reason && writeScope($scope0_id, {});
}, 1);
