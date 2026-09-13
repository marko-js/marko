// tags/card/index.marko
const $template = "<section><header><!></header><footer><!></footer></section>";
const $walks = "E%lD%m";
_shells({ b: "b;E%lD%;<section><header><!></header><footer><!></footer></section>" });
var card_default = _template_persisted("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_header = _source_guard($scope0_reason, 1), $sg__input_footer = _source_guard($scope0_reason, 2), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<section><header>");
	const $tag = input.header;
	_dynamic_tag($scope0_id, "a", $tag, {}, 0, 0, $sg__input_header, _patch_dynamic_tag($scope0_id, "a", $tag, 0, 0, 0, $scope0_reason, 1));
	_html("</header><footer>");
	const $tag2 = input.footer;
	_dynamic_tag($scope0_id, "b", $tag2, {}, 0, 0, $sg__input_footer, _patch_dynamic_tag($scope0_id, "b", $tag2, 0, 0, 0, $scope0_reason, 2));
	_html("</footer></section>");
	$scope0_page && _scope($scope0_id, {});
}, 0, 0);

// template.marko
_shells({
	a0: "a0,static",
	a1: "a1;D ;<b> </b>",
	a: /*@__PURE__*/ ((_w0, _w1) => `a;${_w0};${_w1}`)(((_w0) => `D/${_w0}&l`)($walks), ((_w0) => `<main>${_w0}</main>`)($template))
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_h__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_set_serialize_reason(0);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	card_default({
		header: attrTag({ content: _content_elide("a1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<b>${_patch_text($scope1_id, "a", input.h, void 0, $scope0_reason, 0)}</b>`);
			_subscribe(_unfilled_if($scope0_reason, 0) && $input_h__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
		}, $scope0_id) }),
		footer: attrTag({ content: _content_elide("a0", () => {
			_scope_reason();
			_scope_id();
			_html("static");
		}, $scope0_id) })
	});
	_html("</main>");
	$scope0_page && _scope($scope0_id, {
		e: $input_h__closures,
		a: _existing_scope($childScope)
	});
}, 1, () => [card_default]);
