// tags/rowsy.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
const $setup = [[], ["b6"]];
_shells({
	b1: "b1",
	b2: "b2 b12",
	b: "b !b6; D l%;<button> </button><!><!>",
	b3: "b3;b%;<!><!><!>",
	b0: "b0;b%;<!><!><!>"
});
var rowsy_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_tags__OR__input_card = _write_guard($scope0_reason, 0), $cg__input_tags__OR__input_card = _client_guard($scope0_reason, 0), $fg__input_label = _filled_guard($scope0_reason, 1), $fg__input_card = _filled_guard($scope0_reason, 3), $cg__input_tags = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $n__closures = /* @__PURE__ */ new Set();
	const Card = { content: _content_resume("b1", ({ label, content }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $wg__content = _write_guard($scope3_reason, 2);
		_html(`<p>${_text_mark($scope3_id, "a", label, 1, 4, 0)}`);
		_if(() => {
			if (label) {
				const $scope4_id = _scope_id();
				_dynamic_tag($scope4_id, "a", content, {}, 2, 0, 0, $wg__content);
				_write_if($scope3_reason, 0) && _scope($scope4_id, { _: _write_if($scope3_reason, 2) && _scope_with_id($scope3_id) });
				return 0;
			}
		}, $scope3_id, "b", 1, _write_guard($scope3_reason, 1), 1, 0, 0, ["b0"]);
		_html("</p>");
		_scope($scope3_id, { f: _unfilled_if($scope3_reason, 1) && content });
	}, $scope0_id) };
	let n = 0;
	const Label = { content: _content_resume("b2", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_text_mark($scope1_id, "a", input.label, 1, $scope0_reason, 1)} ${_text_mark($scope1_id, "b", n, 2)}</em>`);
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope1_id, "b4", _client_guard($scope0_reason, 1));
		_subscribe($n__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) })));
	}, $scope0_id, ($scope) => $scope0_page ? [{ f: input.label }] : []) };
	_html(`<button>${_text_mark($scope0_id, "b", n)}</button>${_el_mark($scope0_id, "a")}`);
	_for_of(input.tags, (tag) => {
		const $scope2_id = _scope_id();
		_filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 3) && _patch_write($scope2_id, "xc", tag, !_server_guard($scope0_reason, 2));
		_dynamic_tag($scope2_id, "a", input.card ? Card : "span", {
			label: tag,
			content: Label
		}, 9, 0, 0, $wg__input_tags__OR__input_card, $scope0_reason, 0, 0, void 0, 0, 0, "b2");
		_patch_render($scope2_id, "b5", [_filled_guard($scope0_reason, 3) && ">h", _filled_guard($scope0_reason, 2) && "c"], $scope0_reason, 0);
		_write_if($scope0_reason, 0) && _scope($scope2_id, {
			c: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 0)) && tag,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "c", 1, 1, 1, 0, 0, "b3", $scope0_reason, 2);
	_script($scope0_id, "b6");
	$cg__input_tags__OR__input_card && _patch_write($scope0_id, "wi", Card, 1);
	$cg__input_tags__OR__input_card && _patch_write($scope0_id, "wk", Label, 1);
	$fg__input_label && _patch_subscribers($scope0_id, "b7", "f");
	$fg__input_card && $cg__input_tags && _patch_render($scope0_id, "b8", "h");
	_patch_fill($scope0_id, "vb9", n, 1);
	_scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label,
		h: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.card,
		i: _unfilled_if($scope0_reason, 0) && Card,
		j: n,
		k: _unfilled_if($scope0_reason, 0) && Label,
		l: _write_if($scope0_reason, 1) && $input_label__closures,
		o: $n__closures
	}) || ($fg__input_label && (_client_branch_if("b2", $scope0_id) || $cg__input_tags__OR__input_card || $cg__input_tags__OR__input_card) && _patch_write($scope0_id, "xf", input.label, !_server_guard($scope0_reason, 1)), $fg__input_card && $cg__input_tags && _patch_write($scope0_id, "xh", input.card, !_server_guard($scope0_reason, 3)));
});

// template.marko
_shells({
	a: "a !a3;b%b ;<!><!><button class=c>c</button>",
	a2: `a2${_shell_marker([["a5"], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks)};${/*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_show = _client_guard($scope0_reason, 0), $fg__input_label = _filled_guard($scope0_reason, 1), $fg__input_tags = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let card = true;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(134 | (_updates_from($scope0_reason, 1) << 3 | _updates_from($scope0_reason, 2) << 5));
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			rowsy_default({
				card,
				label: input.label,
				tags: input.tags
			});
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "a0");
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "a1");
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a2"], $scope0_reason, 0);
	_html(`<button class=c>c</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a3");
	$fg__input_label && $cg__input_show && _patch_render($scope0_id, "a0", "f");
	$fg__input_tags && $cg__input_show && _patch_render($scope0_id, "a1", "g");
	_scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label,
		g: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.tags,
		h: card
	}) || ($fg__input_label && $cg__input_show && _patch_write($scope0_id, "xf", input.label, !_server_guard($scope0_reason, 1)), $fg__input_tags && $cg__input_show && _patch_write($scope0_id, "xg", input.tags, !_server_guard($scope0_reason, 2)));
}, 1);
