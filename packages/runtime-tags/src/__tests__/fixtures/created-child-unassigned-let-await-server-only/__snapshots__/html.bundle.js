// tags/card.marko
var card_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = input.n;
	_await($scope0_id, "a", Promise.resolve(n), (x) => {
		_scope_id();
		_html(`<p>${_escape(x)}</p>`);
	}, 0);
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on__OR__input_n = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.on ? card_default : "div", { n: input.n }, 0, 0, $wg__input_on__OR__input_n);
	_html("</main>");
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		d: _write_if($scope0_reason, 2) && input.on,
		e: _write_if($scope0_reason, 1) && input.n
	});
}, 1);
