// tags/card.marko
_shells({
	b0: "b0;D ;<p> </p>",
	b1: "b1;D ;<p> </p>",
	b: "b !;b%;<!><!><!>"
});
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = input.n;
	_await($scope0_id, "a", Promise.resolve(n), (x) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_text_mark($scope1_id, "a", x)}</p>`);
		_scope($scope1_id, {});
	}, 1, "b0", 2, 1);
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb2", n, 1);
});

// template.marko
_shells({ a: "a;D%;<main><!></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on__OR__input_n = _write_guard($scope0_reason, 0), $ui__input_on__OR__input_n = _unfilled_if($scope0_reason, 0), $ui__input_n = _unfilled_if($scope0_reason, 2), $ui__input_on = _unfilled_if($scope0_reason, 1), $fg__input_on = _filled_guard($scope0_reason, 1), $fg__input_n = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.on ? card_default : "div", { n: input.n }, 1, 0, 0, $wg__input_on__OR__input_n, $scope0_reason, 0);
	_html("</main>");
	_patch_render($scope0_id, "a0", [$fg__input_on && "d", $fg__input_n && "e"], $scope0_reason, 0);
	_scope($scope0_id, {
		d: ($ui__input_n || $ui__input_on__OR__input_n) && input.on,
		e: ($ui__input_on || $ui__input_on__OR__input_n) && input.n
	}) || ($fg__input_on && $ui__input_n && _patch_write($scope0_id, "xd", input.on, !_server_guard($scope0_reason, 1)), $fg__input_n && $ui__input_on && _patch_write($scope0_id, "xe", input.n, !_server_guard($scope0_reason, 2)));
}, 1);
