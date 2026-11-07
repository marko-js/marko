// tags/card/index.marko
const $template = "<section><h2> </h2><!></section>";
const $walks = "E l%l";
const $setup = [[], []];
_shells({ b: "b;E l%;<section><h2> </h2><!></section>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<section><h2>${_text_mark($scope0_id, "a", input.title, 1, $scope0_reason, 0)}</h2>`);
	_dynamic_tag($scope0_id, "b", input.content, {}, 2, 0, 0, _write_guard($scope0_reason, 1), $scope0_reason, 1);
	_html("</section>");
	_scope($scope0_id, {});
});

// template.marko
_shells({
	a3: "a3;b%;<!><!><!>",
	a: "a; ;<main></main>",
	a4: `a4${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`,
	a2: "a2;Db%;<em>A:<!></em>",
	a5: "a5;Db%;<strong>B:<!></strong>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_note = _client_guard($scope0_reason, 6), $wi__input_show__OR__input_alt__OR__input_note = _write_if($scope0_reason, 1), $wg__input_alt = _write_guard($scope0_reason, 5), $wg__input_show = _write_guard($scope0_reason, 3), $fg__input_title = _filled_guard($scope0_reason, 4), $fg__input_alt = _filled_guard($scope0_reason, 5), $cg__input_show = _client_guard($scope0_reason, 3), $fg__input_note = _filled_guard($scope0_reason, 6), $cg__input_alt = _client_guard($scope0_reason, 5), $wi__input_note = _write_if($scope0_reason, 6);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	const $input_alt__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 4) << 1);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			card_default({
				title: input.title,
				content: _content("a3", () => {
					_scope_reason();
					const $scope2_id = _scope_id();
					_if(() => {
						if (input.alt) {
							const $scope3_id = _scope_id();
							_html(`<em>A:${_text_mark($scope3_id, "a", input.note, 2, $scope0_reason, 6)}</em>`);
							$cg__input_note && _patch_render($scope3_id, "a0");
							_subscribe(_unfilled_if($scope0_reason, 6) && $input_note__closures, _scope($scope3_id, { _: $wi__input_show__OR__input_alt__OR__input_note && _scope_with_id($scope2_id) }));
							return 0;
						} else {
							const $scope4_id = _scope_id();
							_html(`<strong>B:${_text_mark($scope4_id, "a", input.note, 2, $scope0_reason, 6)}</strong>`);
							$cg__input_note && _patch_render($scope4_id, "a1");
							_subscribe(_unfilled_if($scope0_reason, 6) && $input_note__closures, _scope($scope4_id, {
								_: $wi__input_show__OR__input_alt__OR__input_note && _scope_with_id($scope2_id),
								Cj: $wi__input_note && 1
							}));
							return 1;
						}
					}, $scope2_id, "a", 1, $wg__input_alt, 1, 0, 0, ["a2", "a5"], $scope0_reason, 5);
					$cg__input_alt && _patch_render($scope2_id, "a6");
					$wi__input_show__OR__input_alt__OR__input_note && _subscribe(_unfilled_if($scope0_reason, 5) && $input_alt__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }));
					$wg__input_alt || $wi__input_show__OR__input_alt__OR__input_note && _resume_branch($scope2_id);
				}, $scope1_id, 0)
			});
			_patch_child_end();
			_client_guard($scope0_reason, 4) && _patch_render($scope1_id, "a7");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a4"], $scope0_reason, 3);
	_html(`</main>${_el_mark($scope0_id, "a", $wg__input_show)}`);
	$fg__input_title && $cg__input_show && _patch_render($scope0_id, "a7", "e");
	$fg__input_alt && $cg__input_show && _patch_subscribers($scope0_id, "a8", "f");
	$fg__input_note && ($cg__input_show || $cg__input_alt) && _patch_subscribers($scope0_id, "a9", "g");
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 4)) && input.title,
		f: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 5)) && input.alt,
		g: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 6)) && input.note,
		j: $wi__input_note && (_unfilled_if($scope0_reason, 6) || _unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 5)) && $input_note__closures,
		i: _write_if($scope0_reason, 5) && (_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 3)) && $input_alt__closures
	}) || ($fg__input_title && _unfilled_if($scope0_reason, 3) && _patch_write($scope0_id, "xe", input.title, !_server_guard($scope0_reason, 4)), $fg__input_alt && _unfilled_if($scope0_reason, 3) && _patch_write($scope0_id, "xf", input.alt, !_server_guard($scope0_reason, 5)), $fg__input_note && _unfilled_if($scope0_reason, 0) && _patch_write($scope0_id, "xg", input.note, !_server_guard($scope0_reason, 6)));
}, 1);
