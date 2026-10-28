// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_sel = _write_guard($scope0_reason, 3), $wg__input_obj__OR__input_sel = _write_guard($scope0_reason, 0), $wi__input_prefix = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $s__closures = new Set();
	const $fmt2__closures = new Set();
	let s = 0;
	const fmt = _resume((v) => input.prefix + v, "__tests__/tags/card.marko_0/fmt", $scope0_id);
	_for_in(input.obj, (k, v) => {
		const $scope1_id = _scope_id();
		_if(() => {
			if (k === input.sel) {
				const $scope2_id = _scope_id();
				_html(`<span>${_text_resume($scope2_id, "#text/0", fmt(v + s))}</span>`);
				_subscribe($wi__input_prefix && $fmt2__closures, _subscribe($s__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/card.marko", "3:26"), "__tests__/tags/card.marko_2_s#0:7/subscribe"), "__tests__/tags/card.marko_2_fmt#0:8/subscribe");
				return 0;
			}
		}, $scope1_id, "#text/0", $wg__input_obj__OR__input_sel, $wg__input_sel, 0, 0, 1);
		_scope($scope1_id, {
			"#LoopKey": _write_if($scope0_reason, 3) && k,
			v,
			_: _scope_with_id($scope0_id)
		}, "__tests__/tags/card.marko", "3:2", {
			"#LoopKey": "3:6",
			v: "3:9"
		});
	}, 0, $scope0_id, "#text/0", $wg__input_obj__OR__input_sel, _write_guard($scope0_reason, 2));
	_html(`<button class=s>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_scope($scope0_id, {
		input_prefix: input.prefix,
		input_sel: _write_if($scope0_reason, 2) && input.sel,
		s,
		fmt,
		"ClosureScopes:s/10": $s__closures,
		"ClosureScopes:fmt/11": $wi__input_prefix && $fmt2__closures
	}, "__tests__/tags/card.marko", 0, {
		input_prefix: ["input.prefix"],
		input_sel: ["input.sel"],
		s: "1:6",
		fmt: "2:8"
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let pre = "a";
	_set_scope_reason(8 | (_write_guard($scope0_reason, 0) << 1 | _write_guard($scope0_reason, 1) << 5 | _write_guard($scope0_reason, 2) << 7));
	const $childScope = _peek_scope_id();
	card_default({
		obj: input.obj,
		sel: input.sel,
		prefix: input.dyn ? pre : input.prefix
	});
	_html(`<button class=p>p</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_dyn: input.dyn,
		input_prefix: input.prefix,
		pre,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_dyn: ["input.dyn"],
		input_prefix: ["input.prefix"],
		pre: "1:6"
	});
}, 1);
