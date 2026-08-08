// template.marko
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_list = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let items = ["a"];
	_html("<main>");
	if ($scope0_reason) _for_of(items, (item) => {
		const $scope1_id = _scope_id();
		if ($scope0_reason) _for_of(input.list, (s) => {
			const $scope2_id = _scope_id();
			_html(`<li>${_escape(item)}${_el_resume($scope2_id, "a")}<!>${_escape(s)}${_el_resume($scope2_id, "b")}</li>`);
			writeScope($scope2_id, { _: _scope_with_id($scope1_id) });
		}, 0, $scope1_id, "a", 1, $sg__input_list, $sg__input_list, 0, 1);
		writeScope($scope1_id, { c: item });
	}, 0, $scope0_id, "a");
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_reason ? writeScope($scope0_id, {
		e: input.list,
		f: items
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "a0", input.list);
	_resume_branch($scope0_id);
}, 1, 0);
