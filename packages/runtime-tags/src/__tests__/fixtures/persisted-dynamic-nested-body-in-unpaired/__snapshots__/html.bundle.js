// card.marko
const $template$1 = "<section><em> </em><!></section>";
const $walks$1 = "E l%l";
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

// box.marko
const $template = "<article><b> </b><!></article>";
const $walks = "E l%l";
_shells({ a: "a;E l%;<article><b> </b><!></article>" });
var box_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<article><b>${_patch_text($scope0_id, "a", input.k, void 0, $scope0_owned, 0)}</b>`);
	const $tag = input.content;
	_dynamic_tag($scope0_id, "b", $tag, {}, 0, 0, _source_guard($scope0_reason, 1), _patch_dynamic_tag($scope0_id, "b", $tag, 0, 0, 0, $scope0_owned, 1));
	_html("</article>");
	$scope0_reason && _scope($scope0_id, {});
}, 0, 0);

// template.marko
_shells({
	c0: "c0;%c%;<!>!<!>",
	c1: /*@__PURE__*/ ((_w0, _w1) => `c1;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks), /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template)),
	c: /*@__PURE__*/ ((_w0, _w1) => `c !c2;${_w0};${_w1}`)(((_w0) => `b/${_w0}& b`)($walks$1), ((_w0) => `<!>${_w0}<button>+</button>`)($template$1))
});
var template_default = _template_persisted("c", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_set_serialize_reason(2);
	const $childScope2 = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope2);
	card_default({
		meta: attrTag({ n: count }),
		content: _content_elide("c1", () => {
			_persisted_reason();
			const $scope1_id = _scope_id();
			_set_serialize_reason({ 0: _mask_group($scope0_owned, 0) });
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "a", $childScope);
			box_default({
				k: input.label,
				content: _content_elide("c0", () => {
					_persisted_reason();
					const $scope2_id = _scope_id();
					_html(`${_patch_text($scope2_id, "a", input.label, void 0, $scope0_owned, 0)}!${_text_resume($scope2_id, "b", count, 2)}`);
					_subscribe($count__closures, _subscribe(_unfilled_if($scope0_owned, 0) && $input_label__closures, _scope($scope2_id, {
						_: _scope_with_id($scope1_id),
						Cg: 1
					})));
				}, $scope1_id)
			});
			_subscribe(_unfilled_if($scope0_owned, 0) && $input_label__closures, _scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			}));
		}, $scope0_id)
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "c2");
	$scope0_reason && _scope($scope0_id, {
		f: count,
		g: $input_label__closures,
		h: $count__closures,
		a: _existing_scope($childScope2)
	});
}, 1, () => [box_default, card_default]);
