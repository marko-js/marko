// template.marko
_shells({ a: "a !a0;D%b ;<main><!><button>+</button></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let mode = 0;
	_html("<main>");
	if ($scope0_reason) _if(() => {
		{
			const $scope3_id = _scope_id();
			_html("<s>none</s>");
			_scope($scope3_id, {});
			return 2;
		}
	}, $scope0_id, "a", 1, 1, 1, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_reason ? _scope($scope0_id, {
		e: input.title,
		f: mode
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "a0", input.title);
}, 1, 0);
