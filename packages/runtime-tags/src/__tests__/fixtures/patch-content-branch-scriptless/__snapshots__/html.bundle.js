// tags/widget/index.marko
const $template = "<section><!></section>";
const $setup = [[], []];
_shells({ b: "b;D%;<section><!></section>" });
var widget_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</section>");
	_scope($scope0_id, {});
});

// template.marko
_shells({
	a1: "a1;D ;<em> </em>",
	a: "a; ;<main></main>",
	a2: `a2${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l")};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_text = _client_guard($scope0_reason, 2), $wi__input_show__OR__input_text = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 1), $ui__input_show = _unfilled_if($scope0_reason, 1), $ui__input_text = _unfilled_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_text__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			widget_default({ content: _content("a1", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`<em>${_text_mark($scope2_id, "a", input.text, 1, $scope0_reason, 2)}</em>`);
				$cg__input_text && _patch_render($scope2_id, "a0");
				_subscribe(_unfilled_if($scope0_reason, 2) && $input_text__closures, _scope($scope2_id, { _: $wi__input_show__OR__input_text && _scope_with_id($scope1_id) }), $cg__input_text && "a0");
			}, $scope1_id, 0) });
			_patch_child_end();
			_scope($scope1_id, {
				_: $wi__input_show__OR__input_text && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a2"], $scope0_reason, 1);
	_html(`</main>${_el_mark($scope0_id, "a", $wg__input_show)}`);
	_scope($scope0_id, {
		e: ($ui__input_show || $ui__input_text) && input.text,
		f: _write_if($scope0_reason, 2) && ($ui__input_text || $ui__input_show) && $input_text__closures
	}) || _filled_guard($scope0_reason, 2) && $ui__input_show && _patch_write($scope0_id, "xe", input.text, !_server_guard($scope0_reason, 2)) && _client_guard($scope0_reason, 1) && _patch_subscribers($scope0_id, "a3", "e");
}, 1);
