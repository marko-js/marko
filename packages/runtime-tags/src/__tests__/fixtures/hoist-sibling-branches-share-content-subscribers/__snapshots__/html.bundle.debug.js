// tags/wrap.marko
var wrap_default = _template("__tests__/tags/wrap.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, $wg__input_content);
	_html("</div>");
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/wrap.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a = _write_guard($scope0_reason, 1), $wg__input_b = _write_guard($scope0_reason, 2), $wi__input_a = _write_if($scope0_reason, 1), $wi__input_b = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $el1_getter = _hoist($scope0_id, "__tests__/template.marko_0_#p#2:0/hoist");
	const $wrap_content__subscribers = new Set();
	const $el2_getter = _hoist($scope0_id, "__tests__/template.marko_0_#span#3:0/hoist");
	const $input_a__closures = new Set();
	const $input_b__closures = new Set();
	wrap_default({ content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_if(() => {
			if (input.a) {
				const $scope2_id = _scope_id();
				_html(`<p></p>${_el_resume($scope2_id, "#p/0")}`);
				_scope($scope2_id, {}, "__tests__/template.marko", "2:4");
				return 0;
			}
		}, $scope1_id, "#text/0", 1, $wg__input_a, 0, 0, 1);
		_if(() => {
			if (input.b) {
				const $scope3_id = _scope_id();
				_html(`<span></span>${_el_resume($scope3_id, "#span/0")}`);
				_scope($scope3_id, {}, "__tests__/template.marko", "3:4");
				return 0;
			}
		}, $scope1_id, "#text/1", 1, $wg__input_b, 0, 0, 1);
		_subscribe($wi__input_b && $input_b__closures, _subscribe($wi__input_a && $input_a__closures, _subscribe($wrap_content__subscribers, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2")), "__tests__/template.marko_1_input_a#0:4/subscribe", $wg__input_a || $wg__input_b), "__tests__/template.marko_1_input_b#0:5/subscribe", $wg__input_a || $wg__input_b);
		$wg__input_a || $wg__input_b || _resume_branch($scope1_id);
	}, $scope0_id) });
	_html(`<button>set</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		"ClosureScopes:1": $wrap_content__subscribers,
		"ClosureScopes:input_a/6": $wi__input_a && $input_a__closures,
		"ClosureScopes:input_b/7": $wi__input_b && $input_b__closures
	}, "__tests__/template.marko", 0);
}, 1);
