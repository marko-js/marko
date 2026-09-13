// template.marko
_shells({ a: "a !a0 a1 a2;D D l D ;<main><button> </button><div class=fixed> </div></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<main><button${_patch_attrs_partial(input.attrs, { "on-click": 1 }, "a", $scope0_id, "button", void 0, $scope0_reason, 0)}>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}<div class=fixed${_patch_attrs_partial(input.box, { class: 1 }, "c", $scope0_id, "div", void 0, $scope0_reason, 1)}>${_patch_text($scope0_id, "d", input.label, void 0, $scope0_reason, 2)}</div>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	_script($scope0_id, "a2");
	$scope0_page && _scope($scope0_id, { j: count });
}, 1, 0);
