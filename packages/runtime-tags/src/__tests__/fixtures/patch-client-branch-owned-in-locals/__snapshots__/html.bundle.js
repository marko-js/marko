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
	a3: "a3",
	a8: "a8",
	a: "a;b%;<!><!><!>",
	a9: `a9${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_tag = _write_guard($scope0_reason, 2), $cg__input_tag = _client_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 0), $fg__input_label = _filled_guard($scope0_reason, 1), $fg__input_tag = _filled_guard($scope0_reason, 2), $wi__input_label = _write_if($scope0_reason, 1), $wi__input_tag = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_tag__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope1_id, "a", 2);
			card_default({ content: _content_resume("a8", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				const Outer = { content: _content_resume("a3", () => {
					const $scope3_id = _scope_id();
					_scope_reason();
					const Inn = { content: _content_resume("a0", () => {
						const $scope4_id = _scope_id();
						_scope_reason();
						_html(`<b>${_text_mark($scope4_id, "b", input.label, 1, $scope0_reason, 1)}</b>${_el_mark($scope4_id, "a")}`);
						_script($scope4_id, "a1");
						_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope4_id, "a2", _client_guard($scope0_reason, 1));
						_subscribe($wi__input_label && $input_label__closures, _scope($scope4_id, { _: _scope_with_id($scope3_id) }));
					}, $scope3_id) };
					_dynamic_tag($scope3_id, "a", input.tag, { content: Inn }, 1, 0, 0, $wg__input_tag, $scope0_reason, 2);
					$cg__input_tag && _patch_write($scope3_id, "wb", Inn, 1);
					_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope3_id, "a4");
					$cg__input_tag && _patch_render($scope3_id, "a5");
					_subscribe(_unfilled_if($scope0_reason, 2) && $input_tag__closures, _scope($scope3_id, {
						b: _unfilled_if($scope0_reason, 2) && Inn,
						_: _scope_with_id($scope2_id),
						Ch: $wi__input_tag && 1
					}));
					$wg__input_tag || _resume_branch($scope3_id);
				}, $scope2_id) };
				_dynamic_tag($scope2_id, "a", input.tag, { content: Outer }, 9, 0, 0, $wg__input_tag, $scope0_reason, 2);
				$cg__input_tag && _patch_write($scope2_id, "wb", Outer, 1);
				_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope2_id, "a6");
				$cg__input_tag && _patch_render($scope2_id, "a7");
				_subscribe(_unfilled_if($scope0_reason, 2) && $input_tag__closures, _scope($scope2_id, {
					b: _unfilled_if($scope0_reason, 2) && Outer,
					_: _scope_with_id($scope1_id)
				}));
				$wg__input_tag || _resume_branch($scope2_id);
			}, $scope1_id) });
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a9"], $scope0_reason, 0);
	$fg__input_label && _patch_subscribers($scope0_id, "a10", "e");
	$fg__input_tag && _patch_subscribers($scope0_id, "a11", "f");
	_scope($scope0_id, {
		e: input.label,
		f: input.tag,
		g: $wi__input_label && $input_label__closures,
		h: $wi__input_tag && $input_tag__closures
	}) || ($fg__input_label && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 1)), $fg__input_tag && _patch_write($scope0_id, "xf", input.tag, !_server_guard($scope0_reason, 2)));
}, 1);
