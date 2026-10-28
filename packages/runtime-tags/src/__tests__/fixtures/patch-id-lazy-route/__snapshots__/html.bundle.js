// tags/sub.marko
const $template$1 = "<!><!><button class=inc>+</button>";
const $walks$1 = "b%b b";
const $setup$2 = [[], ["c4"]];
_shells({
	c: "c !c4;b%b ;<!><!><button class=inc>+</button>",
	c3: "c3;b%;<!><!><!>",
	c2: "c2 c0 c8 c9; b bD ;<label>field</label><input><span class=v> </span>"
});
var sub_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items = _write_guard($scope0_reason, 0), $wi__input_n = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_n__closures = /* @__PURE__ */ new Set();
	const $g__closures = /* @__PURE__ */ new Set();
	let g = 10;
	_for_of(input.items, (t) => {
		const $scope1_id = _scope_id();
		_if(() => {
			if (t.on) {
				const $scope2_id = _scope_id();
				const uid = _id("A");
				_html(`<label${_attr("for", uid, $scope2_id, "aa$for", 0, 0)}>field</label>${_el_resume($scope2_id, "a", 0)}<input${_attr("id", uid, $scope2_id, "ab$id", 0, 0)}>${_el_resume($scope2_id, "b", 0)}<span class=v>${_text_resume($scope2_id, "c", g - input.n)}</span>`);
				_subscribe($g__closures, _subscribe($wi__input_n && $input_n__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), _client_guard($scope0_reason, 1) && "c0"), "c1");
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__input_items, 1, 0, 0, ["c2"], $scope0_reason, 0);
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, "k", $scope0_id, "a", 1, 1, 1, 0, 0, "c3", $scope0_reason, 0);
	_html(`<button class=inc>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "c4");
	_patch_fill($scope0_id, "vc6", g, 1);
	_scope($scope0_id, {
		f: input.n,
		g,
		h: $wi__input_n && $input_n__closures,
		i: $g__closures
	}) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vc5", input.n, !_server_guard($scope0_reason, 1));
});

// tags/route-cl.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1);
const $setup$1 = _shell_setup([[], []], ["a>", $setup$2]);
_shells({ b: /*@__PURE__*/ (() => `b${_shell_marker($setup$1)};${((_w0) => `b/${_w0}&`)($walks$1)};${((_w0) => `<!>${_w0}`)($template$1)}`)() });
var route_cl_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 3);
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
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `b%b/${_w0}&b`)($walks)};${((_w0) => `<!><!>${_w0}<!>`)($template)}`)() });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	$Route_withLoadAssets({ n: Number($global$1.n || 5) });
	_patch_child_end();
	_fill_global_subscribe("a0", $scope0_id);
	_scope($scope0_id, { b: _existing_scope($childScope) });
}, 1);
