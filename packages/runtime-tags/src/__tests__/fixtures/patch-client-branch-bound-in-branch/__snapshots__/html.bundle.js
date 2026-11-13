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
	a5: `a5${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 2), $cg__input_label = _client_guard($scope0_reason, 2), $wg__input_tag = _write_guard($scope0_reason, 3), $wi__input_tag = _write_if($scope0_reason, 3), $wg__input_inner = _write_guard($scope0_reason, 1), $cg__input_inner = _client_guard($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 2), $wi__input_inner = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_tag__closures = /* @__PURE__ */ new Set();
	const $input_inner__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope1_id, "a", 1);
			card_default({ content: _content_resume("a4", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_if(() => {
					if (input.inner) {
						const $scope3_id = _scope_id();
						const Inner = { content: _content_resume("a0", () => {
							const $scope4_id = _scope_id();
							_scope_reason();
							_html(`<b>${_text_mark($scope4_id, "a", input.label, $wg__input_label)}</b>`);
							$cg__input_label && _patch_render($scope4_id, "a1");
							_subscribe($wi__input_label && $input_label__closures, _scope($scope4_id, { _: _scope_with_id($scope3_id) }), $cg__input_label && "a1", $wg__input_label);
						}, $scope3_id) };
						_dynamic_tag($scope3_id, "a", input.tag, { content: Inner }, 0, 0, 0, $wg__input_tag);
						_subscribe($wi__input_tag && $input_tag__closures, _scope($scope3_id, {
							b: $wi__input_tag && Inner,
							_: _scope_with_id($scope2_id)
						}), _client_guard($scope0_reason, 3) && "a2", $wg__input_tag);
						return 0;
					}
				}, $scope2_id, "a", $wg__input_inner, $wg__input_inner);
				$cg__input_inner && _patch_render($scope2_id, "a3");
				_subscribe($wi__input_inner && $input_inner__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), $cg__input_inner && "a3", $wg__input_inner);
			}, $scope1_id) });
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a5"], $scope0_reason, 0);
	_scope($scope0_id, {
		e: input.inner,
		f: input.label,
		g: input.tag,
		i: $wi__input_label && $input_label__closures,
		j: $wi__input_tag && $input_tag__closures,
		h: $wi__input_inner && $input_inner__closures
	}) || (_filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.inner, !_server_guard($scope0_reason, 1)) && _patch_subscribers($scope0_id, "a6", "e"), _filled_guard($scope0_reason, 2) && _patch_write($scope0_id, "xf", input.label, !_server_guard($scope0_reason, 2)) && _patch_subscribers($scope0_id, "a7", "f"), _filled_guard($scope0_reason, 3) && _patch_write($scope0_id, "xg", input.tag, !_server_guard($scope0_reason, 3)) && _patch_subscribers($scope0_id, "a8", "g"));
}, 1);
