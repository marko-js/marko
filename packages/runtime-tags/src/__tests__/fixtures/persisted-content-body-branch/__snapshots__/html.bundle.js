// tags/card/index.marko
const $template = "<section><h2> </h2><!></section>";
const $walks = "E l%l";
_shells({ b: "b;E l%;<section><h2> </h2><!></section>" });
var card_default = _template_persisted("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<section><h2>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_reason, 0)}</h2>`);
	const $tag = input.content;
	_dynamic_tag($scope0_id, "b", $tag, {}, 0, 0, _source_guard($scope0_reason, 1), _patch_dynamic_tag($scope0_id, "b", $tag, 0, 0, 0, $scope0_reason, 1));
	_html("</section>");
	$scope0_page && _scope($scope0_id, {});
}, 0, 0);

// template.marko
_shells({
	a0: "a0;b%;<!><!><!>",
	a: "a; ;<main></main>",
	a1: /*@__PURE__*/ ((_w0, _w1) => `a1;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $template),
	a2: "a2;Db%;<em>A:<!></em>",
	a3: "a3;Db%;<strong>B:<!></strong>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_alt = _source_guard($scope0_reason, 6), $scope0_page = _page_render(), $sg__input_show = _source_guard($scope0_reason, 4), $si__input_show = _source_if($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	const $input_alt__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason(_mask_group($scope0_reason, 5) << 1);
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "a", $childScope);
			card_default({
				title: input.title,
				content: _content_elide("a0", () => {
					_scope_reason();
					const $scope2_id = _scope_id();
					_if(() => {
						if (input.alt) {
							const $scope3_id = _scope_id();
							_html(`<em>A:${_patch_text($scope3_id, "a", input.note, 2, $scope0_reason, 7)}</em>`);
							_subscribe(_unfilled_if($scope0_reason, 7) && $input_note__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }));
							return 0;
						} else {
							const $scope4_id = _scope_id();
							_html(`<strong>B:${_patch_text($scope4_id, "a", input.note, 2, $scope0_reason, 7)}</strong>`);
							_subscribe(_unfilled_if($scope0_reason, 7) && $input_note__closures, _scope($scope4_id, {
								_: _scope_with_id($scope2_id),
								Cj: 1
							}));
							return 1;
						}
					}, $scope2_id, "a", 1, $sg__input_alt, $sg__input_alt, void 0, void 0, ["a2", "a3"], $scope0_reason, 6);
					$scope0_page && _subscribe(_unfilled_if($scope0_reason, 6) && $input_alt__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }));
					$sg__input_alt || $scope0_page && _resume_branch($scope2_id);
				}, $scope1_id)
			});
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a1"], $scope0_reason, 4);
	_html(`</main>${_el_resume($scope0_id, "a", $sg__input_show)}`);
	$scope0_page && _scope($scope0_id, {
		e: $si__input_show && input.title,
		f: $si__input_show && input.alt,
		g: _source_if($scope0_reason, 1) && input.note,
		j: $input_note__closures,
		i: $input_alt__closures
	});
}, 1, () => [card_default]);
