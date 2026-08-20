// tags/doubler/index.marko
_shells({ b: "b,<span>x2</span>" });
var doubler_default = _template_persisted("b", (input) => {
	_persisted_reason();
	_scope_id();
	const double = input.value * 2;
	_html("<span>x2</span>");
	return double;
}, 0, 0);

// template.marko
_shells({ a0: "a0 a4;Db%;<p>big <!></p>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_n = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_serialize_reason({ 0: _mask_group($scope0_owned, 0) });
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	let double = doubler_default({ value: input.n });
	_var($scope0_id, "b", $childScope, "a1");
	_if(() => {
		if (double > 4) {
			const $scope1_id = _scope_id();
			_html(`<p>big <!>${_escape(count)}${_el_resume($scope1_id, "a")}</p>`);
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "c", 1, $sg__input_n, $sg__input_n, void 0, void 0, ["a0"]);
	_html(`<button>+</button>${_el_resume($scope0_id, "d")}</main>`);
	_script($scope0_id, "a2");
	$scope0_reason && writeScope($scope0_id, {
		h: count,
		a: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1, () => [doubler_default]);
