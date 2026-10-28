// tags/shape.marko
var shape_default = _template("__tests__/tags/shape.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a = _write_guard($scope0_reason, 1), $wi__input_a = _write_if($scope0_reason, 1), $wi__input_x__OR__input_y = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $f2__closures = new Set();
	let n = 0;
	const f = _resume(function() {
		return input.a;
	}, "__tests__/tags/shape.marko_0/f", $scope0_id);
	const D = { content: _content("__tests__/tags/shape.marko_1*content", ({ on }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__on = _write_guard($scope1_reason, 0), $wi__on = _write_if($scope1_reason, 0);
		_if(() => {
			if (on) {
				const $scope2_id = _scope_id();
				_html(`<span>${_text_resume($scope2_id, "#text/0", f(), $wg__input_a)}</span>`);
				($wi__input_a || $wi__on) && _subscribe($wi__input_a && $f2__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/shape.marko", "2:52"), "__tests__/tags/shape.marko_2_f#0:10/subscribe", $wg__input_a);
				return 0;
			}
		}, $scope1_id, "#text/0", $wg__on, $wg__on, 0, 0, 1);
		($wi__input_a || $wi__on) && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/shape.marko", "2:34");
	}, $scope0_id) };
	_set_scope_reason(_write_guard($scope0_reason, 2) << 1);
	const $childScope = _peek_scope_id();
	D.content({ on: input.x });
	_set_scope_reason(_write_guard($scope0_reason, 3) << 1);
	const $childScope2 = _peek_scope_id();
	D.content({ on: input.y });
	_html(`<button>${_text_resume($scope0_id, "#text/3", n)}</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/tags/shape.marko_0");
	_scope($scope0_id, {
		input_a: $wi__input_x__OR__input_y && input.a,
		n,
		f: $wi__input_x__OR__input_y && f,
		"ClosureScopes:f/11": $wi__input_a && $f2__closures,
		"#childScope/0": _write_if($scope0_reason, 2) && _existing_scope($childScope),
		"#childScope/1": _write_if($scope0_reason, 3) && _existing_scope($childScope2)
	}, "__tests__/tags/shape.marko", 0, {
		input_a: ["input.a"],
		n: "1:6",
		f: "2:8"
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_write_guard($scope0_reason, 0) << 1 | _write_guard($scope0_reason, 2) << 3 | _write_guard($scope0_reason, 3) << 5 | _write_guard($scope0_reason, 4) << 7);
	const $childScope = _peek_scope_id();
	shape_default({
		a: input.a,
		x: input.x,
		y: input.y
	});
	_write_if($scope0_reason, 1) && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
