// tags/card.marko
const $template = "<section><button>clear</button><!><!></section>";
const $walks = "D b%b%l";
const $setup = [[], ["b0"]];
_shells({ b: "b !b0;D b%b%;<section><button>clear</button><!><!></section>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_content = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<section><button>clear</button>${_el_mark($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", c, {}, 2, 0, 0, 1, $cg__input_content << 1, 0, 1);
	_dynamic_tag($scope0_id, "c", c, {}, 10, 0, 0, 1, $cg__input_content << 1, 0, 1);
	_html("</section>");
	_script($scope0_id, "b0");
	_scope($scope0_id, {}) || _client_branch(input.content);
});

// template.marko
const $Tree_content__walks = /*@__PURE__*/ ((_w0) => `/${_w0}&%c`)($walks);
const $Tree_content__template = /*@__PURE__*/ ((_w0) => `${_w0}<!><!>`)($template);
_shells({
	a4: "a4 !a8",
	a: "a;b%;<!><!><!>",
	a5: `a5${_shell_marker([[], []], ["a>", _shell_setup([[], []], ["a>", $setup])])};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Tree_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Tree_content__template)}`,
	a3: `a3${_shell_marker([[], []], ["a>", _shell_setup([[], []], ["a>", $setup])])};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Tree_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Tree_content__template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1), $wi__input_show = _write_if($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 2), $fg__input_tag = _filled_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const Tree = { content: _content("a11", ({ n, label, tag }) => {
		const $scope2_id = _scope_id();
		const $Tree_content__n__closures = /* @__PURE__ */ new Set();
		const $Tree_content__label__closures = /* @__PURE__ */ new Set();
		const $Tree_content__tag__closures = /* @__PURE__ */ new Set();
		const $scope2_reason = _scope_reason(), $cg__label = _client_guard($scope2_reason, 1), $cg__tag = _client_guard($scope2_reason, 2), $wg__n = _write_guard($scope2_reason, 0), $cg__n = _client_guard($scope2_reason, 0), $wi__n = _write_if($scope2_reason, 0), $wi__label = _write_if($scope2_reason, 1), $wg__tag = _write_guard($scope2_reason, 2), $fg__n = _filled_guard($scope2_reason, 0), $fg__label = _filled_guard($scope2_reason, 1), $fg__tag = _filled_guard($scope2_reason, 2), $wi__tag = _write_if($scope2_reason, 2);
		_set_scope_reason(0);
		const $childScope2 = _peek_scope_id($scope2_id, "a", 1);
		card_default({ content: _content_resume("a7", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_if(() => {
				if (n) {
					const $scope4_id = _scope_id();
					_set_scope_reason(_updates_from($scope2_reason, 0) << 1 | _updates_from($scope2_reason, 1) << 3 | _updates_from($scope2_reason, 2) << 5);
					const $childScope = _peek_scope_id($scope4_id, "a", 0);
					Tree.content({
						n: n - 1,
						label,
						tag
					});
					_patch_child_end();
					_unfilled_if($scope2_reason, 0) && _patch_subscribe($scope4_id, "a0");
					_unfilled_if($scope2_reason, 1) && _patch_subscribe($scope4_id, "a1", $cg__label);
					_unfilled_if($scope2_reason, 2) && _patch_subscribe($scope4_id, "a2", $cg__tag);
					_subscribe($wi__tag && $Tree_content__tag__closures, _subscribe($wi__label && $Tree_content__label__closures, _subscribe(_unfilled_if($scope2_reason, 0) && $Tree_content__n__closures, _scope($scope4_id, {
						_: _scope_with_id($scope3_id),
						a: _existing_scope($childScope),
						Cj: $wi__n && 1
					}), $cg__n && "a0", 0), $cg__label && "a1", 0), $cg__tag && "a2", 0);
					_resume_branch($scope4_id);
					return 0;
				}
			}, $scope3_id, "a", 1, $wg__n, 1, 0, 0, ["a3"], $scope2_reason, 0);
			_subscribe(_unfilled_if($scope2_reason, 0) && $Tree_content__n__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }), $cg__n && "a6", $wg__n);
			$wg__n || _resume_branch($scope3_id);
		}, $scope2_id) });
		_patch_child_end();
		const Inner = { content: _content_resume("a4", () => {
			const $scope5_id = _scope_id();
			_scope_reason();
			_html(`<b>${_text_mark($scope5_id, "b", n, 1, $scope2_reason, 0)}${_text_mark($scope5_id, "c", label, 2, $scope2_reason, 1)}</b>${_el_mark($scope5_id, "a")}`);
			_script($scope5_id, "a8");
			_unfilled_if($scope2_reason, 0) && _patch_subscribe($scope5_id, "a9");
			_unfilled_if($scope2_reason, 1) && _patch_subscribe($scope5_id, "a10", $cg__label);
			_subscribe($wi__label && $Tree_content__label__closures, _subscribe($wi__n && $Tree_content__n__closures, _scope($scope5_id, {
				_: _scope_with_id($scope2_id),
				Cj: $wi__n && 2,
				Ck: $wi__label && 1
			})));
		}, $scope2_id) };
		_dynamic_tag($scope2_id, "b", tag, { content: Inner }, 17, 0, 0, $wg__tag, $scope2_reason, 2);
		_unfilled_if($scope2_reason, 2) && _patch_write($scope2_id, "wh", Inner, 1);
		$fg__n && _patch_subscribers($scope2_id, "a12", "e");
		$fg__label && _patch_subscribers($scope2_id, "a13", "f");
		$fg__tag && _patch_subscribers($scope2_id, "a14", "g");
		$cg__tag && _patch_render($scope2_id, "a15");
		_scope($scope2_id, {
			e: n,
			f: label,
			g: tag,
			h: _unfilled_if($scope2_reason, 2) && Inner,
			j: $wi__n && $Tree_content__n__closures,
			k: $wi__label && $Tree_content__label__closures,
			l: $wi__tag && $Tree_content__tag__closures,
			a: _existing_scope($childScope2)
		}) || ($fg__n && _patch_write($scope2_id, "xe", n, !_server_guard($scope2_reason, 0)), $fg__label && _patch_write($scope2_id, "xf", label, !_server_guard($scope2_reason, 1)), $fg__tag && _patch_write($scope2_id, "xg", tag, !_server_guard($scope2_reason, 2)));
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 2) << 3 | _updates_from($scope0_reason, 3) << 5);
			const $childScope3 = _peek_scope_id($scope1_id, "a", 3);
			Tree.content({
				n: 1,
				label: input.label,
				tag: input.tag
			});
			_patch_child_end();
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "a16");
			_client_guard($scope0_reason, 3) && _patch_render($scope1_id, "a17");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope3)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a5"], $scope0_reason, 1);
	$fg__input_label && $cg__input_show && _patch_render($scope0_id, "a16", "e");
	$fg__input_tag && $cg__input_show && _patch_render($scope0_id, "a17", "f");
	_scope($scope0_id, {
		e: $wi__input_show && input.label,
		f: $wi__input_show && input.tag
	}) || ($fg__input_label && $cg__input_show && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 2)), $fg__input_tag && $cg__input_show && _patch_write($scope0_id, "xf", input.tag, !_server_guard($scope0_reason, 3)));
}, 1);
