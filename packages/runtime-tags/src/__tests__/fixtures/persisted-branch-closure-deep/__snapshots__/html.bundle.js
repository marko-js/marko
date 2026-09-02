// template.marko
_shells({
	a: "a !a2;E l%b ;<main><h1> </h1><!><button>+</button></main>",
	a0: "a0;b%;<p>promo</p><!><!>",
	a1: "a1 a4;Db%;<span>Seen <!></span>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_inner = _source_guard($scope0_reason, 3), $sg__input_outer = _source_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_owned, 1)}</h1>`);
	_if(() => {
		if (input.outer) {
			const $scope1_id = _scope_id();
			_html("<p>promo</p>");
			_if(() => {
				if (input.inner) {
					const $scope2_id = _scope_id();
					_html(`<span>Seen ${_text_resume($scope2_id, "a", count, 2)}</span>`);
					_subscribe($count__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }));
					return 0;
				}
			}, $scope1_id, "a", 1, $sg__input_inner, $sg__input_inner, void 0, void 0, ["a1"], $scope0_owned, 3);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, $sg__input_outer, $sg__input_outer, void 0, void 0, ["a0"], $scope0_owned, 2);
	_html(`<button>+</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a2");
	$scope0_reason && _scope($scope0_id, {
		h: input.inner,
		i: count,
		k: $count__closures
	});
	_resume_branch($scope0_id);
}, 1, 0);
