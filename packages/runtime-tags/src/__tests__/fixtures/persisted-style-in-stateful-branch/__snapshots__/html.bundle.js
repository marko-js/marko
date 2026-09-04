// template.marko
_shells({ a: "a !a0;b%b ;<!><!><button>toggle</button>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let s = true;
	if ($scope0_reason) _if(() => {
		{
			const $scope1_id = _scope_id();
			_html(`${_style_html(`--M_a0:${_escape_style_value(input.color)};`)}${_el_resume($scope1_id, "a", _source_guard($scope0_reason, 1))}<b class=x>${_text_resume($scope1_id, "b", input.x)}</b>`);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button>toggle</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	$scope0_reason ? _scope($scope0_id, {
		e: input.color,
		f: input.x,
		g: s
	}) : (_owned_guard($scope0_owned, 1) && _patch_value($scope0_id, "a0", input.color), _owned_guard($scope0_owned, 2) && _patch_value($scope0_id, "a1", input.x));
}, 1, 0);
