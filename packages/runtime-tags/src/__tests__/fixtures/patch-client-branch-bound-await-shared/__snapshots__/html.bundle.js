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
	_scope($scope0_id, {}) || _client_branch(input.content);
});

// template.marko
_shells({
	a5: "a5;b%b%;<!><!><!>",
	a0: "a0 !a1",
	a6: "a6;b%b%;<!><!><!>",
	a7: "a7|2;b%b%;<!><!><!><!>",
	a: "a;b%;<!><!><!>",
	a8: `a8${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 2), $wg__input_tag = _write_guard($scope0_reason, 3), $cg__input_tag = _client_guard($scope0_reason, 3), $wi__input_tag = _write_if($scope0_reason, 3), $ui__input_show = _unfilled_if($scope0_reason, 1), $cg__input_p = _client_guard($scope0_reason, 4), $wg__input_show = _write_guard($scope0_reason, 1), $ui__input_tag2 = _unfilled_if($scope0_reason, 3), $ui__input_p2 = _unfilled_if($scope0_reason, 4), $wi__input_show = _write_if($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 1), $wi__input_p = _write_if($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_tag__closures = /* @__PURE__ */ new Set();
	const $input_p__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope1_id, "a", 2);
			card_default({ content: _content("a7", () => {
				_scope_reason();
				const $scope2_id = _scope_id(), $ui__input_p = _unfilled_if($scope0_reason, 4), $ui__input_tag = _unfilled_if($scope0_reason, 3);
				const Inner = { content: _content_resume("a0", () => {
					const $scope3_id = _scope_id();
					_scope_reason();
					_html(`<b>${_text_mark($scope3_id, "b", input.label, 1, $scope0_reason, 2)}</b>${_el_mark($scope3_id, "a")}`);
					_script($scope3_id, "a1");
					_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope3_id, "a2", $cg__input_label);
					_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }), $cg__input_label && "a2");
				}, $scope2_id, void 0, 1) };
				_dynamic_tag($scope2_id, "a", input.tag, { content: Inner }, 1, 0, 0, $wg__input_tag, $scope0_reason, 3);
				_await($scope2_id, "b", input.p, (v) => {
					const $scope4_id = _scope_id();
					_dynamic_tag($scope4_id, "a", input.tag, { content: Inner }, 9, 0, 0, $wg__input_tag, $scope0_reason, 3);
					_html(_text_mark($scope4_id, "b", v, 2, $scope0_reason, 4));
					!$cg__input_tag && _unfilled_if() && _patch_write($scope2_id, "wc", Inner);
					_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope4_id, "a3");
					$cg__input_tag && _patch_render($scope4_id, "a4");
					_subscribe(_unfilled_if($scope0_reason, 3) && $input_tag__closures, _scope($scope4_id, { Ci: $wi__input_tag && 1 }), $cg__input_tag && "a3");
				}, 1, "a5", $ui__input_p, 0, 1);
				$ui__input_tag && _patch_write($scope2_id, "wc", Inner, 1);
				_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope2_id, "a9");
				$cg__input_p && _patch_render($scope2_id, "a10");
				$cg__input_tag && _patch_render($scope2_id, "a11");
				_subscribe($ui__input_p && $input_p__closures, _subscribe($ui__input_tag && $input_tag__closures, _scope($scope2_id, {
					c: $ui__input_tag && Inner,
					_: _scope_with_id($scope1_id)
				}), $cg__input_tag && "a9", $wg__input_tag), $cg__input_p && "a10", $wg__input_tag);
				$wg__input_tag || _resume_branch($scope2_id);
			}, $scope1_id, 2) });
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a8"], $scope0_reason, 1);
	_scope($scope0_id, {
		e: input.label,
		f: $wi__input_show && ($ui__input_show || $ui__input_tag2) && input.tag,
		g: $wi__input_show && ($ui__input_show || $ui__input_p2) && input.p,
		h: _write_if($scope0_reason, 2) && $input_label__closures,
		i: $wi__input_tag && $wi__input_tag && ($ui__input_tag2 || $ui__input_show) && $input_tag__closures,
		j: $wi__input_p && $wi__input_p && ($ui__input_p2 || $ui__input_show) && $input_p__closures
	}) || (_filled_guard($scope0_reason, 2) && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 2)) && _patch_subscribers($scope0_id, "a12", "e"), _filled_guard($scope0_reason, 3) && _patch_write($scope0_id, "xf", input.tag, !_server_guard($scope0_reason, 3)) && $cg__input_show && _patch_subscribers($scope0_id, "a13", "f"), _filled_guard($scope0_reason, 4) && _patch_write($scope0_id, "xg", input.p, !_server_guard($scope0_reason, 4)) && $cg__input_show && _patch_subscribers($scope0_id, "a14", "g"));
}, 1);
