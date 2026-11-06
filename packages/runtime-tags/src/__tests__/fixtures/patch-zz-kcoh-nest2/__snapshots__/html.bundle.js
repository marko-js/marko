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
	a6: "a6 !a7",
	a0: "a0 !a1",
	a13: "a13|5;b%b%;<!><!><!><!>",
	a3: "a3 !a4",
	a19: `a19|3${_shell_marker([[], []], ["c>", $setup])};${/*@__PURE__*/ ((_w0) => `b%b%b/${_w0}&`)($walks)};${/*@__PURE__*/ ((_w0) => `<!><!><!>${_w0}`)($template)}`,
	a22: `a22|2${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`,
	a: "a;b%;<!><!><!>",
	a23: `a23${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 1), $sg__input_label = _server_guard($scope0_reason, 1), $cg__input_label = _client_guard($scope0_reason, 1), $wg__input_tag = _write_guard($scope0_reason, 2), $cg__input_tag = _client_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 0), $fg__input_label = _filled_guard($scope0_reason, 1), $fg__input_tag = _filled_guard($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 0), $wi__input_tag = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_tag__closures = /* @__PURE__ */ new Set();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope3 = _peek_scope_id($scope1_id, "a", 6);
			card_default({ content: _content("a22", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				const $card_content__outer__closures = /* @__PURE__ */ new Set();
				const outer = input.label + "!";
				_filled_guard($scope0_reason, 1) && _patch_write($scope2_id, "xb", outer, !$sg__input_label);
				const A = { content: _content_resume("a0", () => {
					const $scope6_id = _scope_id();
					_scope_reason();
					_html(`<b>${_text_mark($scope6_id, "b", outer, 1, $scope0_reason, 1)}</b>${_el_mark($scope6_id, "a")}`);
					_script($scope6_id, "a1");
					_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope6_id, "a2", $cg__input_label);
					_subscribe($wi__input_label && $card_content__outer__closures, _scope($scope6_id, {
						_: _scope_with_id($scope2_id),
						Ci: $wi__input_label && 1
					}));
				}, $scope2_id) };
				_set_scope_reason(0);
				const $childScope2 = _peek_scope_id($scope2_id, "a", 5);
				card_default({ content: _content("a19", () => {
					_scope_reason();
					const $scope3_id = _scope_id();
					const $card_content2__inner__closures = /* @__PURE__ */ new Set();
					const inner = outer + "?";
					_filled_guard($scope0_reason, 1) && _patch_write($scope3_id, "xe", inner, !$sg__input_label);
					const B = { content: _content_resume("a3", () => {
						const $scope4_id = _scope_id();
						_scope_reason();
						_html(`<i>${_text_mark($scope4_id, "b", inner, 1, $scope0_reason, 1)}</i>${_el_mark($scope4_id, "a")}`);
						_script($scope4_id, "a4");
						_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope4_id, "a5", $cg__input_label);
						_subscribe($wi__input_label && $card_content2__inner__closures, _scope($scope4_id, { _: _scope_with_id($scope3_id) }));
					}, $scope3_id) };
					_dynamic_tag($scope3_id, "a", input.tag, { content: A }, 1, 0, 0, $wg__input_tag, $scope0_reason, 2);
					_dynamic_tag($scope3_id, "b", input.tag, { content: B }, 9, 0, 0, $wg__input_tag, $scope0_reason, 2);
					_set_scope_reason(0);
					const $childScope = _peek_scope_id($scope3_id, "c", 4);
					card_default({ content: _content("a13", () => {
						_scope_reason();
						const $scope5_id = _scope_id();
						const C = { content: _content_resume("a6", () => {
							const $scope7_id = _scope_id();
							_scope_reason();
							_html(`<u>${_text_mark($scope7_id, "b", inner, 1, $scope0_reason, 1)}${_text_mark($scope7_id, "c", outer, 2, $scope0_reason, 1)}</u>${_el_mark($scope7_id, "a")}`);
							_script($scope7_id, "a7");
							_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope7_id, "a8", $cg__input_label);
							_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope7_id, "a9", $cg__input_label);
							_subscribe($wi__input_label && $card_content2__inner__closures, _subscribe($wi__input_label && $card_content__outer__closures, _scope($scope7_id, {
								_: _scope_with_id($scope5_id),
								Ci: $wi__input_label && 2,
								Ck: $wi__input_label && 1
							})));
						}, $scope5_id) };
						_dynamic_tag($scope5_id, "a", input.tag, { content: C }, 17, 0, 0, $wg__input_tag, $scope0_reason, 2);
						_dynamic_tag($scope5_id, "b", input.tag, { content: A }, 25, 0, 0, $wg__input_tag, $scope0_reason, 2);
						$cg__input_tag && _patch_write($scope5_id, "wd", C, 1);
						_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope5_id, "a10");
						$cg__input_tag && _patch_render($scope5_id, "a11");
						$cg__input_tag && _patch_render($scope5_id, "a12");
						_subscribe(_unfilled_if($scope0_reason, 2) && $input_tag__closures, _scope($scope5_id, {
							d: _unfilled_if($scope0_reason, 2) && C,
							_: _scope_with_id($scope3_id),
							Ch: $wi__input_tag && 1
						}));
						$wg__input_tag || _resume_branch($scope5_id);
					}, $scope3_id, 5) });
					_patch_child_end();
					$cg__input_tag && _patch_write($scope3_id, "wf", B, 1);
					_filled_guard($scope0_reason, 1) && _patch_subscribers($scope3_id, "a14", "e");
					_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope3_id, "a15");
					$cg__input_label && _patch_render($scope3_id, "a16");
					$cg__input_tag && _patch_render($scope3_id, "a17");
					$cg__input_tag && _patch_render($scope3_id, "a18");
					_subscribe($wi__input_label && $card_content__outer__closures, _subscribe(_unfilled_if($scope0_reason, 2) && $input_tag__closures, _scope($scope3_id, {
						e: inner,
						f: _unfilled_if($scope0_reason, 2) && B,
						_: _scope_with_id($scope2_id),
						k: $wi__input_label && $card_content2__inner__closures,
						c: _existing_scope($childScope)
					})));
					$wg__input_tag || _resume_branch($scope3_id);
				}, $scope2_id, 3) });
				_patch_child_end();
				$cg__input_tag && _patch_write($scope2_id, "wc", A, 1);
				_filled_guard($scope0_reason, 1) && _patch_subscribers($scope2_id, "a20", "b");
				$cg__input_label && _patch_render($scope2_id, "a21");
				_subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, {
					b: outer,
					c: _unfilled_if($scope0_reason, 2) && A,
					_: _scope_with_id($scope1_id),
					i: $wi__input_label && $card_content__outer__closures,
					a: _existing_scope($childScope2)
				}));
				_write_guard($scope0_reason, 1) && _resume_branch($scope2_id);
			}, $scope1_id, 2) });
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope3)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a23"], $scope0_reason, 0);
	$fg__input_label && $cg__input_show && _patch_subscribers($scope0_id, "a24", "e");
	$fg__input_tag && $cg__input_show && _patch_subscribers($scope0_id, "a25", "f");
	_scope($scope0_id, {
		e: input.label,
		f: _unfilled_if($scope0_reason, 0) && input.tag,
		h: $wi__input_tag && (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && $input_tag__closures,
		g: $wi__input_label && $input_label__closures
	}) || ($fg__input_label && _patch_write($scope0_id, "xe", input.label, !$sg__input_label), $fg__input_tag && _patch_write($scope0_id, "xf", input.tag, !_server_guard($scope0_reason, 2)));
}, 1);
