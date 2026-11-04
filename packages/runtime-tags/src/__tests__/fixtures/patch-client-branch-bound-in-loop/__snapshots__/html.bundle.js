// tags/card.marko
const $template = "<section><button>clear</button><!></section>";
const $walks = "D b%l";
const $setup = [[], ["b0"]];
_shells({ b: "b !b0;D b%;<section><button>clear</button><!></section>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<section><button>clear</button>${_el_mark($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", c, {}, 2, 0, 0, 1, _client_guard($scope0_reason, 0) << 1, 0, 1);
	_html("</section>");
	_script($scope0_id, "b0");
	_scope($scope0_id, {});
});

// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a8: `a8${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_rows = _write_guard($scope0_reason, 2), $cg__input_rows = _client_guard($scope0_reason, 2), $wg__input_rows__OR__input_tag__OR__input_label = _write_guard($scope0_reason, 0), $wi__input_rows = _write_if($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1), $wi__input_tag = _write_if($scope0_reason, 3), $wi__input_label = _write_if($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_tag__closures = /* @__PURE__ */ new Set();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_rows__closures = /* @__PURE__ */ new Set();
	_filled_guard($scope0_reason, 4) && _patch_write($scope0_id, "xg", input.label, !_server_guard($scope0_reason, 4)) && _patch_subscribers($scope0_id, "a11", "g");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope1_id, "a", 1);
			card_default({ content: _content_resume("a7", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html("<ul>");
				_for_of(input.rows, (r) => {
					const $scope3_id = _scope_id();
					const $for_content__r_label__closures = /* @__PURE__ */ new Set();
					_html("<li>");
					_dynamic_tag($scope3_id, "a", input.tag, { onClick: _bind_resume(function() {
						console.log(r.label, input.label);
					}, "a0", $scope3_id) }, 0, _content_resume("a1", () => {
						const $scope4_id = _scope_id();
						_scope_reason();
						_html(_text_mark($scope4_id, "a", r.label, $wg__input_rows * 2));
						$cg__input_rows && _patch_render($scope4_id, "a2");
						_write_if($scope0_reason, 0) && _subscribe($wi__input_rows && $for_content__r_label__closures, _scope($scope4_id, { _: _scope_with_id($scope3_id) }), $cg__input_rows && "a2", $wg__input_rows);
					}, $scope3_id), 0, $wg__input_rows__OR__input_tag__OR__input_label);
					_html("</li>");
					_patch_render($scope3_id, "a3", ((_filled_guard($scope0_reason, 3) ? " >>>f" : "") + (_filled_guard($scope0_reason, 4) ? " >>>g" : "") + (_filled_guard($scope0_reason, 2) ? " d" : "")).slice(1), $scope0_reason, 0);
					_subscribe($wi__input_label && $input_label__closures, _subscribe($wi__input_tag && $input_tag__closures, _scope($scope3_id, {
						d: r?.label,
						_: _scope_with_id($scope2_id),
						k: $wi__input_rows && $for_content__r_label__closures
					}), _client_guard($scope0_reason, 3) && "a4", $wg__input_rows__OR__input_tag__OR__input_label), _client_guard($scope0_reason, 4) && "a5", $wg__input_rows__OR__input_tag__OR__input_label);
					$wg__input_rows__OR__input_tag__OR__input_label || (_write_guard($scope0_reason, 3) || _write_guard($scope0_reason, 4)) && _resume_branch($scope3_id);
				}, "id", $scope2_id, "a", $wg__input_rows, $wg__input_rows, $wg__input_rows, "</ul>", 1);
				$cg__input_rows && _patch_render($scope2_id, "a6");
				_subscribe($wi__input_rows && $input_rows__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), $cg__input_rows && "a6", $wg__input_rows);
			}, $scope1_id) });
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a8"], $scope0_reason, 1);
	_scope($scope0_id, {
		e: input.rows,
		f: input.tag,
		g: input.label,
		i: $wi__input_tag && $input_tag__closures,
		j: $wi__input_label && $input_label__closures,
		h: $wi__input_rows && $input_rows__closures
	}) || (_filled_guard($scope0_reason, 2) && _patch_write($scope0_id, "xe", input.rows, !_server_guard($scope0_reason, 2)) && _patch_subscribers($scope0_id, "a9", "e"), _filled_guard($scope0_reason, 3) && _patch_write($scope0_id, "xf", input.tag, !_server_guard($scope0_reason, 3)) && _patch_subscribers($scope0_id, "a10", "f"));
}, 1);
