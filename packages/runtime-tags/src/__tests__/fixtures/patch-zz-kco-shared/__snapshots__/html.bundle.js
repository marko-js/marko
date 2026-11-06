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
	a4: "a4|2;b%;<!><!><!>",
	a: "a;b%bD ;<!><!><p> </p>",
	a5: `a5${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_tag = _write_guard($scope0_reason, 4), $cg__input_tag = _client_guard($scope0_reason, 4), $wi__input_show__OR__input_label__OR__input_tag = _write_if($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 3), $fg__input_tag = _filled_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_tag__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope1_id, "a", 1);
			card_default({ content: _content("a4", () => {
				_scope_reason();
				const $scope2_page = _page_render();
				const $scope2_id = _scope_id();
				const Inner = { content: _content_resume("a0", () => {
					const $scope3_id = _scope_id();
					_scope_reason();
					_html(`<b>${_text_mark($scope3_id, "a", input.label, 1, $scope0_reason, 3)}</b>`);
					_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope3_id, "a1", _client_guard($scope0_reason, 3));
					_subscribe(_unfilled_if($scope0_reason, 3) && $input_label__closures, _scope($scope3_id, { _: $wi__input_show__OR__input_label__OR__input_tag && _scope_with_id($scope2_id) }));
				}, $scope2_id, ($scope) => $scope2_page ? [
					{ f: input.label },
					{ _: $scope($scope0_id) },
					{ _: $scope($scope1_id) }
				] : []) };
				_dynamic_tag($scope2_id, "a", input.tag, { content: Inner }, 1, 0, 0, $wg__input_tag, $scope0_reason, 4);
				$cg__input_tag && _patch_write($scope2_id, "wb", Inner, 1);
				_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope2_id, "a2");
				$cg__input_tag && _patch_render($scope2_id, "a3");
				$wi__input_show__OR__input_label__OR__input_tag && _subscribe(_unfilled_if($scope0_reason, 4) && $input_tag__closures, _scope($scope2_id, {
					b: _unfilled_if($scope0_reason, 4) && Inner,
					_: _scope_with_id($scope1_id)
				}));
				$wg__input_tag || $wi__input_show__OR__input_label__OR__input_tag && _resume_branch($scope2_id);
			}, $scope1_id, 2) });
			_patch_child_end();
			_scope($scope1_id, {
				_: $wi__input_show__OR__input_label__OR__input_tag && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 2), 1, 0, 0, ["a5"], $scope0_reason, 2);
	_html(`<p>${_text_mark($scope0_id, "b", input.label, 1, $scope0_reason, 3)}</p>`);
	$fg__input_label && _patch_subscribers($scope0_id, "a6", "f");
	$fg__input_tag && _client_guard($scope0_reason, 2) && _patch_subscribers($scope0_id, "a7", "g");
	_scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 3)) && input.label,
		g: _unfilled_if($scope0_reason, 2) && input.tag,
		h: _write_if($scope0_reason, 3) && $input_label__closures,
		i: _write_if($scope0_reason, 4) && (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 2)) && $input_tag__closures
	}) || ($fg__input_label && _patch_write($scope0_id, "xf", input.label, !_server_guard($scope0_reason, 3)), $fg__input_tag && _patch_write($scope0_id, "xg", input.tag, !_server_guard($scope0_reason, 4)));
}, 1);
