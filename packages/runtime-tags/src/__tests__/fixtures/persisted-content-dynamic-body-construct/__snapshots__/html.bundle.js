// tags/card/index.marko
const $template = "<section><h2> </h2><!></section>";
const $walks = "E l%l";
_shells({ b: "b;E l%;<section><h2> </h2><!></section>" });
var card_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<section><h2>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_owned, 0)}</h2>`);
	_patch_dynamic_tag($scope0_id, "b", input.content, $scope0_owned, 1);
	_dynamic_tag($scope0_id, "b", input.content, {}, 0, 0, _source_guard($scope0_reason, 1), 1);
	_html("</section>");
	$scope0_reason && _scope($scope0_id, {});
}, 0, 0);

// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a: "a; ;<main></main>",
	a1: /*@__PURE__*/ ((_w0, _w1) => `a1;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $template)
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason({ 0: _mask_group($scope0_owned, 4) });
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "a", $childScope);
			card_default({
				title: input.title,
				content: _content_elide("a0", () => {
					_persisted_reason();
					const $scope2_id = _scope_id();
					_html(`<em>${_patch_text($scope2_id, "a", input.note, void 0, $scope0_owned, 5)}</em>`);
					_subscribe(_source_if($scope0_reason, 5) && $input_note__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }));
					_resume_branch($scope2_id);
				}, $scope1_id)
			});
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a1"]);
	_html(`</main>${_el_resume($scope0_id, "a", $sg__input_show)}`);
	$scope0_reason && _scope($scope0_id, {
		e: input.title,
		f: input.note,
		h: $input_note__closures
	});
}, 1, () => [card_default]);
