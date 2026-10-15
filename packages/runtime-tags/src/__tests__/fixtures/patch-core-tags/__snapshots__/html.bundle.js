// template.marko
_shells({ a: "a !a0; E l ;<main><p> </p><button>+</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	const uid = _id();
	console.log(input.title);
	_html(`<main${_patch_attr($scope0_id, "aa data-id", "data-id", uid, 0, 0)}><p>${_text_resume($scope0_id, "b", count)}</p><button>+</button>${_el_resume($scope0_id, "c")}</main>${_el_resume($scope0_id, "a", 0)}`);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1", void 0, 1);
	_server_guard($scope0_reason, 0) && _patch_effect($scope0_id, "ea1", "f");
	_patch_value($scope0_id, "va2", count, 1);
	$scope0_page ? _scope($scope0_id, {
		f: input.value,
		h: count
	}) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "wf", input.value, !_server_guard($scope0_reason, 0));
}, 1);
