// tags/card/index.marko
const $template = "<section><!></section>";
const $setup = [[], []];
_shells({ b: "b;D%;<section><!></section>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</section>");
	_scope($scope0_id, {});
});

// template.marko
_shells({
	a2: "a2;D l%;<p> </p><!><!>",
	a: "a !; ;<main></main>",
	a3: /*@__PURE__*/ ((_w0) => `a3${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l")};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_show__OR__input_note__OR__input_inner = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	const $input_inner__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _patch_child($scope1_id, "a", 1);
			card_default({ content: _content_elide("a2", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`<p>${_patch_text($scope2_id, "a", input.note, void 0, $scope0_reason, 2)}</p>`);
				_dynamic_tag($scope2_id, "b", input.inner, {}, 2, 0, 0, _write_guard($scope0_reason, 3), $scope0_reason, 3);
				_client_guard($scope0_reason, 2) && _patch_init($scope2_id, "a0");
				_client_guard($scope0_reason, 3) && _patch_init($scope2_id, "a1");
				_subscribe(_unfilled_if($scope0_reason, 3) && $input_inner__closures, _subscribe(_unfilled_if($scope0_reason, 2) && $input_note__closures, _scope($scope2_id, { _: $wi__input_show__OR__input_note__OR__input_inner && _scope_with_id($scope1_id) })));
			}, $scope1_id) });
			_patch_child_end();
			_scope($scope1_id, {
				_: $wi__input_show__OR__input_note__OR__input_inner && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a3"], $scope0_reason, 1);
	_html(`</main>${_el_resume($scope0_id, "a", $wg__input_show)}`);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.note,
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.inner,
		g: _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_note__closures,
		h: _write_if($scope0_reason, 3) && _unfilled_if($scope0_reason, 3) && $input_inner__closures
	}) || (_filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "va4", input.note, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && $cg__input_show && _patch_fill($scope0_id, "va5", input.inner, !_server_guard($scope0_reason, 3)), $cg__input_show && _content_withhold(input.inner));
}, 1);
