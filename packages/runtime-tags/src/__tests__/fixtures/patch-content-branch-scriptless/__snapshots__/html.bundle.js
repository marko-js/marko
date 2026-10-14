// tags/widget/index.marko
const $template = "<section><!></section>";
_shells({ b: "b;D%;<section><!></section>" });
var widget_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $wg__input_content, void 0, 2, $scope0_reason, 0);
	_html("</section>");
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a: "a !; ;<main></main>",
	a1: /*@__PURE__*/ ((_w0) => `a1;${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l")};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_show__OR__input_text = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_text__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _patch_child($scope1_id, "a");
			widget_default({ content: _content_elide("a0", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`<em>${_patch_text($scope2_id, "a", input.text, void 0, $scope0_reason, 2)}</em>`);
				_unfilled_if($scope0_reason, 2) && _patch_init($scope2_id, "a2");
				_subscribe(_unfilled_if($scope0_reason, 2) && $input_text__closures, _scope($scope2_id, { _: $wi__input_show__OR__input_text && _scope_with_id($scope1_id) }));
			}, $scope1_id) });
			_scope($scope1_id, {
				_: $wi__input_show__OR__input_text && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a1"], $scope0_reason, 1);
	_html(`</main>${_el_resume($scope0_id, "a", $wg__input_show)}`);
	$scope0_page ? _scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.text,
		f: _write_if($scope0_reason, 2) && $input_text__closures
	}) : _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "va3", input.text);
}, 1);
