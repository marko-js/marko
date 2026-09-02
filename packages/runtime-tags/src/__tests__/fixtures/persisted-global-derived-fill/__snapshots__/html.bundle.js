// template.marko
_shells({ a: "a !a0; b%;<button>inc</button><!><!>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const greeting = $global().prefix + ":" + input.name;
	let count = 0;
	_html(`<button>inc</button>${_el_resume($scope0_id, "a")}`);
	if ($scope0_reason) _if(() => {
		{
			const $scope1_id = _scope_id();
			_html(`<span>${_text_resume($scope1_id, "a", greeting)} ${_text_resume($scope1_id, "b", count, 2)}</span>`);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, 1, 1, 0, 1);
	_script($scope0_id, "a0");
	$scope0_reason ? _scope($scope0_id, {
		f: greeting,
		h: count
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "a0", greeting);
	_resume_branch($scope0_id);
}, 1, 1);
