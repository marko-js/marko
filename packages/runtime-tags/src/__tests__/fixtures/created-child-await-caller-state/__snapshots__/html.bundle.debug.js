// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_promise = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_await($scope0_id, "#text/0", input.promise, (x) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "#text/0", x, $wg__input_promise)}</p>`);
		_write_if($scope0_reason, 0) && _scope($scope1_id, {}, "__tests__/tags/card.marko", "1:2");
	}, $wg__input_promise);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 1;
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(2);
			const $childScope = _peek_scope_id();
			card_default({ promise: Promise.resolve(n) });
			_set_scope_reason(_write_guard($scope0_reason, 1) << 1);
			const $childScope2 = _peek_scope_id();
			card_default({ promise: input.p });
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope),
				"#childScope/1": _write_if($scope0_reason, 1) && _existing_scope($childScope2)
			}, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, _write_guard($scope0_reason, 0));
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_p: _write_if($scope0_reason, 0) && input.p,
		n
	}, "__tests__/template.marko", 0, {
		input_p: ["input.p"],
		n: "1:6"
	});
}, 1);
