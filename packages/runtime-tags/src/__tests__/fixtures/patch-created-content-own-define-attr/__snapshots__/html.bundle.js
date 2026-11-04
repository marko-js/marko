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
_shells({
	a0: "a0",
	a2: "a2",
	a: "a;b%;<!><!><!>",
	a5: `a5${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 3), $wg__input_tag = _write_guard($scope0_reason, 4), $cg__input_tag = _client_guard($scope0_reason, 4), $wi__input_label__OR__input_tag__OR__input_show = _write_if($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 5), $ui__input_show = _unfilled_if($scope0_reason, 5);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_tag__closures = /* @__PURE__ */ new Set();
	const Body = { content: _content_resume("a2", () => {
		const $scope1_id = _scope_id(), $ui__input_tag = _unfilled_if($scope0_reason, 4);
		_scope_reason();
		const $scope1_page = _page_render();
		const Inner = { content: _content_resume("a0", () => {
			const $scope2_id = _scope_id();
			_scope_reason();
			_html(`<b>${_text_mark($scope2_id, "a", input.label, 1, $scope0_reason, 3)}</b>`);
			_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope2_id, "a1", $cg__input_label);
			_subscribe(_unfilled_if($scope0_reason, 3) && $input_label__closures, _scope($scope2_id, { _: $wi__input_label__OR__input_tag__OR__input_show && _scope_with_id($scope1_id) }), $cg__input_label && "a1");
		}, $scope1_id, ($scope) => $scope1_page ? [{ d: input.label }, { _: $scope($scope0_id) }] : [], 1) };
		_dynamic_tag($scope1_id, "a", input.tag, { content: Inner }, 1, 0, 0, $wg__input_tag, $scope0_reason, 4);
		$ui__input_tag && _patch_write($scope1_id, "wb", Inner, 1);
		_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope1_id, "a3");
		$cg__input_tag && _patch_render($scope1_id, "a4");
		$wi__input_label__OR__input_tag__OR__input_show && _subscribe($ui__input_tag && $input_tag__closures, _scope($scope1_id, {
			b: $ui__input_tag && Inner,
			_: _scope_with_id($scope0_id)
		}), $cg__input_tag && "a3", $wg__input_tag);
		$wg__input_tag || $wi__input_label__OR__input_tag__OR__input_show && _resume_branch($scope1_id);
	}, $scope0_id, void 0, 1) };
	_if(() => {
		if (input.show) {
			const $scope3_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope3_id, "a", 1);
			card_default({ content: Body.content });
			_patch_child_end();
			!_client_guard($scope0_reason, 5) && _unfilled_if() && _patch_write($scope0_id, "wh", Body.content);
			_scope($scope3_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a5"], $scope0_reason, 5);
	_scope($scope0_id, {
		d: _write_if($scope0_reason, 1) && (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.label,
		e: _write_if($scope0_reason, 5) && ($ui__input_show || _unfilled_if($scope0_reason, 4)) && input.tag,
		h: $ui__input_show && Body.content,
		i: _write_if($scope0_reason, 3) && $input_label__closures,
		j: _write_if($scope0_reason, 4) && $input_tag__closures
	}) || (_filled_guard($scope0_reason, 3) && _patch_write($scope0_id, "xd", input.label, !_server_guard($scope0_reason, 3)) && _patch_subscribers($scope0_id, "a6", "d"), _filled_guard($scope0_reason, 4) && _patch_write($scope0_id, "xe", input.tag, !_server_guard($scope0_reason, 4)) && _patch_subscribers($scope0_id, "a7", "e"));
}, 1);
