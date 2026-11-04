// template.marko
_shells({
	a0: "a0 a1",
	a: "a !a4;b%b ;<!><!><button>+</button>",
	a3: "a3;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_tag = _write_guard($scope0_reason, 1), $ui__input_show = _unfilled_if($scope0_reason, 0), $fg__input_tag = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.tag, {}, 2, _content_resume("a0", () => {
				const $scope2_id = _scope_id();
				_scope_reason();
				_html(`<span${_attr("data-n", count)}>x</span>${_el_mark($scope2_id, "a")}`);
				_subscribe($count__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a1");
			}, $scope1_id), 0, $wg__input_tag, $scope0_reason, 1);
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "a2");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a3"], $scope0_reason, 0);
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a4");
	$fg__input_tag && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "a2", "f");
	_scope($scope0_id, {
		f: _write_if($scope0_reason, 0) && ($ui__input_show || _unfilled_if($scope0_reason, 1)) && input.tag,
		g: count,
		i: $count__closures
	}) || $fg__input_tag && $ui__input_show && _patch_write($scope0_id, "xf", input.tag, !_server_guard($scope0_reason, 1));
}, 1);
