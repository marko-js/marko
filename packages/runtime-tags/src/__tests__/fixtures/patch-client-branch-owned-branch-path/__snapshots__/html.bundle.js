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
	a5: "a5",
	a: "a;b%;<!><!><!>",
	a6: `a6${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`,
	a4: "a4;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_tag = _write_guard($scope0_reason, 3), $wg__input_inner = _write_guard($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 0), $fg__input_inner = _filled_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 2), $fg__input_tag = _filled_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_tag__closures = /* @__PURE__ */ new Set();
	const $input_inner__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope1_id, "a", 1);
			card_default({ content: _content_resume("a5", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_if(() => {
					if (input.inner) {
						const $scope3_id = _scope_id();
						const Inner = { content: _content_resume("a0", () => {
							const $scope4_id = _scope_id();
							_scope_reason();
							_html(`<b>${_text_mark($scope4_id, "a", input.label, 1, $scope0_reason, 2)}</b>`);
							_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope4_id, "a1", _client_guard($scope0_reason, 2));
							_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope4_id, { _: _scope_with_id($scope3_id) }));
						}, $scope3_id) };
						_dynamic_tag($scope3_id, "a", input.tag, { content: Inner }, 1, 0, 0, $wg__input_tag, $scope0_reason, 3);
						_unfilled_if($scope0_reason, 3) && _patch_write($scope3_id, "wb", Inner, 1);
						_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope3_id, "a2");
						_client_guard($scope0_reason, 3) && _patch_render($scope3_id, "a3");
						_subscribe(_unfilled_if($scope0_reason, 3) && $input_tag__closures, _scope($scope3_id, {
							b: _unfilled_if($scope0_reason, 3) && Inner,
							_: _scope_with_id($scope2_id)
						}));
						$wg__input_tag || _resume_branch($scope3_id);
						return 0;
					}
				}, $scope2_id, "a", 1, $wg__input_inner, 1, 0, 0, ["a4"], $scope0_reason, 1);
				_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "a7", _client_guard($scope0_reason, 1));
				_subscribe(_unfilled_if($scope0_reason, 1) && $input_inner__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }));
				$wg__input_inner || _resume_branch($scope2_id);
			}, $scope1_id) });
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a6"], $scope0_reason, 0);
	$fg__input_inner && _patch_subscribers($scope0_id, "a8", "e");
	$fg__input_label && _patch_subscribers($scope0_id, "a9", "f");
	$fg__input_tag && _patch_subscribers($scope0_id, "a10", "g");
	_scope($scope0_id, {
		e: input.inner,
		f: input.label,
		g: input.tag,
		i: _write_if($scope0_reason, 2) && $input_label__closures,
		j: _write_if($scope0_reason, 3) && $input_tag__closures,
		h: _write_if($scope0_reason, 1) && $input_inner__closures
	}) || ($fg__input_inner && _patch_write($scope0_id, "xe", input.inner, !_server_guard($scope0_reason, 1)), $fg__input_label && _patch_write($scope0_id, "xf", input.label, !_server_guard($scope0_reason, 2)), $fg__input_tag && _patch_write($scope0_id, "xg", input.tag, !_server_guard($scope0_reason, 3)));
}, 1);
