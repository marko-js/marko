// template.marko
_shells({ a: "a !a0 a1 a2;D D l D ;<main><button> </button><div class=fixed> </div></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<main><button${_patch_attrs_partial(input.attrs, { "on-click": 1 }, "a", $scope0_id, "button", void 0, $scope0_owned, 0)}>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}<div class=fixed${_patch_attrs_partial(input.box, { class: 1 }, "c", $scope0_id, "div", void 0, $scope0_owned, 1)}>${_patch_text($scope0_id, "d", input.label, $scope0_owned, 2)}${_el_resume($scope0_id, "d")}</div>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	_script($scope0_id, "a2");
	$scope0_reason && writeScope($scope0_id, { j: count });
	_resume_branch($scope0_id);
}, 1, 0);
