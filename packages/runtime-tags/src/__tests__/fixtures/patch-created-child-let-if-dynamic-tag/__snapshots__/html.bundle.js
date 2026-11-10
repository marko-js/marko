// tags/card.marko
_shells({ b: "b !b1; b%;<button>toggle</button><!><!>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_n = _write_guard($scope0_reason, 0), $fg__input_n = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let n = input.n;
	_html(`<button>toggle</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {
		if (n) {
			const $scope1_id = _scope_id();
			_html(`<p><b>yes</b> ${_text_mark($scope1_id, "a", input.n, $wg__input_n * 2)}</p>`);
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "b0");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, 1, 0, 0, 1);
	_script($scope0_id, "b1");
	$fg__input_n && _patch_render($scope0_id, "b0", "e");
	$fg__input_n && _patch_fill($scope0_id, "vb2", n, 1);
	_scope($scope0_id, {
		e: input.n,
		f: n
	}) || $fg__input_n && _patch_write($scope0_id, "xe", input.n, !_server_guard($scope0_reason, 0));
});

// template.marko
_shells({ a: "a !a0; D lD%;<button> </button><main><!></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_on__OR__input_n = _unfilled_if($scope0_reason, 0), $ui__input_n = _unfilled_if($scope0_reason, 2), $ui__input_on = _unfilled_if($scope0_reason, 1), $fg__input_on = _filled_guard($scope0_reason, 1), $fg__input_n = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let c = 0;
	_html(`<button>${_text_mark($scope0_id, "b", c)}</button>${_el_mark($scope0_id, "a")}<main>`);
	_dynamic_tag($scope0_id, "c", input.on ? card_default : "div", { n: input.n }, 1, 0, 0, _write_guard($scope0_reason, 0), $scope0_reason, 0);
	_html("</main>");
	_script($scope0_id, "a0");
	_patch_render($scope0_id, "a1", (($fg__input_on ? " f" : "") + ($fg__input_n ? " g" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		f: ($ui__input_n || $ui__input_on__OR__input_n) && input.on,
		g: ($ui__input_on || $ui__input_on__OR__input_n) && input.n,
		i: c
	}) || ($fg__input_on && $ui__input_n && _patch_write($scope0_id, "xf", input.on, !_server_guard($scope0_reason, 1)), $fg__input_n && $ui__input_on && _patch_write($scope0_id, "xg", input.n, !_server_guard($scope0_reason, 2)));
}, 1);
