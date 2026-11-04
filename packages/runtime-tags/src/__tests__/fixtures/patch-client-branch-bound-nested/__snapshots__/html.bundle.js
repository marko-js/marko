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
	a0: "a0",
	a2: "a2",
	a7: "a7|3;b%b%;<!><!><!><!>",
	a10: `a10|2${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`,
	a: "a;b%;<!><!><!>",
	a11: `a11${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 4), $wg__input_tag = _write_guard($scope0_reason, 5), $cg__input_tag = _client_guard($scope0_reason, 5), $wi__input_show__OR__input_label__OR__input_tag = _write_if($scope0_reason, 2), $wi__input_tag = _write_if($scope0_reason, 5), $wi__input_label = _write_if($scope0_reason, 4), $wg__input_show = _write_guard($scope0_reason, 3), $ui__input_show = _unfilled_if($scope0_reason, 3), $ui__input_tag3 = _unfilled_if($scope0_reason, 5), $sg__input_label = _server_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_tag__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope2 = _peek_scope_id($scope1_id, "a", 3);
			card_default({ content: _content("a10", () => {
				_scope_reason();
				const $scope2_page = _page_render();
				const $scope2_id = _scope_id(), $ui__input_label = _unfilled_if($scope0_reason, 4), $ui__input_tag2 = _unfilled_if($scope0_reason, 5);
				const $card_content__outer__closures = /* @__PURE__ */ new Set();
				const outer = input.label + "!";
				const Inner = { content: _content_resume("a0", () => {
					const $scope5_id = _scope_id();
					_scope_reason();
					_html(`<b>${_text_mark($scope5_id, "a", outer, 1, $scope0_reason, 4)}</b>`);
					_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope5_id, "a1", $cg__input_label);
					_subscribe(_unfilled_if($scope0_reason, 4) && $card_content__outer__closures, _scope($scope5_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope2_id) }), $cg__input_label && "a1");
				}, $scope2_id, ($scope) => $scope2_page ? [{ b: outer }] : [], 1) };
				_set_scope_reason(0);
				const $childScope = _peek_scope_id($scope2_id, "a", 2);
				card_default({ content: _content("a7", () => {
					_scope_reason();
					const $scope3_page = _page_render();
					const $scope3_id = _scope_id(), $ui__input_tag = _unfilled_if($scope0_reason, 5);
					const Inner2 = { content: _content_resume("a2", () => {
						const $scope4_id = _scope_id();
						_scope_reason();
						_html(`<i>${_text_mark($scope4_id, "a", input.label, 1, $scope0_reason, 4)}</i>`);
						_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope4_id, "a3", $cg__input_label);
						_subscribe(_unfilled_if($scope0_reason, 4) && $input_label__closures, _scope($scope4_id, {
							_: $wi__input_show__OR__input_label__OR__input_tag && _scope_with_id($scope3_id),
							Cg: $wi__input_label && 1
						}), $cg__input_label && "a3");
					}, $scope3_id, ($scope2) => $scope3_page ? [
						{ e: input.label },
						{ _: $scope2($scope0_id) },
						{ _: $scope2($scope1_id) },
						{ _: $scope2($scope2_id) }
					] : [], 1) };
					_dynamic_tag($scope3_id, "a", input.tag, { content: Inner }, 1, 0, 0, $wg__input_tag, $scope0_reason, 5, 0, void 0, 0, 0, "a0");
					_dynamic_tag($scope3_id, "b", input.tag, { content: Inner2 }, 9, 0, 0, $wg__input_tag, $scope0_reason, 5);
					$ui__input_tag && _patch_write($scope3_id, "wd", Inner2, 1);
					!$cg__input_tag && _unfilled_if() && _patch_write($scope2_id, "wc", Inner);
					_unfilled_if($scope0_reason, 5) && _patch_subscribe($scope3_id, "a4");
					$cg__input_tag && _patch_render($scope3_id, "a5");
					$cg__input_tag && _patch_render($scope3_id, "a6");
					$wi__input_show__OR__input_label__OR__input_tag && _subscribe($ui__input_tag && $input_tag__closures, _scope($scope3_id, {
						d: $ui__input_tag && Inner2,
						_: _scope_with_id($scope2_id)
					}), $cg__input_tag && "a4", $wg__input_tag);
					$wg__input_tag || $wi__input_show__OR__input_label__OR__input_tag && _resume_branch($scope3_id);
				}, $scope2_id, 3) });
				_patch_child_end();
				$ui__input_tag2 && _patch_write($scope2_id, "wc", Inner, 1);
				$cg__input_label && _patch_render($scope2_id, "a8");
				_subscribe($ui__input_label && $input_label__closures, _scope($scope2_id, {
					b: $wi__input_tag && ($ui__input_tag2 || $ui__input_label) && outer,
					c: $ui__input_tag2 && Inner,
					_: $wi__input_show__OR__input_label__OR__input_tag && _scope_with_id($scope1_id),
					i: $wi__input_label && $card_content__outer__closures,
					a: _existing_scope($childScope)
				}), $cg__input_label && "a8", 0);
				_filled_guard($scope0_reason, 4) && (_client_branch_if("a0", $scope2_id) || $cg__input_tag || $ui__input_tag2) && _patch_write($scope2_id, "xb", outer, !$sg__input_label) && _patch_subscribers($scope2_id, "a9", "b");
				_resume_branch($scope2_id);
			}, $scope1_id, 2) });
			_patch_child_end();
			_scope($scope1_id, {
				_: $wi__input_show__OR__input_label__OR__input_tag && _scope_with_id($scope0_id),
				a: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a11"], $scope0_reason, 3);
	_scope($scope0_id, {
		e: _write_if($scope0_reason, 0) && (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 4)) && input.label,
		f: _write_if($scope0_reason, 3) && ($ui__input_show || $ui__input_tag3) && input.tag,
		g: $wi__input_label && $input_label__closures,
		h: $wi__input_tag && $wi__input_tag && ($ui__input_tag3 || $ui__input_show) && $input_tag__closures
	}) || (_filled_guard($scope0_reason, 4) && _patch_write($scope0_id, "xe", input.label, !$sg__input_label) && _patch_subscribers($scope0_id, "a12", "e"), _filled_guard($scope0_reason, 5) && _patch_write($scope0_id, "xf", input.tag, !_server_guard($scope0_reason, 5)) && _client_guard($scope0_reason, 3) && _patch_subscribers($scope0_id, "a13", "f"));
}, 1);
