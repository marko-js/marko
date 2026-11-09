// template.marko
_shells({
	a1: "a1 a0;D%c%;<p><!> <!></p>",
	a: "a !a5; b%;<button>+</button><!><!>",
	a2: "a2 a0;D%c%;<p><!> <!></p>",
	a3: "a3;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_show = _unfilled_if($scope0_reason, 0), $fg__input_promise = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button>+</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "a", input.promise, (v) => {
				const $scope2_id = _scope_id();
				_html(`<p>${_text_mark($scope2_id, "a", count)} ${_text_mark($scope2_id, "b", v, 2, $scope0_reason, 1)}</p>`);
				_subscribe($count__closures, _scope($scope2_id, {}), "a0");
			}, 1, "a1", _unfilled_if($scope0_reason, 1) && 3);
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "a4");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a3"], $scope0_reason, 0);
	_script($scope0_id, "a5");
	$fg__input_promise && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "a4", "f");
	_scope($scope0_id, {
		f: ($ui__input_show || _unfilled_if($scope0_reason, 1)) && input.promise,
		g: count,
		i: $count__closures
	}) || $fg__input_promise && $ui__input_show && _patch_write($scope0_id, "xf", input.promise, !_server_guard($scope0_reason, 1));
}, 1);
