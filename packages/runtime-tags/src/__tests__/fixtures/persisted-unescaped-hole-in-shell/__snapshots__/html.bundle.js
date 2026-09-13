// template.marko
_shells({
	a: "a; ;<main></main>",
	a0: "a0;D lD l%;<div> </div><div class=x> </div><!><!>",
	a1: "a1;b%b%;<!><!><!><!>",
	a2: "a2;D lD ;<div> </div><div class=y> </div>",
	a3: "a3; ; "
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_html = _source_guard($scope0_reason, 2), $scope0_page = _page_render(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_html__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<div>${_patch_html($scope1_id, "a", input.html, void 0, $scope0_reason, 2)}</div><div class=x>${_patch_html($scope1_id, "b", input.html, void 0, $scope0_reason, 2)}</div>`);
			_if(() => {
				if (input.show > 1) {
					const $scope2_id = _scope_id();
					_if(() => {
						if (input.html) {
							const $scope3_id = _scope_id();
							_html(`<div>${_patch_html($scope3_id, "a", input.html, void 0, $scope0_reason, 2)}</div><div class=y>${_patch_html($scope3_id, "b", input.html, void 0, $scope0_reason, 2)}</div>`);
							_subscribe(_unfilled_if($scope0_reason, 2) && $input_html__closures, _scope($scope3_id, {
								_: _scope_with_id($scope2_id),
								Cg: 1
							}));
							return 0;
						}
					}, $scope2_id, "a", 1, $sg__input_html, $sg__input_html, void 0, void 0, ["a2"], $scope0_reason, 2);
					_if(() => {
						if (input.html) {
							const $scope4_id = _scope_id();
							_html(_patch_html($scope4_id, "a", input.html, void 0, $scope0_reason, 2));
							_subscribe(_unfilled_if($scope0_reason, 2) && $input_html__closures, _scope($scope4_id, {
								_: _scope_with_id($scope2_id),
								Cg: 2
							}));
							return 0;
						}
					}, $scope2_id, "b", 1, $sg__input_html, $sg__input_html, void 0, void 0, ["a3"], $scope0_reason, 2);
					$scope0_page && _subscribe(_unfilled_if($scope0_reason, 2) && $input_html__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }));
					return 0;
				}
			}, $scope1_id, "c", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a1"], $scope0_reason, 1);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a0"], $scope0_reason, 1);
	_html(`</main>${_el_resume($scope0_id, "a", $sg__input_show)}`);
	$scope0_page && _scope($scope0_id, {
		d: _source_if($scope0_reason, 1) && input.show,
		e: input.html,
		g: $input_html__closures
	});
}, 1, 0);
