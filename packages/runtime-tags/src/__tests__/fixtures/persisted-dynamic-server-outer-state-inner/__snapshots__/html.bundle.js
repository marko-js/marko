// card.marko
_shells({ b: "b;E l%;<section><em> </em><!></section>" });
var card_default = _template_persisted("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<section><em>${_patch_text($scope0_id, "a", input.meta ? input.meta.n : "-", void 0, $scope0_reason, 0)}</em>`);
	const $tag = input.content;
	_dynamic_tag($scope0_id, "b", $tag, {}, 0, 0, _source_guard($scope0_reason, 1), _patch_dynamic_tag($scope0_id, "b", $tag, 0, 0, 0, $scope0_reason, 1));
	_html("</section>");
	$scope0_page && _scope($scope0_id, {});
}, 0, 0);

// box.marko
const $template = "<article><b> </b><!></article>";
const $walks = "E l%l";
_shells({ a: "a;E l%;<article><b> </b><!></article>" });
var box_default = _template_persisted("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<article><b>${_patch_text($scope0_id, "a", input.k, void 0, $scope0_reason, 0)}</b>`);
	const $tag = input.content;
	_dynamic_tag($scope0_id, "b", $tag, {}, 0, 0, _source_guard($scope0_reason, 1), _patch_dynamic_tag($scope0_id, "b", $tag, 0, 0, 0, $scope0_reason, 1));
	_html("</article>");
	$scope0_page && _scope($scope0_id, {});
}, 0, 0);

// template.marko
_shells({
	c0: "c0; ; ",
	c1: /*@__PURE__*/ ((_w0, _w1) => `c1 c6;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks), /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template)),
	c: "c !c2;b%b ;<!><!><button>+</button>"
});
var template_default = _template_persisted("c", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	const $tag = input.on ? card_default : null;
	_dynamic_tag($scope0_id, "a", $tag, {}, _content_elide("c1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_set_serialize_reason(2);
		const $childScope = _peek_scope_id();
		_patch_child($scope1_id, "a", $childScope);
		box_default({
			k: count,
			content: _content_elide("c0", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(_patch_text($scope2_id, "a", input.label, void 0, $scope0_reason, 2));
				_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }));
			}, $scope1_id)
		});
		_subscribe($count__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		}));
	}, $scope0_id), 0, _source_guard($scope0_reason, 1), _patch_dynamic_tag($scope0_id, "a", $tag, 0, "c1", 0, $scope0_reason, 1));
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "c2");
	$scope0_page && _scope($scope0_id, {
		f: _source_if($scope0_reason, 1) && input.label,
		g: count,
		h: $input_label__closures,
		i: $count__closures
	});
}, 1, 1);
