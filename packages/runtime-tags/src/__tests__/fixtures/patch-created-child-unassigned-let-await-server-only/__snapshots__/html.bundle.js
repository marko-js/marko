// tags/card.marko
_shells({
	b0: "b0;D ;<p> </p>",
	b1: "b1;D ;<p> </p>",
	b: "b;b%;<!><!><!>"
});
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = input.n;
	_await($scope0_id, "a", Promise.resolve(n), (x) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_patch_text($scope1_id, "a", x, void 0, (_mask_group($scope0_reason, 0) & 1) << 1, 0)}</p>`);
		$scope0_page && _scope($scope1_id, {});
	}, 1, "b0", 1);
});

// template.marko
_shells({ a: "a !;D%;<main><!></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on__OR__input_n = _write_guard($scope0_reason, 0), $cg__input_n = _client_guard($scope0_reason, 2), $cg__input_on = _client_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.on ? card_default : "div", { n: input.n }, 1, 0, 0, $wg__input_on__OR__input_n, $scope0_reason, 0);
	_html("</main>");
	$scope0_page ? _scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.on,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.n
	}) : (_filled_guard($scope0_reason, 1) && $cg__input_n && _patch_fill($scope0_id, "va0", input.on, !_server_guard($scope0_reason, 1)), $cg__input_n && _content_withhold(input.on), _filled_guard($scope0_reason, 2) && $cg__input_on && _patch_fill($scope0_id, "va1", input.n, !_server_guard($scope0_reason, 2)), $cg__input_on && _content_withhold(input.n));
}, 1);
