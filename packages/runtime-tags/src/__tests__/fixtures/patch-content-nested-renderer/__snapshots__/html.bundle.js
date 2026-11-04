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
	a: "a; ;<main></main>",
	a3: `a3${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l")};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_show__OR__input_note__OR__input_inner = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 1), $fg__input_note = _filled_guard($scope0_reason, 2), $fg__input_inner = _filled_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	const $input_inner__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope1_id, "a", 1);
			card_default({ content: _content("a2", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`<p>${_text_mark($scope2_id, "a", input.note, 1, $scope0_reason, 2)}</p>`);
				_dynamic_tag($scope2_id, "b", input.inner, {}, 2, 0, 0, _write_guard($scope0_reason, 3), $scope0_reason, 3);
				_client_guard($scope0_reason, 2) && _patch_render($scope2_id, "a0");
				_client_guard($scope0_reason, 3) && _patch_render($scope2_id, "a1");
				_subscribe(_unfilled_if($scope0_reason, 3) && $input_inner__closures, _subscribe(_unfilled_if($scope0_reason, 2) && $input_note__closures, _scope($scope2_id, { _: $wi__input_show__OR__input_note__OR__input_inner && _scope_with_id($scope1_id) })));
			}, $scope1_id, 0) });
			_patch_child_end();
			_scope($scope1_id, {
				_: $wi__input_show__OR__input_note__OR__input_inner && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a3"], $scope0_reason, 1);
	_html(`</main>${_el_mark($scope0_id, "a", $wg__input_show)}`);
	$fg__input_note && $cg__input_show && _patch_subscribers($scope0_id, "a4", "e");
	$fg__input_inner && $cg__input_show && _patch_subscribers($scope0_id, "a5", "f");
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.note,
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.inner,
		g: _write_if($scope0_reason, 2) && (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1)) && $input_note__closures,
		h: _write_if($scope0_reason, 3) && (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 1)) && $input_inner__closures
	}) || ($fg__input_note && $cg__input_show && _patch_write($scope0_id, "xe", input.note, !_server_guard($scope0_reason, 2)), $fg__input_inner && $cg__input_show && _patch_write($scope0_id, "xf", input.inner, !_server_guard($scope0_reason, 3)));
}, 1);
