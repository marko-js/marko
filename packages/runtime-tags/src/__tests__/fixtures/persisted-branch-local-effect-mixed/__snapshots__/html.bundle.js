// template.marko
_shells({
	a: "a; ;<main></main>",
	a0: "a0;D l%;<p> </p><!><!>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_inner = _source_guard($scope0_reason, 4), $sg__input_show = _source_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_suffix__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const label = input.title + "!";
			_owned_guard($scope0_owned, 3) && _patch_write($scope1_id, "c", label);
			_html(`<p>${_patch_text($scope1_id, "a", label, void 0, $scope0_owned, 3)}</p>`);
			_if(() => {
				if (input.inner) {
					const $scope2_id = _scope_id();
					_html("<span>inner</span>");
					_script($scope2_id, "a2", 0);
					_patch_effect($scope2_id, "a2", "1 c 2 g");
					_subscribe(_source_if($scope0_reason, 5) && $input_suffix__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }));
					return 0;
				}
			}, $scope1_id, "b", 1, $sg__input_inner, $sg__input_inner, void 0, void 0, ["a1"], $scope0_owned, 4);
			_scope($scope1_id, {
				c: label,
				_: _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a0"], $scope0_owned, 2);
	_html(`</main>${_el_resume($scope0_id, "a", $sg__input_show)}`);
	$scope0_reason ? _scope($scope0_id, {
		e: input.title,
		f: input.inner,
		g: input.suffix,
		j: $input_suffix__closures
	}) : _owned_guard($scope0_owned, 5) && _patch_write($scope0_id, "g", input.suffix);
}, 1, 0);
