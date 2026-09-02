// template.marko
_shells({
	a: "a !a2;D%b ;<main><!><button>+</button></main>",
	a0: "a0;b%;<!><!><!>",
	a1: "a1 a4 a5;D ;<p> </p>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_inner = _source_guard($scope0_reason, 2), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_if(() => {
				if (input.inner) {
					const $scope2_id = _scope_id();
					_html(`<p>${_text_resume($scope2_id, "a", input.title + " #0")}</p>`);
					_subscribe($count__closures, _subscribe(_source_if($scope0_reason, 3) && $input_title__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) })));
					return 0;
				}
			}, $scope1_id, "a", 1, $sg__input_inner, $sg__input_inner, void 0, void 0, ["a1"], $scope0_owned, 2);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a0"], $scope0_owned, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a2");
	$scope0_reason ? _scope($scope0_id, {
		f: input.inner,
		g: input.title,
		h: count,
		j: $input_title__closures,
		k: $count__closures
	}) : _owned_guard($scope0_owned, 3) && _patch_value($scope0_id, "a0", input.title);
	_resume_branch($scope0_id);
}, 1, 0);
