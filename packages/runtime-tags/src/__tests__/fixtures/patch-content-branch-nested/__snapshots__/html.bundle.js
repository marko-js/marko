// tags/widget/index.marko
const $template = "<p> </p><!><!>";
const $walks = "D l%c";
const $setup = [[], []];
_shells({ b: "b;D l%;<p> </p><!><!>" });
var widget_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<p>${_patch_text($scope0_id, "a", input.label, void 0, $scope0_reason, 0)}</p>`);
	_dynamic_tag($scope0_id, "b", input.content, {}, 2, 0, 0, _write_guard($scope0_reason, 1), $scope0_reason, 1);
	_scope($scope0_id, {});
});

// template.marko
_shells({
	a1: "a1;D ;<em> </em>",
	a: "a !; ;<main></main>",
	a5: "a5; ;<div></div>",
	a4: /*@__PURE__*/ (() => `a4${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks)};${/*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 5), $wg__input_b = _write_guard($scope0_reason, 4), $wi__input_a__OR__input_b__OR__input_label__OR__input_text = _write_if($scope0_reason, 2), $wg__input_a = _write_guard($scope0_reason, 3), $cg__input_a__OR__input_b = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_text__closures = /* @__PURE__ */ new Set();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_if(() => {
		if (input.a) {
			const $scope1_id = _scope_id();
			_html("<div>");
			_if(() => {
				if (input.b) {
					const $scope2_id = _scope_id();
					_set_scope_reason(_mask_group($scope0_reason, 5) << 1);
					const $childScope = _patch_child($scope2_id, "a", 0);
					widget_default({
						label: input.label,
						content: _content_elide("a1", () => {
							_scope_reason();
							const $scope3_id = _scope_id();
							_html(`<em>${_patch_text($scope3_id, "a", input.text, void 0, $scope0_reason, 6)}</em>`);
							_client_guard($scope0_reason, 6) && _patch_init($scope3_id, "a0");
							_subscribe(_unfilled_if($scope0_reason, 6) && $input_text__closures, _scope($scope3_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope2_id) }));
						}, $scope2_id)
					});
					_patch_child_end();
					_unfilled_if($scope0_reason, 5) && _patch_init($scope2_id, $cg__input_label ? "a2" : "a3");
					_subscribe(_unfilled_if($scope0_reason, 5) && $input_label__closures, _scope($scope2_id, {
						_: $wi__input_a__OR__input_b__OR__input_label__OR__input_text && _scope_with_id($scope1_id),
						a: _existing_scope($childScope)
					}), $cg__input_label && "a3");
					return 0;
				}
			}, $scope1_id, "a", 1, $wg__input_b, void 0, void 0, void 0, ["a4"], $scope0_reason, 4);
			_html(`</div>${_el_resume($scope1_id, "a", $wg__input_b)}`);
			_client_guard($scope0_reason, 4) && _patch_init($scope1_id, "a6");
			$wi__input_a__OR__input_b__OR__input_label__OR__input_text && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_a, void 0, void 0, void 0, ["a5"], $scope0_reason, 3);
	_html(`</main>${_el_resume($scope0_id, "a", $wg__input_a)}`);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 4)) && input.b,
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 5)) && input.label,
		g: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 6)) && input.text,
		j: _write_if($scope0_reason, 6) && _unfilled_if($scope0_reason, 6) && $input_text__closures,
		i: _write_if($scope0_reason, 5) && _unfilled_if($scope0_reason, 5) && $input_label__closures
	}) || (_filled_guard($scope0_reason, 4) && _client_guard($scope0_reason, 3) && _patch_fill($scope0_id, "va7", input.b, !_server_guard($scope0_reason, 4)), _filled_guard($scope0_reason, 5) && $cg__input_a__OR__input_b && _patch_fill($scope0_id, "va8", input.label, !_server_guard($scope0_reason, 5)), _filled_guard($scope0_reason, 6) && $cg__input_a__OR__input_b && _patch_fill($scope0_id, "va9", input.text, !_server_guard($scope0_reason, 6)));
}, 1);
