// tags/widget/index.marko
_shells({ b: "b," });
var widget_default = _template_persisted("b", (input) => {
	_scope_reason();
	_scope_id();
	return input.label;
}, 0, 0);

// template.marko
_shells({
	a0: /*@__PURE__*/ ((_w0, _w1) => `a0;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `0${_w0}&D l`)(""), /*@__PURE__*/ ((_w0) => `${_w0}<em> </em>`)("")),
	a: "a; ;<main></main>",
	a1: /*@__PURE__*/ ((_w0, _w1) => `a1;${_w0};${_w1}`)(((_w0) => `0${_w0}&D l`)(""), ((_w0) => `${_w0}<em> </em>`)("")),
	a2: "a2;b%;<!><!><!>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_value__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "a", Promise.resolve(input.value), () => {
				const $scope2_id = _scope_id();
				_set_serialize_reason(_mask_group($scope0_reason, 2) << 1);
				const $childScope = _peek_scope_id();
				_patch_child($scope2_id, "a", $childScope);
				_html(`<em>${_patch_text($scope2_id, "c", widget_default({ label: input.value }), void 0, $scope0_reason, 2)}</em>`);
				_subscribe(_unfilled_if($scope0_reason, 2) && $input_value__closures, _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					a: _existing_scope($childScope)
				}));
			}, 1, "a1");
			$scope0_page && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a2"], $scope0_reason, 1);
	_html(`</main>${_el_resume($scope0_id, "a", $sg__input_show)}`);
	$scope0_page && _scope($scope0_id, {
		e: input.value,
		f: $input_value__closures
	});
}, 1, () => [widget_default]);
