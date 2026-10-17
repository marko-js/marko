// template.marko
_shells({ a: "a !a2 a0; E m D ;<main><p> </p></main><button> </button>" });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let n = 0;
	_html(`<main><p>${_patch_text($scope0_id, "b", $global$1.data.title)}</p></main>${_el_resume($scope0_id, "a")}<button>${_text_resume($scope0_id, "d", n)}</button>${_el_resume($scope0_id, "c")}`);
	_fill_global_subscribe("a0", $scope0_id, 1);
	_fill_global_subscribe("a1", $scope0_id);
	_script($scope0_id, "a2");
	_script($scope0_id, "a0");
	_patch_value($scope0_id, "va3", n, 1);
	$scope0_page && _scope($scope0_id, { e: n });
}, 1);
