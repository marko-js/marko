// template.marko
_shells({ a: "a !a0;D%b ;<main><!><button>+</button></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 4;
	_html("<main>");
	if ($scope0_reason) _for_until(count, 0, input.step, (i) => {
		const $scope1_id = _scope_id();
		_html(`<span>${_escape(i)}${_el_resume($scope1_id, "a")}</span>`);
		writeScope($scope1_id, {});
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_reason ? writeScope($scope0_id, {
		e: input.step,
		f: count
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "a0", input.step);
	_resume_branch($scope0_id);
}, 1, 0);
