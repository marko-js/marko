// tags/card.marko
_shells({
	b0: "b0;D ;<p> </p>",
	b1: "b1;D ;<p> </p>",
	b: "b;b%;<!><!><!>"
});
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = input.n;
	_await($scope0_id, "a", Promise.resolve(n), (x) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "a", x, 1, (_mask_group($scope0_reason, 0) & 1) << 1, 0)}</p>`);
		_scope($scope1_id, {});
	}, 1, "b0", 1);
});

// template.marko
_shells({ a: "a !a0; D lD%;<button> </button><main><!></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_n = _client_guard($scope0_reason, 2), $cg__input_on = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let c = 0;
	_html(`<button>${_text_resume($scope0_id, "b", c)}</button>${_el_resume($scope0_id, "a")}<main>`);
	_dynamic_tag($scope0_id, "c", input.on ? card_default : "div", { n: input.n }, 1, 0, 0, _write_guard($scope0_reason, 0), $scope0_reason, 0);
	_html("</main>");
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.on,
		g: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.n,
		i: c
	}) || (_filled_guard($scope0_reason, 1) && $cg__input_n && _patch_fill($scope0_id, "va1", input.on, !_server_guard($scope0_reason, 1)), $cg__input_n && _content_withhold(input.on), _filled_guard($scope0_reason, 2) && $cg__input_on && _patch_fill($scope0_id, "va2", input.n, !_server_guard($scope0_reason, 2)), $cg__input_on && _content_withhold(input.n));
}, 1);
