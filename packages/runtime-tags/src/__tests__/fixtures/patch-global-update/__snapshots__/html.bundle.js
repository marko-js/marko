// template.marko
_shells({ a: "a !a1;E l bD ;<main><h1> </h1><button>read</button><p> </p></main>" });
var template_default = _template_patch("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let read = "";
	_html(`<main><h1>${_patch_text($scope0_id, "a", $global$1.brand)}</h1><button>read</button>${_el_resume($scope0_id, "b")}<p>${_text_resume($scope0_id, "c", read)}</p></main>`);
	_fill_global_subscribe("a0", $scope0_id);
	_script($scope0_id, "a1");
	_patch_value($scope0_id, "a2", read, 1);
	$scope0_page && _scope($scope0_id, {});
}, 1);
