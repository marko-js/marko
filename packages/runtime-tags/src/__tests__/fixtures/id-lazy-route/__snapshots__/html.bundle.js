// tags/sub.marko
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
				const uid = _id();
				_html(`<label${_attr("for", uid)}>field</label><input${_attr("id", uid)}><span class=v>${_text_resume($scope2_id, "c", g - input.n)}</span>`);
				_subscribe($g__closures, _subscribe($wi__input_n && $input_n__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "c0"), "c1");
				return 0;
			}
		}, $scope1_id, "a", $wg__input_items, $wg__input_items);
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, "k", $scope0_id, "a", $wg__input_items, $wg__input_items);
	_html(`<button class=inc>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "c2");
	_scope($scope0_id, {
		f: input.n,
		g,
		h: $wi__input_n && $input_n__closures,
		i: $g__closures
	});
});

// tags/route-cl.marko
var route_cl_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_n = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_set_scope_reason($wg__input_n << 3);
	const $childScope = _peek_scope_id();
	sub_default({
		n: input.n,
		items: [{
			k: 1,
			on: true
		}]
	});
	_write_if($scope0_reason, 0) && _scope($scope0_id, { a: _existing_scope($childScope) });
});

// template.marko
const $Route_withLoadAssets = withLoadAssets(() => route_cl_default, "b", flush, "_b");
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	const $global$1 = $global();
	$Route_withLoadAssets({ n: Number($global$1.n || 5) });
}, 1);
