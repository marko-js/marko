// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a = _write_guard($scope0_reason, 4), $wi__input_on__OR__input_a = _write_if($scope0_reason, 0), $wg__input_b = _write_guard($scope0_reason, 5), $wi__input_on__OR__input_b = _write_if($scope0_reason, 1), $wg__input_on = _write_guard($scope0_reason, 3), $wi__input_on = _write_if($scope0_reason, 3), $wi__input_a = _write_if($scope0_reason, 4), $wi__input_b = _write_if($scope0_reason, 5);
	const $scope0_id = _scope_id();
	const $input_a__closures = new Set();
	const $input_b__closures = new Set();
	const Wrap = { content: _content_resume("__tests__/template.marko_3*content", ({ item }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $wg__item = _write_guard($scope3_reason, 0);
		let open = true;
		_html(`<button class=toggle>t</button>${_el_resume($scope3_id, "#button/0")}`);
		_if(() => {
			if (open) {
				const $scope4_id = _scope_id();
				_for_of(item, (it) => {
					const $scope5_id = _scope_id();
					_dynamic_tag($scope5_id, "#text/0", it, {}, 0, 0, $wg__item);
					_write_if($scope3_reason, 0) && _scope($scope5_id, {}, "__tests__/template.marko", "4:13");
				}, 0, $scope4_id, "#text/0", $wg__item, $wg__item);
				_scope($scope4_id, {}, "__tests__/template.marko", "4:4");
				return 0;
			}
		}, $scope3_id, "#text/1");
		_script($scope3_id, "__tests__/template.marko_3");
		_scope($scope3_id, {
			item,
			open
		}, "__tests__/template.marko", "1:2", {
			item: "1:16",
			open: "2:8"
		});
	}, $scope0_id) };
	const Plain = { content: _content_resume("__tests__/template.marko_6*content", ({ item }) => {
		const $scope6_id = _scope_id();
		const $scope6_reason = _scope_reason(), $wg__item2 = _write_guard($scope6_reason, 0), $wi__item = _write_if($scope6_reason, 0);
		_for_of(item, (it) => {
			const $scope7_id = _scope_id();
			_dynamic_tag($scope7_id, "#text/0", it, {}, 0, 0, $wg__item2);
			$wi__item && _scope($scope7_id, {}, "__tests__/template.marko", "7:4");
		}, 0, $scope6_id, "#text/0", $wg__item2, $wg__item2);
		$wi__item && _scope($scope6_id, {}, "__tests__/template.marko", "6:2");
	}, $scope0_id) };
	_html("<main>");
	_dynamic_tag($scope0_id, "#text/0", input.on ? Wrap : Plain, { item: attrTags(attrTag({ content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<em>${_text_resume($scope1_id, "#text/0", input.a, $wg__input_a)}</em>`);
		$wi__input_on__OR__input_a && _subscribe($wi__input_a && $input_a__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "11:6"), "__tests__/template.marko_1_input_a#0:4/subscribe", $wg__input_a);
		$wg__input_a || $wi__input_on__OR__input_a && _resume_branch($scope1_id);
	}, $scope0_id, ($scope) => [{ input_a: input.a }]) }), { content: _content_resume("__tests__/template.marko_2*content", () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html(`<b>${_text_resume($scope2_id, "#text/0", input.b, $wg__input_b)}</b>`);
		$wi__input_on__OR__input_b && _subscribe($wi__input_b && $input_b__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "12:6"), "__tests__/template.marko_2_input_b#0:5/subscribe", $wg__input_b);
		$wg__input_b || $wi__input_on__OR__input_b && _resume_branch($scope2_id);
	}, $scope0_id, ($scope2) => [{ input_b: input.b }]) }) }, 0, 0, $wg__input_on);
	_html("</main>");
	_write_if($scope0_reason, 2) && _scope($scope0_id, {
		input_a: $wi__input_on && input.a,
		input_b: $wi__input_on && input.b,
		Wrap: $wi__input_on && Wrap,
		Plain: $wi__input_on && Plain,
		"ClosureScopes:input_a/9": $wi__input_a && $input_a__closures,
		"ClosureScopes:input_b/10": $wi__input_b && $input_b__closures
	}, "__tests__/template.marko", 0, {
		input_a: ["input.a"],
		input_b: ["input.b"],
		Wrap: "1:9",
		Plain: "6:9"
	});
}, 1);
