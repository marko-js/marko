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
	a4: "a4|5;b%;<!><!><!>",
	a7: `a7|4${_shell_marker([[], []], ["b>", $setup])};${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&`)($walks)};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}`)($template)}`,
	a0: "a0",
	a8: `a8|2${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`,
	a: "a;b%;<!><!><!>",
	a9: `a9${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_tag = _write_guard($scope0_reason, 4), $wi__input_show__OR__input_tag = _write_if($scope0_reason, 0), $cg__input_tag = _client_guard($scope0_reason, 4), $wi__input_show__OR__input_label__OR__input_tag = _write_if($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 2), $fg__input_label = _filled_guard($scope0_reason, 3), $fg__input_tag = _filled_guard($scope0_reason, 4), $wi__input_tag = _write_if($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_tag__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope3 = _peek_scope_id($scope1_id, "a", 4);
			card_default({ content: _content("a8", () => {
				_scope_reason();
				const $scope2_page = _page_render();
				const $scope2_id = _scope_id();
				const A = { content: _content_resume("a0", () => {
					const $scope3_id = _scope_id();
					_scope_reason();
					_html(`<b>${_text_mark($scope3_id, "a", input.label, 1, $scope0_reason, 3)}</b>`);
					_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope3_id, "a1", _client_guard($scope0_reason, 3));
					_subscribe(_unfilled_if($scope0_reason, 3) && $input_label__closures, _scope($scope3_id, { _: $wi__input_show__OR__input_label__OR__input_tag && _scope_with_id($scope2_id) }));
				}, $scope2_id, ($scope) => $scope2_page ? [
					{ e: input.label },
					{ _: $scope($scope0_id) },
					{ _: $scope($scope1_id) }
				] : []) };
				_set_scope_reason(0);
				const $childScope2 = _peek_scope_id($scope2_id, "a", 3);
				card_default({ content: _content("a7", () => {
					_scope_reason();
					const $scope4_id = _scope_id();
					_dynamic_tag($scope4_id, "a", input.tag, { content: A }, 1, 0, 0, $wg__input_tag, $scope0_reason, 4);
					_set_scope_reason(0);
					const $childScope = _peek_scope_id($scope4_id, "b", 2);
					card_default({ content: _content("a4", () => {
						_scope_reason();
						const $scope5_id = _scope_id();
						_dynamic_tag($scope5_id, "a", input.tag, { content: A }, 9, 0, 0, $wg__input_tag, $scope0_reason, 4);
						_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope5_id, "a2");
						$cg__input_tag && _patch_render($scope5_id, "a3");
						$wi__input_show__OR__input_tag && _subscribe(_unfilled_if($scope0_reason, 4) && $input_tag__closures, _scope($scope5_id, {
							_: _scope_with_id($scope4_id),
							Ch: $wi__input_tag && 1
						}));
						$wg__input_tag || $wi__input_show__OR__input_tag && _resume_branch($scope5_id);
					}, $scope4_id, 5) });
					_patch_child_end();
					_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope4_id, "a5");
					$cg__input_tag && _patch_render($scope4_id, "a6");
					_subscribe(_unfilled_if($scope0_reason, 4) && $input_tag__closures, _scope($scope4_id, {
						_: $wi__input_show__OR__input_tag && _scope_with_id($scope2_id),
						b: _existing_scope($childScope)
					}));
					$wg__input_tag || _resume_branch($scope4_id);
				}, $scope2_id, 4) });
				_patch_child_end();
				$cg__input_tag && _patch_write($scope2_id, "wb", A, 1);
				_scope($scope2_id, {
					b: _unfilled_if($scope0_reason, 4) && A,
					_: $wi__input_show__OR__input_label__OR__input_tag && _scope_with_id($scope1_id),
					a: _existing_scope($childScope2)
				});
			}, $scope1_id, 2) });
			_patch_child_end();
			_scope($scope1_id, {
				_: $wi__input_show__OR__input_label__OR__input_tag && _scope_with_id($scope0_id),
				a: _existing_scope($childScope3)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a9"], $scope0_reason, 2);
	$fg__input_label && _patch_subscribers($scope0_id, "a10", "e");
	$fg__input_tag && _client_guard($scope0_reason, 2) && _patch_subscribers($scope0_id, "a11", "f");
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 3)) && input.label,
		f: _unfilled_if($scope0_reason, 2) && input.tag,
		g: _write_if($scope0_reason, 3) && $input_label__closures,
		h: $wi__input_tag && (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 2)) && $input_tag__closures
	}) || ($fg__input_label && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 3)), $fg__input_tag && _patch_write($scope0_id, "xf", input.tag, !_server_guard($scope0_reason, 4)));
}, 1);
