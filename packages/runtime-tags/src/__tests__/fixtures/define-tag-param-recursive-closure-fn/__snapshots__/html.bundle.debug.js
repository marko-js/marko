// tags/counter.marko
var counter_default = _template("__tests__/tags/counter.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", n)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/counter.marko_0");
	_scope($scope0_id, { n }, "__tests__/tags/counter.marko", 0, { n: "1:6" });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a = _write_guard($scope0_reason, 1), $wi__input_a = _write_if($scope0_reason, 1), $wg__input_x = _write_guard($scope0_reason, 2), $wi__input_x = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $f2__closures = new Set();
	const f = _resume(function() {
		return input.a;
	}, "__tests__/template.marko_0/f", $scope0_id);
	const D = { content: _content("__tests__/template.marko_1*content", ({ on, depth }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__on = _write_guard($scope1_reason, 1), $wg__on__OR__depth = _write_guard($scope1_reason, 0), $wi__on__OR__depth = _write_if($scope1_reason, 0), $wg__depth = _write_guard($scope1_reason, 2);
		_if(() => {
			if (depth) {
				const $scope2_id = _scope_id();
				_html(`<span>${_text_resume($scope2_id, "#text/0", on && f(), $wg__input_a || $wg__on)}</span>`);
				_set_scope_reason($wg__on__OR__depth << 1 | $wg__on << 3 | $wg__depth << 5);
				const $childScope = _peek_scope_id();
				D.content({
					on,
					depth: depth - 1
				});
				($wi__input_a || $wi__on__OR__depth) && _subscribe($wi__input_a && $f2__closures, _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					"#childScope/1": $wi__on__OR__depth && _existing_scope($childScope)
				}, "__tests__/template.marko", "3:4"), "__tests__/template.marko_2_f#0:6/subscribe", $wg__input_a || $wg__on || $wg__on__OR__depth);
				return 0;
			}
		}, $scope1_id, "#text/0", $wg__on__OR__depth, $wg__depth);
		($wi__input_a || $wi__on__OR__depth) && _scope($scope1_id, {
			on: ($wi__input_a || _write_if($scope1_reason, 2)) && on,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "2:2", { on: "2:13" });
	}, $scope0_id) };
	_set_scope_reason($wg__input_x << 1 | $wg__input_x << 3);
	const $childScope2 = _peek_scope_id();
	D.content({
		on: input.x,
		depth: 2
	});
	counter_default({});
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		input_a: $wi__input_x && input.a,
		f: $wi__input_x && f,
		"ClosureScopes:f/7": $wi__input_a && $f2__closures,
		"#childScope/0": $wi__input_x && _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, {
		input_a: ["input.a"],
		f: "1:8"
	});
}, 1);
