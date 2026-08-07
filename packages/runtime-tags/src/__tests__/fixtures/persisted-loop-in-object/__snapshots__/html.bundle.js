// template.marko
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let pairs = { a: 1 };
	_html("<main><ul>");
	if ($scope0_reason) _for_in(pairs, (k, v) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_escape(k)}${_el_resume($scope1_id, "a")}=<!>${_escape(v)}${_el_resume($scope1_id, "b")} (<!>${_escape(input.note)}${_el_resume($scope1_id, "c")})</li>`);
		writeScope($scope1_id, {});
	}, 0, $scope0_id, "a", 1, 1, 1, "</ul>", 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_reason ? writeScope($scope0_id, {
		e: input.note,
		f: pairs
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "a0", input.note);
	_resume_branch($scope0_id);
}, 1, 0);
