// tags/wrap/index.marko
const $template$1 = "<section><!></section>";
_shells({ c: "c;D%;<section><!></section>" });
var wrap_default = _template_persisted("c", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<section>");
	const $tag = input.content;
	_dynamic_tag($scope0_id, "a", $tag, {}, 0, 0, $sg__input_content, _patch_dynamic_tag($scope0_id, "a", $tag, 0, 0, 0, $scope0_reason, 0));
	_html("</section>");
	$scope0_page && _scope($scope0_id, {});
}, 0, 0);

// tags/card/index.marko
const $template = /*@__PURE__*/ ((_w0) => `<button> </button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` D l/${_w0}&`)("D%l");
_shells({
	b0: "b0;D ;<em> </em>",
	b: /*@__PURE__*/ ((_w0, _w1) => `b !b1;${_w0};${_w1}`)(((_w0) => ` D l/${_w0}&`)("D%l"), ((_w0) => `<button> </button>${_w0}`)($template$1))
});
var card_default = _template_persisted("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}`);
	_set_serialize_reason(0);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "c", $childScope);
	wrap_default({ content: _content_elide("b0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<em>${_patch_text($scope1_id, "a", input.note, void 0, $scope0_reason, 0)}</em>`);
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_note__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
	}, $scope0_id) });
	_script($scope0_id, "b1");
	_patch_value($scope0_id, "b0", n, 1);
	$scope0_page && _scope($scope0_id, {
		g: n,
		h: $input_note__closures,
		c: _existing_scope($childScope)
	});
}, 0, () => [wrap_default]);

// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a0: /*@__PURE__*/ ((_w0, _w1) => `a0;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $template)
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _source_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason(_mask_group($scope0_reason, 2) << 1);
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "a", $childScope);
			card_default({ note: input.note });
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a0"], $scope0_reason, 1);
	$scope0_page && _scope($scope0_id, { e: input.note });
}, 1, () => [card_default]);
