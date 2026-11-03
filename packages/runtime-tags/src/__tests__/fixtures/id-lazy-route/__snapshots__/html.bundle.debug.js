// tags/sub.marko
var sub_default = _template("__tests__/tags/sub.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items = _write_guard($scope0_reason, 0), $wi__input_n = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_n__closures = new Set();
	const $g__closures = new Set();
	let g = 10;
	_for_of(input.items, (t) => {
		const $scope1_id = _scope_id();
		_if(() => {
			if (t.on) {
				const $scope2_id = _scope_id();
				const uid = _id();
				_html(`<label${_attr("for", uid)}>field</label><input${_attr("id", uid)}><span class=v>${_text_resume($scope2_id, "#text/2", g - input.n)}</span>`);
				_subscribe($g__closures, _subscribe($wi__input_n && $input_n__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/sub.marko", "4:4"), "__tests__/tags/sub.marko_2_input_n#0:5/subscribe"), "__tests__/tags/sub.marko_2_g#0:6/subscribe");
				return 0;
			}
		}, $scope1_id, "#text/0", $wg__input_items, $wg__input_items);
		_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/sub.marko", "3:2");
	}, "k", $scope0_id, "#text/0", $wg__input_items, $wg__input_items);
	_html(`<button class=inc>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/tags/sub.marko_0");
	_scope($scope0_id, {
		input_n: input.n,
		g,
		"ClosureScopes:input_n/7": $wi__input_n && $input_n__closures,
		"ClosureScopes:g/8": $g__closures
	}, "__tests__/tags/sub.marko", 0, {
		input_n: ["input.n"],
		g: "2:6"
	});
});

// tags/route-cl.marko
var route_cl_default = _template("__tests__/tags/route-cl.marko", (input) => {
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
	_write_if($scope0_reason, 0) && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/route-cl.marko", 0);
});

// template.marko
const $Route_withLoadAssets = withLoadAssets(() => route_cl_default, "__tests__/tags/route-cl.marko", flush, "ready:__tests__/tags/route-cl.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	$Route_withLoadAssets({ n: Number($global$1.n || 5) });
}, 1);
