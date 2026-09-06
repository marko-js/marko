// template.marko
_shells({
	a: "a !a4;D%b ;<main><!><button>+</button></main>",
	a0: "a0;b%;<!><!><!>",
	a1: "a1;b%;<!><!><!>",
	a2: "a2 a6 a7;D ;<p> </p>"
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
						_owned_guard($scope0_owned, 3) ? _patch_value($scope3_id, "a1", item) : _patch_init($scope3_id, "a3");
						_html(`<p>${_text_resume($scope3_id, "a", item + ":" + input.suffix + "@0")}</p>`);
						_subscribe($count__closures, _subscribe(_source_if($scope0_reason, 4) && $input_suffix__closures, _scope($scope3_id, {
							c: item,
							_: _scope_with_id($scope2_id)
						})));
					}, (item) => item, $scope2_id, "a", 1, $sg__input_items, $sg__input_items, void 0, void 0, "a2", $scope0_owned, 3);
					_subscribe(_source_if($scope0_reason, 3) && $input_items__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }));
					return 0;
				}
			}, $scope1_id, "a", 1, $sg__input_inner, $sg__input_inner, void 0, void 0, ["a1"], $scope0_owned, 2);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a0"], $scope0_owned, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a4");
	$scope0_reason ? _scope($scope0_id, {
		f: input.inner,
		g: input.items,
		h: input.suffix,
		i: count,
		l: $input_suffix__closures,
		m: $count__closures,
		k: $input_items__closures
	}) : _owned_guard($scope0_owned, 4) && _patch_value($scope0_id, "a0", input.suffix);
}, 1, 0);
