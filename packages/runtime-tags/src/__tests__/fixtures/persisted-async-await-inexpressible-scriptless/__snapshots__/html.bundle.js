// tags/widget/index.marko
_shells({ b: "b," });
var widget_default = _template_persisted("b", (input) => {
	_persisted_reason();
	_scope_id();
	return input.label;
}, 0, 0);

// template.marko
_shells({ a: "a; ;<main></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_value__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "a", Promise.resolve(input.value), () => {
				const $scope2_id = _scope_id();
				_set_serialize_reason({ 0: _mask_group($scope0_owned, 2) });
				const $childScope = _peek_scope_id();
				_patch_child($scope2_id, "a", $childScope);
				let w = widget_default({ label: input.value });
				_var($scope2_id, "b", $childScope, "a1");
				_html(`<em>${_patch_text($scope2_id, "c", w, void 0, $scope0_owned, 2)}</em>`);
				_subscribe(_source_if($scope0_reason, 2) && $input_value__closures, _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					a: _existing_scope($childScope)
				}));
				_resume_branch($scope2_id);
			});
			$scope0_reason && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, [0]);
	_html(`</main>${_el_resume($scope0_id, "a", $sg__input_show)}`);
	$scope0_reason && _scope($scope0_id, {
		e: input.value,
		f: $input_value__closures
	});
}, 1, () => [widget_default]);
