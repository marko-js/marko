// tags/card.marko
const $template = "<!><button>x</button>";
const $walks = "/&b b";
const $setup = [["a>b4"], ["b5"]];
_shells({
	b0: "b0 b4,",
	b: "b a>b4!b5;/&b ;<!><button>x</button>"
});
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_w = _filled_guard($scope0_reason, 1), $wi__input_w = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_w__closures = /* @__PURE__ */ new Set();
	const $k__closures = /* @__PURE__ */ new Set();
	let k = input.n;
	const Panel = { content: _content("b0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope1_id, "b2");
		_script($scope1_id, "b1", 0, 0, _filled_guard($scope0_reason, 1) && ">f", "b3");
		_subscribe($k__closures, _subscribe($wi__input_w && $input_w__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 1) && "b2", 0), "b4", 0);
		_resume_branch($scope1_id);
	}, $scope0_id, 0) };
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	Panel.content({});
	_patch_child_end();
	_html(`<button>x</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "b5");
	$fg__input_w && _patch_subscribers($scope0_id, "b6", "f");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb7", k, 1);
	_scope($scope0_id, {
		f: input.w,
		g: k,
		h: $wi__input_w && $input_w__closures,
		i: $k__closures,
		a: _existing_scope($childScope)
	}) || $fg__input_w && _patch_write($scope0_id, "xf", input.w, !_server_guard($scope0_reason, 1));
});

// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a2: `a2${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on = _write_guard($scope0_reason, 1), $cg__input_on = _client_guard($scope0_reason, 1), $fg__input_n = _filled_guard($scope0_reason, 2), $fg__input_w = _filled_guard($scope0_reason, 3);
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
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.n,
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.w
	}) || ($fg__input_n && $cg__input_on && _patch_write($scope0_id, "xe", input.n, !_server_guard($scope0_reason, 2)), $fg__input_w && $cg__input_on && _patch_write($scope0_id, "xf", input.w, !_server_guard($scope0_reason, 3)));
}, 1);
