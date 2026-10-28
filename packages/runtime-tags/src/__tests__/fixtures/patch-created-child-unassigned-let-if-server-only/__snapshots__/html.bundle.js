// tags/card.marko
_shells({
	b: "b;b%;<!><!><!>",
	b1: "b1;Dc%;<p><b>yes</b> <!></p>"
});
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_n = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let n = input.n;
	_if(() => {
		if (n) {
			const $scope1_id = _scope_id();
			_html(`<p><b>yes</b> ${_text_resume($scope1_id, "a", input.n, 2, $scope0_reason, 0)}</p>`);
			$cg__input_n && _patch_init($scope1_id, "b0");
			_scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, 1, 1, 0, 0, ["b1"], $cg__input_n << 1, 0);
	_patch_write($scope0_id, "wd", input.n, 1);
	_scope($scope0_id, { d: input.n });
});

// template.marko
_shells({ a: "a !;D%;<main><!></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on__OR__input_n = _write_guard($scope0_reason, 0), $cg__input_n = _client_guard($scope0_reason, 2), $cg__input_on = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.on ? card_default : "div", { n: input.n }, 1, 0, 0, $wg__input_on__OR__input_n, $scope0_reason, 0);
	_html("</main>");
	_scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.on,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.n
	}) || (_filled_guard($scope0_reason, 1) && $cg__input_n && _patch_fill($scope0_id, "va0", input.on, !_server_guard($scope0_reason, 1)), $cg__input_n && _content_withhold(input.on), _filled_guard($scope0_reason, 2) && $cg__input_on && _patch_fill($scope0_id, "va1", input.n, !_server_guard($scope0_reason, 2)), $cg__input_on && _content_withhold(input.n));
}, 1);
