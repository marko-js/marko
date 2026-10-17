// template.marko
_shells({ a: "a !a0; bD ;<div></div><p> </p>" });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<div></div>${_el_resume($scope0_id, "a")}<p>${_patch_text($scope0_id, "b", $global$1.k)}</p>`);
	_fill_global_subscribe("a0", $scope0_id, 1);
	_fill_global_subscribe("a1", $scope0_id);
	_script($scope0_id, "a0");
	$scope0_page && _scope($scope0_id, {});
}, 1);
