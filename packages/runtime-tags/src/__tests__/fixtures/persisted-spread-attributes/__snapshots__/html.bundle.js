// template.marko
_shells({ a0: "a0 !a1; ;<img>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<main><a${_patch_attrs({
		href: "/static",
		...input.attrs
	}, "a", $scope0_id, "a", $scope0_owned, 1)}>${_patch_text($scope0_id, "b", input.label, $scope0_owned, 2)}${_el_resume($scope0_id, "b")}</a>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<img${_patch_attrs({
				alt: "hero",
				...input.img
			}, "a", $scope1_id, "img", $scope0_owned, 4)}>${_el_resume($scope1_id, "a")}`);
			_script($scope1_id, "a1");
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "c", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a0"]);
	_html(`<button>${_escape(count)}${_el_resume($scope0_id, "e")}</button>${_el_resume($scope0_id, "d")}</main>`);
	_script($scope0_id, "a2");
	_script($scope0_id, "a3");
	$scope0_reason && writeScope($scope0_id, { l: count });
	_resume_branch($scope0_id);
}, 1, 0);
