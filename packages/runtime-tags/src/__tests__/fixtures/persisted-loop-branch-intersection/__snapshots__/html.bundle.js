// template.marko
_shells({
	a: "a !a3;D%b ;<main><!><button>+</button></main>",
	a0: "a0 !;b%;<!><!><!>",
	a1: "a1 a5 a6 a7;D ;<p> </p>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_flag = _source_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_suffix__closures = /* @__PURE__ */ new Set();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html("<main>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_owned_guard($scope0_owned, 1) ? _patch_value($scope1_id, "a1", item) : _patch_init($scope1_id, "a2");
		_if(() => {
			if (input.flag) {
				const $scope2_id = _scope_id();
				_html(`<p>${_text_resume($scope2_id, "a", item + ":" + input.suffix + "@0")}</p>`);
				_subscribe($count__closures, _subscribe(_source_if($scope0_reason, 3) && $input_suffix__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) })));
				return 0;
			}
		}, $scope1_id, "a", 1, $sg__input_flag, $sg__input_flag, void 0, void 0, ["a1"]);
		_scope($scope1_id, {
			c: item,
			_: _scope_with_id($scope0_id)
		});
	}, (item) => item, $scope0_id, "a", 1, _source_guard($scope0_reason, 0), _source_guard($scope0_reason, 1), void 0, void 0, "a0");
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a3");
	$scope0_reason ? _scope($scope0_id, {
		f: input.flag,
		g: input.suffix,
		h: count,
		j: $input_suffix__closures,
		k: $count__closures
	}) : _owned_guard($scope0_owned, 3) && _patch_value($scope0_id, "a0", input.suffix);
	_resume_branch($scope0_id);
}, 1, 0);
