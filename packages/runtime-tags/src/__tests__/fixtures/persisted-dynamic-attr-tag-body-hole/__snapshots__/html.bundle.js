// card.marko
const $template = "<section><em> </em><!><!></section>";
const $walks = "E l%b%l";
_shells({ b: "b;E l%b%;<section><em> </em><!><!></section>" });
var card_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<section><em>${_patch_text($scope0_id, "a", input.meta.n, void 0, $scope0_owned, 0)}</em>`);
	const $tag = input.meta.content;
	_dynamic_tag($scope0_id, "b", $tag, {}, 0, 0, _source_guard($scope0_reason, 1), _patch_dynamic_tag($scope0_id, "b", $tag, 0, 0, 0, $scope0_owned, 1));
	const $tag2 = input.content;
	_dynamic_tag($scope0_id, "c", $tag2, {}, 0, 0, _source_guard($scope0_reason, 2), _patch_dynamic_tag($scope0_id, "c", $tag2, 0, 0, 0, $scope0_owned, 2));
	_html("</section>");
	$scope0_reason && _scope($scope0_id, {});
}, 0, 1);

// template.marko
_shells({
	c0: "c0; ; ",
	c1: "c1; ; ",
	c: /*@__PURE__*/ ((_w0, _w1) => `c !c2;${_w0};${_w1}`)(((_w0) => `b/${_w0}& b`)($walks), ((_w0) => `<!>${_w0}<button>+</button>`)($template))
});
var template_default = _template_persisted("c", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_set_serialize_reason(2);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	card_default({
		meta: attrTag({
			n: count,
			content: _content_elide("c1", () => {
				_persisted_reason();
				const $scope1_id = _scope_id();
				_html(_patch_text($scope1_id, "a", input.label, void 0, $scope0_owned, 0));
				_subscribe(_unfilled_if($scope0_owned, 0) && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
			}, $scope0_id)
		}),
		content: _content_elide("c0", () => {
			_persisted_reason();
			const $scope2_id = _scope_id();
			_html(_patch_text($scope2_id, "a", input.label, void 0, $scope0_owned, 0));
			_subscribe(_unfilled_if($scope0_owned, 0) && $input_label__closures, _scope($scope2_id, {
				_: _scope_with_id($scope0_id),
				Cg: 1
			}));
		}, $scope0_id)
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "c2");
	$scope0_reason && _scope($scope0_id, {
		f: count,
		g: $input_label__closures,
		a: _existing_scope($childScope)
	});
}, 1, () => [card_default]);
