// template.marko
_renderer_shells({ a0: ",`a0;b%;<!><!><!>`" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_inner__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "a", input.outer, (outer) => {
				const $scope2_id = _scope_id();
				const $await_content__outer__closures = /* @__PURE__ */ new Set();
				_await($scope2_id, "a", input.inner, (inner) => {
					const $scope3_id = _scope_id();
					_html(`<em>${_patch_text($scope3_id, "a", outer, $scope0_owned, 4)}${_el_resume($scope3_id, "a")}:<!>${_patch_text($scope3_id, "b", inner, $scope0_owned, 5)}${_el_resume($scope3_id, "b")}</em>`);
					_subscribe($scope0_reason && $await_content__outer__closures, writeScope($scope3_id, { _: _scope_with_id($scope2_id) }));
					_resume_branch($scope3_id);
				});
				$scope0_reason && _subscribe(_source_if($scope0_reason, 5) && $input_inner__closures, writeScope($scope2_id, {
					c: outer,
					_: _scope_with_id($scope1_id),
					d: $await_content__outer__closures
				}));
				_resume_branch($scope2_id);
			}, _source_guard($scope0_reason, 2), "a1");
			$scope0_reason && writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a0"]);
	_html(`<button>interactive</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a2");
	$scope0_reason && writeScope($scope0_id, {
		f: input.outer,
		g: input.inner,
		i: $input_inner__closures
	});
}, 1, 0);
