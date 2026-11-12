// tags/sub.marko
const $template$1 = "<!><!><button class=inc>+</button>";
const $walks$1 = "b%b b";
const $setup$2 = [[], ["c5"]];
_shells({
	c: "c !c5;b%b ;<!><!><button class=inc>+</button>",
	c4: "c4;b%;<!><!><!>",
	c3: "c3 c2;D ;<span class=v> </span>"
});
var sub_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_n__closures = /* @__PURE__ */ new Set();
	const $g__closures = /* @__PURE__ */ new Set();
	let g = 10;
	_for_of(input.items, (t) => {
		const $scope1_id = _scope_id();
		_if(() => {
			if (t.on) {
				const $scope2_id = _scope_id();
				_html(`<span class=v>${_text_mark($scope2_id, "a", g - input.n)}</span>`);
				_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "c0");
				_patch_render($scope2_id, "c1", _filled_guard($scope0_reason, 1) && ">>f");
				_subscribe($g__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_n__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), _client_guard($scope0_reason, 1) && "c0"), "c2");
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__input_items, 1, 0, 0, ["c3"], $scope0_reason, 0);
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, "k", $scope0_id, "a", 1, 1, 1, 0, 0, "c4", $scope0_reason, 0);
	_html(`<button class=inc>+</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "c5");
	_patch_fill($scope0_id, "vc7", g, 1);
	_scope($scope0_id, {
		f: input.n,
		g,
		h: _write_if($scope0_reason, 1) && $input_n__closures,
		i: $g__closures
	}) || _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xf", input.n, !_server_guard($scope0_reason, 1)) && _client_guard($scope0_reason, 0) && _patch_subscribers($scope0_id, "c6", "f");
});

// tags/route-cl.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1);
const $setup$1 = _shell_setup([[], []], ["a>", $setup$2]);
_shells({ b: `b${_shell_marker($setup$1)};${((_w0) => `b/${_w0}&`)($walks$1)};${((_w0) => `<!>${_w0}`)($template$1)}` });
var route_cl_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_updates_from($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	sub_default({
		n: input.n,
		items: [{
			k: 1,
			on: true
		}]
	});
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
});

// template.marko
const $Route_withLoadAssets = withLoadAssets(() => route_cl_default, "b", flush, "_b");
const $setup = _shell_setup([[], []], ["b>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `b%b/${_w0}&b`)($walks)};${((_w0) => `<!><!>${_w0}<!>`)($template)}` });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	$Route_withLoadAssets({ n: Number($global$1.n || 5) });
	_patch_child_end();
	_global_subscribe("a0", $scope0_id);
	_scope($scope0_id, { b: _existing_scope($childScope) });
}, 1);
