// tags/counter.marko
var counter_default = _template("__tests__/tags/counter.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=inc>${_text_resume($scope0_id, "#text/1", n)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/counter.marko_0");
	_scope($scope0_id, { n }, "__tests__/tags/counter.marko", 0, { n: "1:6" });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a__OR__input_items = _write_guard($scope0_reason, 0), $wg__input_a = _write_guard($scope0_reason, 3), $wg__input_x = _write_guard($scope0_reason, 5), $wi__input_x = _write_if($scope0_reason, 5), $wi__input_a__OR__input_items__OR__input_x = _write_if($scope0_reason, 2), $wg__input_a__OR__input_items__OR__input_x = _write_guard($scope0_reason, 2), $wg__input_value = _write_guard($scope0_reason, 6), $wi__input_a = _write_if($scope0_reason, 3), $wi__input_a__OR__input_value = _write_if($scope0_reason, 1), $wg__input_items = _write_guard($scope0_reason, 4), $wi__input_items = _write_if($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $f2__closures = new Set();
	const $input_x__closures = new Set();
	const f = _resume(function() {
		return input.a;
	}, "__tests__/template.marko_0/f", $scope0_id);
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const v = input.a + item;
		const g = _resume(function() {
			return v;
		}, "__tests__/template.marko_1/g", $scope1_id);
		_html(`<span>${_text_resume($scope1_id, "#text/0", f(), $wg__input_a)}</span>`);
		_if(() => {
			if (input.x) {
				const $scope4_id = _scope_id();
				_html(`<em>${_text_resume($scope4_id, "#text/0", g(), $wg__input_a__OR__input_items)}</em>`);
				$wi__input_a__OR__input_items__OR__input_x && _scope($scope4_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope1_id) }, "__tests__/template.marko", "6:4");
				return 0;
			}
		}, $scope1_id, "#text/1", $wg__input_a__OR__input_items__OR__input_x, $wg__input_x, 0, 0, 1);
		$wi__input_a__OR__input_items__OR__input_x && _scope($scope1_id, {
			item: $wi__input_a && item,
			v: $wi__input_x && v,
			g: $wi__input_x && g,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "2:2", {
			item: "2:6",
			v: "3:10",
			g: "4:10"
		});
	}, 0, $scope0_id, "#text/0", $wg__input_a__OR__input_items__OR__input_x, $wg__input_items);
	_await($scope0_id, "#text/1", input.value, (v) => {
		const $scope3_id = _scope_id();
		_html(`<b>${_text_resume($scope3_id, "#text/0", v, $wg__input_value)}${_text_resume($scope3_id, "#text/1", f(), $wg__input_a * 2)}</b>`);
		$wi__input_a__OR__input_value && _subscribe($wi__input_a && $f2__closures, _scope($scope3_id, {}, "__tests__/template.marko", "8:2"), "__tests__/template.marko_3_f#0:10/subscribe", $wg__input_a || $wg__input_value);
		$wg__input_a || $wg__input_value || $wi__input_a__OR__input_value && _resume_branch($scope3_id);
	}, _write_guard($scope0_reason, 1));
	const Show = { content: _content("__tests__/template.marko_2*content", ({ v }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__v = _write_guard($scope2_reason, 0), $wi__v = _write_if($scope2_reason, 0);
		const h = _resume(function() {
			return v;
		}, "__tests__/template.marko_2/h", $scope2_id);
		_if(() => {
			if (input.x) {
				const $scope5_id = _scope_id();
				_html(`<i>${_text_resume($scope5_id, "#text/0", h(), $wg__v)}</i>`);
				($wi__input_x || $wi__v) && _scope($scope5_id, { _: $wi__v && _scope_with_id($scope2_id) }, "__tests__/template.marko", "11:4");
				return 0;
			}
		}, $scope2_id, "#text/0", $wg__input_x || $wg__v, $wg__input_x, 0, 0, 1);
		$wi__input_x && _subscribe($input_x__closures, _scope($scope2_id, {
			v,
			h,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "9:2", {
			v: "9:16",
			h: "10:10"
		}), "__tests__/template.marko_2_input_x#0:8/subscribe", $wg__input_x);
		$wg__input_x || $wi__input_x && _resume_branch($scope2_id);
	}, $scope0_id) };
	_set_scope_reason($wg__input_a << 1);
	const $childScope = _peek_scope_id();
	Show.content({ v: input.a });
	counter_default({});
	$wi__input_a__OR__input_items__OR__input_x && _scope($scope0_id, {
		input_a: $wi__input_items && input.a,
		input_x: $wi__input_items && input.x,
		f: $wi__input_items && f,
		"ClosureScopes:f/13": $wi__input_a && $f2__closures,
		"ClosureScopes:input_x/12": $wi__input_x && $input_x__closures,
		"#childScope/2": $wi__input_a && _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_a: ["input.a"],
		input_x: ["input.x"],
		f: "1:8"
	});
}, 1);
