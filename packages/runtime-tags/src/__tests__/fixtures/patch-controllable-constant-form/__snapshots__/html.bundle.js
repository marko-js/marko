// template.marko
_shells({ a: "a !a0;DeD l D ;<form><textarea name=msg></textarea><select name=s><option value=a>A</option><option value=b selected>B</option></select><input type=radio name=r checked value=a><input name=q value=default><p> </p><button type=button> </button></form>" });
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<form><textarea name=msg></textarea><select name=s><option${_attr_option_value("a")}>A</option><option${_attr_option_value("b")} selected>B</option></select><input type=radio name=r checked value=a><input name=q value=default><p>${_patch_text($scope0_id, "a", input.note, void 0, $scope0_reason, 0)}</p><button type=button>${_text_resume($scope0_id, "c", count)}</button>${_el_resume($scope0_id, "b")}</form>`);
	_script($scope0_id, "a0");
	_patch_value($scope0_id, "a1", count, 1);
	$scope0_page && _scope($scope0_id, { g: count });
}, 1);
