// card.marko
const $template = "<section><em> </em><!></section>";
const $walks = "E l%l";
_shells({ b: "b;E l%;<section><em> </em><!></section>" });
var card_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<section><em>${_patch_text($scope0_id, "a", input.meta ? input.meta.n : "-", void 0, $scope0_owned, 0)}</em>`);
	const $tag = input.content;
	_dynamic_tag($scope0_id, "b", $tag, {}, 0, 0, _source_guard($scope0_reason, 1), _patch_dynamic_tag($scope0_id, "b", $tag, 0, 0, 0, $scope0_owned, 1));
	_html("</section>");
	$scope0_reason && _scope($scope0_id, {});
}, 0, 0);

// template.marko
_shells({
	c0: "c0;b%;<!><!><!>",
	c: /*@__PURE__*/ ((_w0, _w1) => `c !c3;${_w0};${_w1}`)(((_w0) => `b/${_w0}& b`)($walks), ((_w0) => `<!>${_w0}<button>+</button>`)($template)),
	c1: "c1; ;<ul></ul>",
	c2: "c2;D%c%;<li><!>:<!></li>"
});
var template_default = _template_persisted("c", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_items = _source_guard($scope0_reason, 3), $sg__input_on = _source_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_items__closures = /* @__PURE__ */ new Set();
	const $input_on__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_set_serialize_reason(2);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	card_default({
		meta: attrTag({ n: count }),
		content: _content_elide("c0", () => {
			_persisted_reason();
			const $scope1_id = _scope_id();
			_if(() => {
				if (input.on) {
					const $scope2_id = _scope_id();
					_html("<ul>");
					_for_of(input.items, (x) => {
						const $scope3_id = _scope_id();
						_html(`<li>${_patch_text($scope3_id, "a", x, void 0, $scope0_owned, 3)}:${_patch_text($scope3_id, "b", input.label, 2, $scope0_owned, 4)}</li>`);
						_subscribe(_unfilled_if($scope0_owned, 4) && $input_label__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }));
					}, 0, $scope2_id, "a", 1, $sg__input_items, $sg__input_items, void 0, void 0, "c2", $scope0_owned, 3);
					_html(`</ul>${_el_resume($scope2_id, "a", $sg__input_items)}`);
					$scope0_reason && _subscribe(_unfilled_if($scope0_owned, 3) && $input_items__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }));
					return 0;
				}
			}, $scope1_id, "a", 1, $sg__input_on, $sg__input_on, void 0, void 0, ["c1"], $scope0_owned, 2);
			$scope0_reason && _subscribe(_unfilled_if($scope0_owned, 2) && $input_on__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
			$sg__input_on || $scope0_reason && _resume_branch($scope1_id);
		}, $scope0_id)
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "c3");
	$scope0_reason && _scope($scope0_id, {
		f: _source_if($scope0_reason, 2) && input.items,
		g: _source_if($scope0_reason, 0) && input.label,
		h: count,
		k: $input_label__closures,
		j: $input_items__closures,
		i: $input_on__closures,
		a: _existing_scope($childScope)
	});
}, 1, () => [card_default]);
