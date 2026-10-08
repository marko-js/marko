// template.marko
_shells({ a: "a !a0;D b bD l D ;<main><textarea></textarea><select><option value=a>A</option><option value=b>B</option></select><p> </p><button> </button></main>" });
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<main><textarea${_patch_control($scope0_id, "a", 2, "hello", 0, 0)}>${_textarea_value("hello")}</textarea>`);
	_attr_select_value($scope0_id, "b", "b", void 0, () => {
		_html(`<select${_patch_control($scope0_id, "b", 3, "b", 0, 0)}><option${_attr_option_value("a")}>A</option><option${_attr_option_value("b")}>B</option></select>`);
	});
	_html(`<p>${_patch_text($scope0_id, "c", input.note, void 0, $scope0_reason, 0)}</p><button>${_text_resume($scope0_id, "e", count)}</button>${_el_resume($scope0_id, "d")}</main>`);
	_script($scope0_id, "a0");
	_patch_value($scope0_id, "a1", count, 1);
	$scope0_page && _scope($scope0_id, { i: count });
}, 1);
