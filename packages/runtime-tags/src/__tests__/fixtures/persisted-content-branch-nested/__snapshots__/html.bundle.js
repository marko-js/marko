// tags/widget/index.marko
const $template = "<p> </p><!><!>";
const $walks = "D l%c";
var widget_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<p>${_patch_text($scope0_id, "a", input.label, $scope0_owned, 0)}${_el_resume($scope0_id, "a")}</p>`);
	_patch_dynamic_tag($scope0_id, "b", input.content, $scope0_owned, 1);
	_dynamic_tag$1($scope0_id, "b", input.content, {}, 0, 0, _source_guard($scope0_reason, 1), 1);
	$scope0_reason && writeScope($scope0_id, {});
}, 0, 0);

// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a1: "a1; ;<div></div>",
	a2: /*@__PURE__*/ ((_w0, _w1) => `a2;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks), /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template))
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_b = _source_guard($scope0_reason, 4), $sg__input_a = _source_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_text__closures = /* @__PURE__ */ new Set();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_if(() => {
		if (input.a) {
			const $scope1_id = _scope_id();
			_html("<div>");
			_if(() => {
				if (input.b) {
					const $scope2_id = _scope_id();
					_set_serialize_reason({ 0: _mask_group($scope0_owned, 5) });
					const $childScope = _peek_scope_id();
					_patch_child($scope2_id, "a", $childScope);
					widget_default({
						label: input.label,
						content: _content_elide("a0", () => {
							_persisted_reason();
							const $scope3_id = _scope_id();
							_html(`<em>${_patch_text($scope3_id, "a", input.text, $scope0_owned, 6)}${_el_resume($scope3_id, "a")}</em>`);
							_subscribe(_source_if($scope0_reason, 6) && $input_text__closures, writeScope($scope3_id, { _: _scope_with_id($scope2_id) }));
							_resume_branch($scope3_id);
						}, $scope2_id)
					});
					_subscribe(_source_if($scope0_reason, 5) && $input_label__closures, writeScope($scope2_id, {
						_: _scope_with_id($scope1_id),
						a: _existing_scope($childScope)
					}));
					return 0;
				}
			}, $scope1_id, "a", 1, $sg__input_b, $sg__input_b, void 0, void 0, ["a2"]);
			_html(`</div>${_el_resume($scope1_id, "a", $sg__input_b)}`);
			$scope0_reason && writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_a, $sg__input_a, void 0, void 0, ["a1"]);
	_html(`</main>${_el_resume($scope0_id, "a", $sg__input_a)}`);
	$scope0_reason && writeScope($scope0_id, {
		e: input.b,
		f: input.label,
		g: input.text,
		j: $input_text__closures,
		i: $input_label__closures
	});
}, 1, () => [widget_default]);
