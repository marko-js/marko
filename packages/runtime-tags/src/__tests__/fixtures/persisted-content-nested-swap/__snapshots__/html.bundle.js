// template.marko
_shells({ a0: "a0;b%;<!><!><!>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_patch_dynamic_tag($scope1_id, "a", input.content, $scope0_owned, 2);
			_dynamic_tag$1($scope1_id, "a", input.content, {}, 0, 0, _source_guard($scope0_reason, 2), 1);
			$scope0_reason && writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a0"]);
	_html(`<button>${_escape(count)}${_el_resume($scope0_id, "c")}</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a1");
	$scope0_reason && writeScope($scope0_id, {
		g: input.content,
		h: count
	});
	_resume_branch($scope0_id);
}, 1, 0);
