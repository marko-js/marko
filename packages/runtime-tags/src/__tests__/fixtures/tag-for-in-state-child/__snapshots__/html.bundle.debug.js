// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input = _write_guard($scope0_reason, 0), $wg__input_a = _write_guard($scope0_reason, 1), $wg__input_b = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "#text/0", input.a, $wg__input_a)}${_text_resume($scope0_id, "#text/1", input.b, $wg__input_b * 2)}${_text_resume($scope0_id, "#text/2", typeof input.get === "function" ? input.get() : "", $wg__input * 2)}</span>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});

// tags/shape.marko
var shape_default = _template("__tests__/tags/shape.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_sel = _write_guard($scope0_reason, 2), $wg__input_obj__OR__input_sel = _write_guard($scope0_reason, 0), $wi__input_b = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_b__closures = new Set();
	const $s__closures = new Set();
	let s = 0;
	_for_in(input.obj, (k, v) => {
		const $scope1_id = _scope_id();
		_if(() => {
			if (k === input.sel) {
				const $scope2_id = _scope_id();
				_set_scope_reason(42);
				const $childScope = _peek_scope_id();
				child_default({
					a: v + s,
					b: input.b
				});
				_subscribe($s__closures, _subscribe($wi__input_b && $input_b__closures, _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					"#childScope/0": _existing_scope($childScope)
				}, "__tests__/tags/shape.marko", "1:36"), "__tests__/tags/shape.marko_2_input_b#0:6/subscribe"), "__tests__/tags/shape.marko_2_s#0:7/subscribe");
				return 0;
			}
		}, $scope1_id, "#text/0", $wg__input_obj__OR__input_sel, $wg__input_sel, 0, 0, 1);
		_scope($scope1_id, {
			"#LoopKey": _write_if($scope0_reason, 2) && k,
			v,
			_: _scope_with_id($scope0_id)
		}, "__tests__/tags/shape.marko", "1:12", {
			"#LoopKey": "1:16",
			v: "1:19"
		});
	}, 0, $scope0_id, "#text/0", $wg__input_obj__OR__input_sel, _write_guard($scope0_reason, 1));
	_html(`<button></button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/tags/shape.marko_0");
	_scope($scope0_id, {
		input_sel: _write_if($scope0_reason, 1) && input.sel,
		input_b: input.b,
		s,
		"ClosureScopes:input_b/9": $wi__input_b && $input_b__closures,
		"ClosureScopes:s/10": $s__closures
	}, "__tests__/tags/shape.marko", 0, {
		input_sel: ["input.sel"],
		input_b: ["input.b"],
		s: "1:6"
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_write_guard($scope0_reason, 0) << 1 | _write_guard($scope0_reason, 2) << 3 | _write_guard($scope0_reason, 3) << 5 | _write_guard($scope0_reason, 4) << 7);
	const $childScope = _peek_scope_id();
	shape_default({
		obj: input.obj,
		sel: input.sel,
		b: input.b
	});
	_write_if($scope0_reason, 1) && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
