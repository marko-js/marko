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
	a5: "a5|2;b%;<!><!><!>",
	a: "a;b%;<!><!><!>",
	a6: `a6${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 1), $wg__input_tag = _write_guard($scope0_reason, 2), $cg__input_tag = _client_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 0), $ui__input_show = _unfilled_if($scope0_reason, 0), $ui__input_tag2 = _unfilled_if($scope0_reason, 2), $wi__input_tag = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_tag__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope1_id, "a", 1);
			card_default({ content: _content("a5", () => {
				_scope_reason();
				const $scope2_id = _scope_id(), $ui__input_tag = _unfilled_if($scope0_reason, 2);
				const Inner = { content: _content_resume("a0", () => {
					const $scope3_id = _scope_id();
					_scope_reason();
					_html(`<b>${_text_mark($scope3_id, "b", input.label, 1, $scope0_reason, 1)}</b>${_el_mark($scope3_id, "a")}`);
					_script($scope3_id, "a1");
					_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope3_id, "a2", $cg__input_label);
					_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }), $cg__input_label && "a2");
				}, $scope2_id, void 0, 1) };
				_dynamic_tag($scope2_id, "a", input.tag, { content: Inner }, 1, 0, 0, $wg__input_tag, $scope0_reason, 2);
				$ui__input_tag && _patch_write($scope2_id, "wb", Inner, 1);
				_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope2_id, "a3");
				$cg__input_tag && _patch_render($scope2_id, "a4");
				_subscribe($ui__input_tag && $input_tag__closures, _scope($scope2_id, {
					b: $ui__input_tag && Inner,
					_: _scope_with_id($scope1_id)
				}), $cg__input_tag && "a3", $wg__input_tag);
				$wg__input_tag || _resume_branch($scope2_id);
			}, $scope1_id, 2) });
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a6"], $scope0_reason, 0);
	_scope($scope0_id, {
		e: input.label,
		f: _write_if($scope0_reason, 0) && ($ui__input_show || $ui__input_tag2) && input.tag,
		g: _write_if($scope0_reason, 1) && $input_label__closures,
		h: $wi__input_tag && $wi__input_tag && ($ui__input_tag2 || $ui__input_show) && $input_tag__closures
	}) || (_filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 1)) && _patch_subscribers($scope0_id, "a7", "e"), _filled_guard($scope0_reason, 2) && _patch_write($scope0_id, "xf", input.tag, !_server_guard($scope0_reason, 2)) && _client_guard($scope0_reason, 0) && _patch_subscribers($scope0_id, "a8", "f"));
}, 1);
