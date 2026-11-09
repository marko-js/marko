// tags/card.marko
const $List_content__walks = "b%c";
const $List_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>x</button>`)($List_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($List_content__walks);
const $setup = [["a>"], ["b2"]];
_shells({
	b1: `b1;${$List_content__walks};${$List_content__template}`,
	b: `b a>!b2;${((_w0) => `b/${_w0}& b`)($List_content__walks)};${((_w0) => `<!>${_w0}<button>x</button>`)($List_content__template)}`
});
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_w = _write_guard($scope0_reason, 1), $cg__input_w = _client_guard($scope0_reason, 1), $wi__input_w = _write_if($scope0_reason, 1), $fg__input_w = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_w__closures = /* @__PURE__ */ new Set();
	let k = [input.n];
	const List = { content: _content("b1", ({ items }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__items = _write_guard($scope1_reason, 0), $wi__items = _write_if($scope1_reason, 0);
		_for_of(items, (x) => {
			const $scope2_id = _scope_id();
			_html(`<li>${_text_mark($scope2_id, "a", x, $wg__items)} ${_text_mark($scope2_id, "b", input.w, $wg__input_w * 2)}</li>`);
			$cg__input_w && _patch_render($scope2_id, "b0");
			($wi__input_w || $wi__items) && _subscribe($wi__input_w && $input_w__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), $cg__input_w && "b0", $wg__input_w || $wg__items);
		}, 0, $scope1_id, "a", $wg__items, $wg__items, 0, 0, 1);
		($wi__input_w || $wi__items) && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, $scope0_id, 0) };
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	List.content({ items: k });
	_patch_child_end();
	_html(`<button>x</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "b2");
	$fg__input_w && _patch_subscribers($scope0_id, "b3", "f");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb4", k, 1);
	_scope($scope0_id, {
		f: input.w,
		h: $wi__input_w && $input_w__closures,
		a: _existing_scope($childScope)
	}) || $fg__input_w && _patch_write($scope0_id, "xf", input.w, !_server_guard($scope0_reason, 1));
});

// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a2: `a2${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on = _write_guard($scope0_reason, 1), $ui__input_on = _unfilled_if($scope0_reason, 1), $fg__input_n = _filled_guard($scope0_reason, 2), $fg__input_w = _filled_guard($scope0_reason, 3), $cg__input_on = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.on) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 2) << 1 | _updates_from($scope0_reason, 3) << 3);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			card_default({
				n: input.n,
				w: input.w
			});
			_patch_child_end();
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "a0");
			_client_guard($scope0_reason, 3) && _patch_render($scope1_id, "a1");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_on, 1, 0, 0, ["a2"], $scope0_reason, 1);
	$fg__input_n && $cg__input_on && _patch_render($scope0_id, "a0", "e");
	$fg__input_w && $cg__input_on && _patch_render($scope0_id, "a1", "f");
	_scope($scope0_id, {
		e: ($ui__input_on || _unfilled_if($scope0_reason, 2)) && input.n,
		f: ($ui__input_on || _unfilled_if($scope0_reason, 3)) && input.w
	}) || ($fg__input_n && $ui__input_on && _patch_write($scope0_id, "xe", input.n, !_server_guard($scope0_reason, 2)), $fg__input_w && $ui__input_on && _patch_write($scope0_id, "xf", input.w, !_server_guard($scope0_reason, 3)));
}, 1);
