// tags/sub.marko
const $template$1 = "<!><!><button class=inc>+</button>";
const $walks$1 = "b%b b";
_shells({
	c: "c !c4;b%b ;<!><!><button class=inc>+</button>",
	c0: "c0;b%;<!><!><!>",
	c1: "c1 c8 c9;D ;<span class=v> </span>"
});
var sub_default = _template_patch("c", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_items = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_n__closures = /* @__PURE__ */ new Set();
	const $g__closures = /* @__PURE__ */ new Set();
	let g = 10;
	_for_of(input.items, (t) => {
		const $scope1_id = _scope_id();
		_if(() => {
			if (t.on) {
				const $scope2_id = _scope_id();
				_html(`<span class=v>${_text_resume($scope2_id, "a", g - input.n)}</span>`);
				_subscribe($g__closures, _subscribe(_source_if($scope0_reason, 1) && $input_n__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "c2"), "c3");
				return 0;
			}
		}, $scope1_id, "a", 1, $sg__input_items, $sg__input_items, void 0, void 0, ["c1"], $scope0_reason, 0);
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, "k", $scope0_id, "a", 1, 1, $sg__input_items, void 0, void 0, "c0", $scope0_reason, 0);
	_html(`<button class=inc>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "c4");
	_patch_value($scope0_id, "c6", g, 1);
	$scope0_page ? _scope($scope0_id, {
		f: input.n,
		g,
		h: $input_n__closures,
		i: $g__closures
	}) : _filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "c5", input.n);
}, 0, 0);

// tags/route-cl.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1);
_shells({ b: /*@__PURE__*/ ((_w0, _w1) => `b;${_w0};${_w1}`)(((_w0) => `b/${_w0}&`)($walks$1), ((_w0) => `<!>${_w0}`)($template$1)) });
var route_cl_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_serialize_reason(_mask_group($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	sub_default({
		n: input.n,
		items: [{
			k: 1,
			on: true
		}]
	});
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 0, () => [sub_default]);

// template.marko
const $Route_withLoadAssets = withLoadAssets(route_cl_default, "_b", void 0, 1);
_shells({ a: /*@__PURE__*/ ((_w0, _w1) => `a;${_w0};${_w1}`)(((_w0) => `b%b/${_w0}&b`)($walks), ((_w0) => `<!><!>${_w0}<!>`)($template)) });
var template_default = _template_patch("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "b", $childScope);
	$Route_withLoadAssets({ n: Number($global$1.n || 5) });
	_global_subscribe("a0", $scope0_id);
	$scope0_page && _scope($scope0_id, { b: _existing_scope($childScope) });
}, 1, 1);
