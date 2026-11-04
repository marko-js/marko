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
	a0: "a0 !a1",
	a7: "a7;b%;<!><!><!>",
	a8: "a8;b%;<!><!><!>",
	a9: "a9|2;b%;<!><!><!>",
	a: "a;b%;<!><!><!>",
	a10: `a10${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 5), $cg__input_p = _client_guard($scope0_reason, 4), $wg__input_tag = _write_guard($scope0_reason, 6), $cg__input_tag = _client_guard($scope0_reason, 6), $wi__input_show__OR__input_p__OR__input_label__OR__input_tag = _write_if($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 3), $ui__input_show = _unfilled_if($scope0_reason, 3), $ui__input_tag2 = _unfilled_if($scope0_reason, 6), $wi__input_show = _write_if($scope0_reason, 3), $sg__input_p = _server_guard($scope0_reason, 4), $cg__input_show = _client_guard($scope0_reason, 3), $wi__input_tag = _write_if($scope0_reason, 6), $wi__input_p = _write_if($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_tag__closures = /* @__PURE__ */ new Set();
	const $input_p__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope1_id, "a", 1);
			card_default({ content: _content("a9", () => {
				_scope_reason();
				const $scope2_page = _page_render();
				const $scope2_id = _scope_id(), $ui__input_p = _unfilled_if($scope0_reason, 4);
				_await($scope2_id, "a", input.p, (v) => {
					const $scope3_id = _scope_id(), $ui__input_tag = _unfilled_if($scope0_reason, 6);
					const $await_content__v__closures = /* @__PURE__ */ new Set();
					_filled_guard($scope0_reason, 4) && _patch_write($scope3_id, "xc", v, !$sg__input_p) && _patch_subscribers($scope3_id, "a4", "c");
					const Inner = { content: _content_resume("a0", () => {
						const $scope4_id = _scope_id();
						_scope_reason();
						_html(`<b>${_text_mark($scope4_id, "b", v, 1, $scope0_reason, 4)}${_text_mark($scope4_id, "c", input.label, 2, $scope0_reason, 5)}</b>${_el_mark($scope4_id, "a")}`);
						_script($scope4_id, "a1");
						_unfilled_if($scope0_reason, 5) && _patch_subscribe($scope4_id, "a2", $cg__input_label);
						_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope4_id, "a3", $cg__input_p);
						_subscribe(_unfilled_if($scope0_reason, 4) && $await_content__v__closures, _subscribe(_unfilled_if($scope0_reason, 5) && $input_label__closures, _scope($scope4_id, { _: _scope_with_id($scope3_id) }), $cg__input_label && "a2"), $cg__input_p && "a3");
					}, $scope3_id, ($scope) => $scope2_page ? [
						{ f: input.label },
						{ _: $scope($scope0_id) },
						{ _: $scope($scope1_id) },
						{ _: $scope($scope2_id) }
					] : [], 1) };
					_dynamic_tag($scope3_id, "a", input.tag, { content: Inner }, 1, 0, 0, $wg__input_tag, $scope0_reason, 6);
					$ui__input_tag && _patch_write($scope3_id, "wd", Inner, 1);
					_unfilled_if($scope0_reason, 6) && _patch_subscribe($scope3_id, "a5");
					$cg__input_tag && _patch_render($scope3_id, "a6");
					_subscribe($ui__input_tag && $input_tag__closures, _scope($scope3_id, {
						c: v,
						d: $ui__input_tag && Inner,
						k: $wi__input_p && $await_content__v__closures
					}), $cg__input_tag && "a5", $wg__input_tag);
					$wg__input_tag || _resume_branch($scope3_id);
				}, 1, "a7", $ui__input_p, 0, 1);
				$cg__input_p && _patch_render($scope2_id, "a11");
				$wi__input_show__OR__input_p__OR__input_label__OR__input_tag && _subscribe($ui__input_p && $input_p__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), $cg__input_p && "a11", 0);
				$wi__input_show__OR__input_p__OR__input_label__OR__input_tag && _resume_branch($scope2_id);
			}, $scope1_id, 2) });
			_patch_child_end();
			_scope($scope1_id, {
				_: $wi__input_show__OR__input_p__OR__input_label__OR__input_tag && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a10"], $scope0_reason, 3);
	_scope($scope0_id, {
		e: $wi__input_show && input.p,
		f: _write_if($scope0_reason, 0) && (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 5)) && input.label,
		g: $wi__input_show && ($ui__input_show || $ui__input_tag2) && input.tag,
		i: _write_if($scope0_reason, 5) && $input_label__closures,
		j: $wi__input_tag && $wi__input_tag && ($ui__input_tag2 || $ui__input_show) && $input_tag__closures,
		h: $wi__input_p && $input_p__closures
	}) || (_filled_guard($scope0_reason, 4) && _patch_write($scope0_id, "xe", input.p, !$sg__input_p) && $cg__input_show && _patch_subscribers($scope0_id, "a12", "e"), _filled_guard($scope0_reason, 5) && _patch_write($scope0_id, "xf", input.label, !_server_guard($scope0_reason, 5)) && _patch_subscribers($scope0_id, "a13", "f"), _filled_guard($scope0_reason, 6) && _patch_write($scope0_id, "xg", input.tag, !_server_guard($scope0_reason, 6)) && $cg__input_show && _patch_subscribers($scope0_id, "a14", "g"));
}, 1);
