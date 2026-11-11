// template.marko
_shells({
	a2: "a2",
	a3: "a3 a1;D%c%;<p><!> <!></p>",
	a: "a !a5; b%;<button>+</button><!><!>",
	a4: "a4;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 1), $ui__input_show = _unfilled_if($scope0_reason, 0), $ui__input_label = _unfilled_if($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button>+</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_try($scope1_id, "a", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`<p>${_text_mark($scope2_id, "a", count)} ${_text_mark($scope2_id, "b", input.label, 2, $scope0_reason, 1)}</p>`);
				_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "a0", $cg__input_label);
				_subscribe($count__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), $cg__input_label && "a0"), "a1");
			}, void 0, () => {
				_scope_reason();
				_scope_id();
				_html("caught");
			}, 0, "a2", "a3", 0, 0, 1);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a4"], $scope0_reason, 0);
	_script($scope0_id, "a5");
	_scope($scope0_id, {
		f: _write_if($scope0_reason, 0) && ($ui__input_show || $ui__input_label) && input.label,
		g: count,
		h: $wi__input_label && $wi__input_label && ($ui__input_label || $ui__input_show) && $input_label__closures,
		i: $count__closures
	}) || _filled_guard($scope0_reason, 1) && $ui__input_show && _patch_write($scope0_id, "xf", input.label, !_server_guard($scope0_reason, 1)) && _client_guard($scope0_reason, 0) && _patch_subscribers($scope0_id, "a6", "f");
}, 1);
