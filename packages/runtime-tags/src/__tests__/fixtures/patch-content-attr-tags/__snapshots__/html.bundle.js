// tags/card/index.marko
const $template = "<section><header><!></header><footer><!></footer></section>";
const $walks = "E%lD%m";
_shells({ b: "b;E%lD%;<section><header><!></header><footer><!></footer></section>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_header = _write_guard($scope0_reason, 1), $wg__input_footer = _write_guard($scope0_reason, 2), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<section><header>");
	_dynamic_tag($scope0_id, "a", input.header, {}, 0, 0, $wg__input_header, void 0, 2, $scope0_reason, 1);
	_html("</header><footer>");
	_dynamic_tag($scope0_id, "b", input.footer, {}, 0, 0, $wg__input_footer, void 0, 2, $scope0_reason, 2);
	_html("</footer></section>");
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
_shells({
	a0: "a0,static",
	a1: "a1;D ;<b> </b>",
	a: /*@__PURE__*/ (() => `a;${((_w0) => `D/${_w0}&l`)($walks)};${((_w0) => `<main>${_w0}</main>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_h = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_h__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "a");
	card_default({
		header: attrTag({ content: _content_elide("a1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<b>${_patch_text($scope1_id, "a", input.h, void 0, $scope0_reason, 0)}</b>`);
			_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, "a2");
			_subscribe(_unfilled_if($scope0_reason, 0) && $input_h__closures, _scope($scope1_id, { _: $wi__input_h && _scope_with_id($scope0_id) }));
		}, $scope0_id) }),
		footer: attrTag({ content: _content_elide("a0", () => {
			_scope_reason();
			_scope_id();
			_html("static");
		}, $scope0_id) })
	});
	_html("</main>");
	$scope0_page && _scope($scope0_id, {
		e: $wi__input_h && _unfilled_if($scope0_reason, 0) && $input_h__closures,
		a: _existing_scope($childScope)
	});
}, 1);
