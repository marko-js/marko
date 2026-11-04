// tags/widget/index.marko
const $template = "<p> </p><!><!>";
const $walks = "D l%c";
const $setup = [[], []];
_shells({ b: "b;D l%;<p> </p><!><!>" });
var widget_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<p>${_text_mark($scope0_id, "a", input.label, 1, $scope0_reason, 0)}</p>`);
	_dynamic_tag($scope0_id, "b", input.content, {}, 2, 0, 0, _write_guard($scope0_reason, 1), $scope0_reason, 1);
	_scope($scope0_id, {});
});

// template.marko
_shells({
	a1: "a1;D ;<em> </em>",
	a: "a; ;<main></main>",
	a4: "a4; ;<div></div>",
	a3: `a3${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks)};${/*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_text = _client_guard($scope0_reason, 6), $ui__input_a = _unfilled_if($scope0_reason, 3), $ui__input_b = _unfilled_if($scope0_reason, 4), $cg__input_label = _client_guard($scope0_reason, 5), $wg__input_b = _write_guard($scope0_reason, 4), $wi__input_a__OR__input_b__OR__input_label__OR__input_text = _write_if($scope0_reason, 2), $wg__input_a = _write_guard($scope0_reason, 3), $ui__input_label = _unfilled_if($scope0_reason, 5), $ui__input_a__OR__input_b = _unfilled_if($scope0_reason, 0), $ui__input_text = _unfilled_if($scope0_reason, 6), $cg__input_b = _client_guard($scope0_reason, 4), $cg__input_a = _client_guard($scope0_reason, 3), $fg__input_b = _filled_guard($scope0_reason, 4);
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
					_set_scope_reason(_updates_from($scope0_reason, 5) << 1);
					const $childScope = _peek_scope_id($scope2_id, "a", 0);
					widget_default({
						label: input.label,
						content: _content("a1", () => {
							_scope_reason();
							const $scope3_id = _scope_id();
							_html(`<em>${_text_mark($scope3_id, "a", input.text, 1, $scope0_reason, 6)}</em>`);
							$cg__input_text && _patch_render($scope3_id, "a0");
							_subscribe(_unfilled_if($scope0_reason, 6) && $input_text__closures, _scope($scope3_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope2_id) }), $cg__input_text && "a0");
						}, $scope2_id, 0)
					});
					_patch_child_end();
					_unfilled_if($scope0_reason, 5) && _patch_subscribe($scope2_id, "a2", $cg__input_label);
					_subscribe(_unfilled_if($scope0_reason, 5) && $input_label__closures, _scope($scope2_id, {
						_: $wi__input_a__OR__input_b__OR__input_label__OR__input_text && _scope_with_id($scope1_id),
						a: _existing_scope($childScope)
					}), $cg__input_label && "a2", 0);
					_resume_branch($scope2_id);
					return 0;
				}
			}, $scope1_id, "a", 1, $wg__input_b, 1, 0, 0, ["a3"], $scope0_reason, 4);
			_html(`</div>${_el_mark($scope1_id, "a", $wg__input_b)}`);
			$cg__input_b && _patch_render($scope1_id, "a5");
			$wi__input_a__OR__input_b__OR__input_label__OR__input_text && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_a, 1, 0, 0, ["a4"], $scope0_reason, 3);
	_html(`</main>${_el_mark($scope0_id, "a", $wg__input_a)}`);
	$fg__input_b && $cg__input_a && _patch_render($scope0_id, "a5", "e");
	_scope($scope0_id, {
		e: ($ui__input_a || $ui__input_b) && input.b,
		f: ($ui__input_a__OR__input_b || $ui__input_label) && input.label,
		g: ($ui__input_a__OR__input_b || $ui__input_text) && input.text,
		j: _write_if($scope0_reason, 6) && ($ui__input_text || $ui__input_a || $ui__input_b) && $input_text__closures,
		i: _write_if($scope0_reason, 5) && ($ui__input_label || $ui__input_a || $ui__input_b) && $input_label__closures
	}) || ($fg__input_b && $ui__input_a && _patch_write($scope0_id, "xe", input.b, !_server_guard($scope0_reason, 4)), _filled_guard($scope0_reason, 5) && $ui__input_a__OR__input_b && _patch_write($scope0_id, "xf", input.label, !_server_guard($scope0_reason, 5)) && ($cg__input_a || $cg__input_b) && _patch_subscribers($scope0_id, "a6", "f"), _filled_guard($scope0_reason, 6) && $ui__input_a__OR__input_b && _patch_write($scope0_id, "xg", input.text, !_server_guard($scope0_reason, 6)) && ($cg__input_a || $cg__input_b) && _patch_subscribers($scope0_id, "a7", "g"));
}, 1);
