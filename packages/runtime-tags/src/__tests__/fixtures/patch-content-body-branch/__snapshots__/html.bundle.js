// tags/card/index.marko
const $template = "<section><h2> </h2><!></section>";
const $walks = "E l%l";
const $setup = [[], []];
_shells({ b: "b;E l%;<section><h2> </h2><!></section>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<section><h2>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_reason, 0)}</h2>`);
	_dynamic_tag($scope0_id, "b", input.content, {}, 2, 0, 0, _write_guard($scope0_reason, 1), $scope0_reason, 1);
	_html("</section>");
	_scope($scope0_id, {});
});

// template.marko
_shells({
	a3: "a3;b%;<!><!><!>",
	a: "a !; ;<main></main>",
	a4: /*@__PURE__*/ ((_w0) => `a4${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template),
	a2: "a2;Db%;<em>A:<!></em>",
	a5: "a5;Db%;<strong>B:<!></strong>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_note = _client_guard($scope0_reason, 6), $wi__input_show__OR__input_alt__OR__input_note = _write_if($scope0_reason, 1), $wg__input_alt = _write_guard($scope0_reason, 5), $wg__input_show = _write_guard($scope0_reason, 3), $cg__input_show = _client_guard($scope0_reason, 3), $wi__input_note = _write_if($scope0_reason, 6);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	const $input_alt__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 4) << 1);
			const $childScope = _patch_child($scope1_id, "a", 0);
			card_default({
				title: input.title,
				content: _content_elide("a3", () => {
					_scope_reason();
					const $scope2_id = _scope_id();
					_if(() => {
						if (input.alt) {
							const $scope3_id = _scope_id();
							_html(`<em>A:${_patch_text($scope3_id, "a", input.note, 2, $scope0_reason, 6)}</em>`);
							$cg__input_note && _patch_init($scope3_id, "a0");
							_subscribe(_unfilled_if($scope0_reason, 6) && $input_note__closures, _scope($scope3_id, { _: $wi__input_show__OR__input_alt__OR__input_note && _scope_with_id($scope2_id) }));
							return 0;
						} else {
							const $scope4_id = _scope_id();
							_html(`<strong>B:${_patch_text($scope4_id, "a", input.note, 2, $scope0_reason, 6)}</strong>`);
							$cg__input_note && _patch_init($scope4_id, "a1");
							_subscribe(_unfilled_if($scope0_reason, 6) && $input_note__closures, _scope($scope4_id, {
								_: $wi__input_show__OR__input_alt__OR__input_note && _scope_with_id($scope2_id),
								Cj: $wi__input_note && 1
							}));
							return 1;
						}
					}, $scope2_id, "a", 1, $wg__input_alt, void 0, void 0, void 0, ["a2", "a5"], $scope0_reason, 5);
					_client_guard($scope0_reason, 5) && _patch_init($scope2_id, "a6");
					$wi__input_show__OR__input_alt__OR__input_note && _subscribe(_unfilled_if($scope0_reason, 5) && $input_alt__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }));
					$wg__input_alt || $wi__input_show__OR__input_alt__OR__input_note && _resume_branch($scope2_id);
				}, $scope1_id)
			});
			_patch_child_end();
			_client_guard($scope0_reason, 4) && _patch_init($scope1_id, "a7");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a4"], $scope0_reason, 3);
	_html(`</main>${_el_resume($scope0_id, "a", $wg__input_show)}`);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 4)) && input.title,
		f: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 5)) && input.alt,
		g: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 6)) && input.note,
		j: $wi__input_note && _unfilled_if($scope0_reason, 6) && $input_note__closures,
		i: _write_if($scope0_reason, 5) && _unfilled_if($scope0_reason, 5) && $input_alt__closures
	}) || (_filled_guard($scope0_reason, 4) && $cg__input_show && _patch_fill($scope0_id, "va8", input.title, !_server_guard($scope0_reason, 4)), _filled_guard($scope0_reason, 5) && $cg__input_show && _patch_fill($scope0_id, "va9", input.alt, !_server_guard($scope0_reason, 5)), _filled_guard($scope0_reason, 6) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va10", input.note, !_server_guard($scope0_reason, 6)));
}, 1);
