// template.marko
_renderer_shells({ a0: ",`a0;b%;<p>promo</p><!><!>`" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _persisted_reason(), $sg__input_inner = _serialize_guard($scope0_reason, 2), $sg__input_outer = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title)}${_escape(input.title)}${_el_resume($scope0_id, "a")}</h1>`);
	_if(() => {
		if (input.outer) {
			const $scope1_id = _scope_id();
			_html("<p>promo</p>");
			_if(() => {
				if (input.inner) {
					const $scope2_id = _scope_id();
					_html(`<span>Seen <!>${_escape(count)}${_el_resume($scope2_id, "a")}</span>`);
					_subscribe($count__closures, writeScope($scope2_id, { _: _scope_with_id($scope1_id) }));
					return 0;
				}
			}, $scope1_id, "a", $sg__input_inner, $sg__input_inner, $sg__input_inner, void 0, void 0, [0]);
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", _serialize_guard($scope0_reason, 0), $sg__input_outer, $sg__input_outer, void 0, void 0, ["a0"]);
	_html(`<button>+</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a2");
	$scope0_reason && writeScope($scope0_id, {
		h: input.inner,
		i: count,
		k: $count__closures
	});
	_resume_branch($scope0_id);
}, 1);
