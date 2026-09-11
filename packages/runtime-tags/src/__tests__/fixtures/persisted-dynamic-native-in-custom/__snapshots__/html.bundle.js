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
	c: /*@__PURE__*/ ((_w0, _w1) => `c !c2;${_w0};${_w1}`)(((_w0) => `b/${_w0}& b`)($walks), ((_w0) => `<!>${_w0}<button>+</button>`)($template))
});
var template_default = _template_persisted("c", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
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
		content: _content_elide("c0", () => {
			_persisted_reason();
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.on ? "p" : "div", { "data-n": count }, _content_resume("c1", () => {
				const $scope2_id = _scope_id();
				_persisted_reason();
				_html(_text_resume($scope2_id, "a", input.label));
				_subscribe(_source_if($scope0_reason, 1) && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }));
			}, $scope1_id));
			_subscribe($count__closures, _subscribe(_source_if($scope0_reason, 0) && $input_on__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) })));
		}, $scope0_id)
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "c2");
	$scope0_reason ? _scope($scope0_id, {
		e: input.on,
		f: input.label,
		g: count,
		i: $input_label__closures,
		h: $input_on__closures,
		j: $count__closures,
		a: _existing_scope($childScope)
	}) : (_filled_guard($scope0_owned, 0) && _patch_value($scope0_id, "c0", input.on), _filled_guard($scope0_owned, 1) && _patch_value($scope0_id, "c1", input.label));
}, 1, 1);
