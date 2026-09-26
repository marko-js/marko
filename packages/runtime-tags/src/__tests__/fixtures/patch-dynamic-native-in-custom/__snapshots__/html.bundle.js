// card.marko
_shells({ b: "b;E l%;<section><em> </em><!></section>" });
var card_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<section><em>${_patch_text($scope0_id, "a", input.meta ? input.meta.n : "-", void 0, $scope0_reason, 0)}</em>`);
	const $tag = input.content;
	_dynamic_tag($scope0_id, "b", $tag, {}, 0, 0, _source_guard($scope0_reason, 1), _patch_dynamic_tag($scope0_id, "b", $tag, 0, 0, 0, $scope0_reason, 1));
	_html("</section>");
	$scope0_page && _scope($scope0_id, {});
}, 0, 0);

// template.marko
var template_default = _template_patch("c", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_label = _source_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_on__closures = /* @__PURE__ */ new Set();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_set_serialize_reason(2);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	card_default({
		meta: attrTag({ n: count }),
		content: _content("c4", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.on ? "p" : "div", { "data-n": count }, _content("c0", () => {
				const $scope2_id = _scope_id();
				_scope_reason();
				_html(_text_resume($scope2_id, "a", input.label, $sg__input_label));
				_subscribe(_source_if($scope0_reason, 1) && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), _client_guard($scope0_reason, 1) && "c1", $sg__input_label);
				$sg__input_label || _resume_branch($scope2_id);
			}, $scope1_id));
			_subscribe($count__closures, _subscribe(_source_if($scope0_reason, 0) && $input_on__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 0) && "c2"), "c3");
		}, $scope0_id)
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "c5");
	$scope0_page ? _scope($scope0_id, {
		e: input.on,
		f: input.label,
		g: count,
		i: $input_label__closures,
		h: $input_on__closures,
		j: $count__closures,
		a: _existing_scope($childScope)
	}) : (_filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "c0", input.on), _filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "c1", input.label));
}, 1, 1);
