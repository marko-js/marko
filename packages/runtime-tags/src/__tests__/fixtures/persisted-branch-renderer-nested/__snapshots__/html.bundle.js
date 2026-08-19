// tags/widget/index.marko
const $template = "<p> </p><!><!>";
const $walks = "D l%c";
var widget_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<p>${_patch_text($scope0_id, "a", input.label, $scope0_owned, 0)}${_el_resume($scope0_id, "a")}</p>`);
	_patch_dynamic_tag($scope0_id, "b", input.renderer, $scope0_owned, 1);
	_dynamic_tag$1($scope0_id, "b", input.renderer, {}, 0, 0, _source_guard($scope0_reason, 1), 1);
	$scope0_reason && writeScope($scope0_id, {});
}, 0, 0);

// template.marko
_shells({
	a0: "a0; ;<div></div>",
	a1: /*@__PURE__*/ ((_w0, _w1) => `a1;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks), /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template))
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_b = _source_guard($scope0_reason, 3), $sg__input_a = _source_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_tag__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_if(() => {
		if (input.a) {
			const $scope1_id = _scope_id();
			_html("<div>");
			_if(() => {
				if (input.b) {
					const $scope2_id = _scope_id();
					_set_serialize_reason({ 1: _mask_group($scope0_owned, 4) });
					const $childScope = _peek_scope_id();
					_patch_child($scope2_id, "a", $childScope);
					widget_default({ renderer: input.tag });
					_subscribe(_source_if($scope0_reason, 4) && $input_tag__closures, writeScope($scope2_id, {
						_: _scope_with_id($scope1_id),
						a: _existing_scope($childScope)
					}));
					return 0;
				}
			}, $scope1_id, "a", 1, $sg__input_b, $sg__input_b, void 0, void 0, ["a1"]);
			_html(`</div>${_el_resume($scope1_id, "a", $sg__input_b)}`);
			$scope0_reason && writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_a, $sg__input_a, void 0, void 0, ["a0"]);
	_html(`</main>${_el_resume($scope0_id, "a", $sg__input_a)}`);
	$scope0_reason && writeScope($scope0_id, {
		e: input.b,
		f: input.tag,
		h: $input_tag__closures
	});
}, 1, () => [widget_default]);
