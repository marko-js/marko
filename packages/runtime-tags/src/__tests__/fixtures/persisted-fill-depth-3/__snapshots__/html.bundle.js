// template.marko
_shells({
	a0: ",`a0;b%;<!><!><!>`",
	a1: ",`a1;b%;<!><!><!>`",
	a2: ",`a2 a5;D ;<p> </p>`"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_items = _source_guard($scope0_reason, 3), $sg__input_inner = _source_guard($scope0_reason, 2), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_suffix__closures = /* @__PURE__ */ new Set();
	const $count__closures = /* @__PURE__ */ new Set();
	const $input_items__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_if(() => {
				if (input.inner) {
					const $scope2_id = _scope_id();
					_for_of(input.items, (item) => {
						const $scope3_id = _scope_id();
						_html(`<p>${_escape(item + ":" + input.suffix + "@0")}${_el_resume($scope3_id, "a")}</p>`);
						_subscribe($count__closures, _subscribe(_source_if($scope0_reason, 4) && $input_suffix__closures, writeScope($scope3_id, {
							c: item,
							_: _scope_with_id($scope2_id)
						})));
					}, (item) => item, $scope2_id, "a", 1, $sg__input_items, $sg__input_items, void 0, void 0, "a2");
					_subscribe(_source_if($scope0_reason, 3) && $input_items__closures, writeScope($scope2_id, { _: _scope_with_id($scope1_id) }));
					return 0;
				}
			}, $scope1_id, "a", 1, $sg__input_inner, $sg__input_inner, void 0, void 0, ["a1"]);
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a0"]);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a3");
	$scope0_reason ? writeScope($scope0_id, {
		f: input.inner,
		g: input.items,
		h: input.suffix,
		i: count,
		l: $input_suffix__closures,
		m: $count__closures,
		k: $input_items__closures
	}) : _owned_guard($scope0_owned, 4) && _patch_value($scope0_id, "a0", input.suffix);
	_resume_branch($scope0_id);
}, 1, 0);
