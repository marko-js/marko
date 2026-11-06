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
	a3: "a3 !a4",
	a0: "a0 !a1",
	a10: "a10|5;b%b%;<!><!><!><!>",
	a15: `a15|3${_shell_marker([[], []], ["b>", $setup])};${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&`)($walks)};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}`)($template)}`,
	a18: `a18|2${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`,
	a: "a;b%;<!><!><!>",
	a19: `a19${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 2), $sg__input_label = _server_guard($scope0_reason, 2), $cg__input_label = _client_guard($scope0_reason, 2), $wg__input_tag = _write_guard($scope0_reason, 3), $cg__input_tag = _client_guard($scope0_reason, 3), $wi__input_show__OR__input_label__OR__input_tag = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 2), $fg__input_tag = _filled_guard($scope0_reason, 3), $cg__input_show = _client_guard($scope0_reason, 1), $wi__input_tag = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_tag__closures = /* @__PURE__ */ new Set();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope3 = _peek_scope_id($scope1_id, "a", 5);
			card_default({ content: _content("a18", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				const $card_content__outer__closures = /* @__PURE__ */ new Set();
				const outer = input.label + "!";
				_filled_guard($scope0_reason, 2) && _patch_write($scope2_id, "xb", outer, !$sg__input_label);
				const A = { content: _content_resume("a0", () => {
					const $scope6_id = _scope_id();
					_scope_reason();
					_html(`<b>${_text_mark($scope6_id, "b", outer, 1, $scope0_reason, 2)}</b>${_el_mark($scope6_id, "a")}`);
					_script($scope6_id, "a1");
					_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope6_id, "a2", $cg__input_label);
					_subscribe($wi__input_label && $card_content__outer__closures, _scope($scope6_id, {
						_: _scope_with_id($scope2_id),
						Ci: $wi__input_label && 1
					}));
				}, $scope2_id) };
				_set_scope_reason(0);
				const $childScope2 = _peek_scope_id($scope2_id, "a", 4);
				card_default({ content: _content("a15", () => {
					_scope_reason();
					const $scope3_id = _scope_id();
					const $card_content2__inner__closures = /* @__PURE__ */ new Set();
					const inner = outer + "?";
					_filled_guard($scope0_reason, 2) && _patch_write($scope3_id, "xd", inner, !$sg__input_label);
					_dynamic_tag($scope3_id, "a", input.tag, { content: A }, 1, 0, 0, $wg__input_tag, $scope0_reason, 3);
					_set_scope_reason(0);
					const $childScope = _peek_scope_id($scope3_id, "b", 3);
					card_default({ content: _content("a10", () => {
						_scope_reason();
						const $scope5_id = _scope_id();
						const C = { content: _content_resume("a3", () => {
							const $scope7_id = _scope_id();
							_scope_reason();
							_html(`<u>${_text_mark($scope7_id, "b", inner, 1, $scope0_reason, 2)}${_text_mark($scope7_id, "c", outer, 2, $scope0_reason, 2)}</u>${_el_mark($scope7_id, "a")}`);
							_script($scope7_id, "a4");
							_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope7_id, "a5", $cg__input_label);
							_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope7_id, "a6", $cg__input_label);
							_subscribe($wi__input_label && $card_content2__inner__closures, _subscribe($wi__input_label && $card_content__outer__closures, _scope($scope7_id, {
								_: _scope_with_id($scope5_id),
								Ci: $wi__input_label && 2
							})));
						}, $scope5_id) };
						_dynamic_tag($scope5_id, "a", input.tag, { content: C }, 9, 0, 0, $wg__input_tag, $scope0_reason, 3);
						_dynamic_tag($scope5_id, "b", input.tag, { content: A }, 17, 0, 0, $wg__input_tag, $scope0_reason, 3);
						$cg__input_tag && _patch_write($scope5_id, "wd", C, 1);
						_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope5_id, "a7");
						$cg__input_tag && _patch_render($scope5_id, "a8");
						$cg__input_tag && _patch_render($scope5_id, "a9");
						_subscribe(_unfilled_if($scope0_reason, 3) && $input_tag__closures, _scope($scope5_id, {
							d: _unfilled_if($scope0_reason, 3) && C,
							_: _scope_with_id($scope3_id),
							Ch: $wi__input_tag && 1
						}));
						$wg__input_tag || _resume_branch($scope5_id);
					}, $scope3_id, 5) });
					_patch_child_end();
					_filled_guard($scope0_reason, 2) && _patch_subscribers($scope3_id, "a11", "d");
					_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope3_id, "a12");
					$cg__input_label && _patch_render($scope3_id, "a13");
					$cg__input_tag && _patch_render($scope3_id, "a14");
					_subscribe($wi__input_label && $card_content__outer__closures, _subscribe(_unfilled_if($scope0_reason, 3) && $input_tag__closures, _scope($scope3_id, {
						d: inner,
						_: _scope_with_id($scope2_id),
						k: $wi__input_label && $card_content2__inner__closures,
						b: _existing_scope($childScope)
					})));
					$wg__input_tag || _resume_branch($scope3_id);
				}, $scope2_id, 3) });
				_patch_child_end();
				$cg__input_tag && _patch_write($scope2_id, "wc", A, 1);
				_filled_guard($scope0_reason, 2) && _patch_subscribers($scope2_id, "a16", "b");
				$cg__input_label && _patch_render($scope2_id, "a17");
				_subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, {
					b: outer,
					c: _unfilled_if($scope0_reason, 3) && A,
					_: $wi__input_show__OR__input_label__OR__input_tag && _scope_with_id($scope1_id),
					i: $wi__input_label && $card_content__outer__closures,
					a: _existing_scope($childScope2)
				}));
				_write_guard($scope0_reason, 2) && _resume_branch($scope2_id);
			}, $scope1_id, 2) });
			_patch_child_end();
			_scope($scope1_id, {
				_: $wi__input_show__OR__input_label__OR__input_tag && _scope_with_id($scope0_id),
				a: _existing_scope($childScope3)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a19"], $scope0_reason, 1);
	$fg__input_label && $cg__input_show && _patch_subscribers($scope0_id, "a20", "e");
	$fg__input_tag && $cg__input_show && _patch_subscribers($scope0_id, "a21", "f");
	_scope($scope0_id, {
		e: _write_if($scope0_reason, 1) && input.label,
		f: _unfilled_if($scope0_reason, 1) && input.tag,
		h: $wi__input_tag && (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 1)) && $input_tag__closures,
		g: $wi__input_label && $input_label__closures
	}) || ($fg__input_label && _patch_write($scope0_id, "xe", input.label, !$sg__input_label), $fg__input_tag && _patch_write($scope0_id, "xf", input.tag, !_server_guard($scope0_reason, 3)));
}, 1);
