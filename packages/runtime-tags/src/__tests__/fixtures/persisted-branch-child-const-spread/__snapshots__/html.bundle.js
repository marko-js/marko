// tags/card/index.marko
const $template = "<div id=fixed> </div>";
const $walks = " D l";
_shells({ b: "b !b0; D ;<div id=fixed> </div>" });
var card_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<div id=fixed${_patch_attrs_partial(input.attrs, { id: 1 }, "a", $scope0_id, "div", void 0, $scope0_owned, 0)}>${_patch_text($scope0_id, "b", input.title, void 0, $scope0_owned, 1)}</div>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	$scope0_reason && _scope($scope0_id, {});
}, 0, 0);

// template.marko
_shells({
	a: "a; ;<main></main>",
	a0: /*@__PURE__*/ ((_w0, _w1) => `a0;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $template)
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason({ 1: _mask_group($scope0_owned, 2) });
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "a", $childScope);
			card_default({
				attrs: {
					class: "x",
					"data-a": "1"
				},
				title: input.title
			});
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a0"], $scope0_owned, 1);
	_html(`</main>${_el_resume($scope0_id, "a", $sg__input_show)}`);
	$scope0_reason && _scope($scope0_id, { e: input.title });
}, 1, () => [card_default]);
