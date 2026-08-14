// template.marko
_shells({ a0: ",`a0;b%;<!><!><!>`" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_inner = _source_guard($scope0_reason, 3), $sg__input_show = _source_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.heading, $scope0_owned, 1)}${_el_resume($scope0_id, "a")}</h1>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_if(() => {
				if (input.inner) {
					const $scope2_id = _scope_id();
					_html(`<p>${_escape(input.title + "@0")}${_el_resume($scope2_id, "a")}</p>`);
					_subscribe($count__closures, _subscribe(_source_if($scope0_reason, 4) && $input_title__closures, writeScope($scope2_id, { _: _scope_with_id($scope1_id) })));
					return 0;
				}
			}, $scope1_id, "a", 1, $sg__input_inner, $sg__input_inner, void 0, void 0, [0]);
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a0"]);
	_html(`<button>+</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a2");
	$scope0_reason ? writeScope($scope0_id, {
		h: input.inner,
		i: input.title,
		j: count,
		l: $input_title__closures,
		m: $count__closures
	}) : _owned_guard($scope0_owned, 4) && _patch_value($scope0_id, "a0", input.title);
	_resume_branch($scope0_id);
}, 1, 0);
