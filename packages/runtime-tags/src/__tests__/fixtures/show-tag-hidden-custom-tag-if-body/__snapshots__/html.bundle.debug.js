// tags/conditional.marko
var conditional_default = _template("__tests__/tags/conditional.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on = _write_guard($scope0_reason, 0), $wi__input_on = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.on) {
			const $scope1_id = _scope_id();
			_html("<b>B</b>");
			$wi__input_on && _scope($scope1_id, {}, "__tests__/tags/conditional.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", $wg__input_on, $wg__input_on, 0, 0, 1);
	_html("<i>tail</i>");
	$wi__input_on && _scope($scope0_id, {}, "__tests__/tags/conditional.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let visible = false;
	let inner = true;
	_html(`<button id=t>t</button>${_el_resume($scope0_id, "#button/0")}<button id=i>i</button>${_el_resume($scope0_id, "#button/1")}<div id=c>x `);
	_show_start(visible);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	conditional_default({ on: inner });
	_show_end($scope0_id, "#text/4", visible);
	_html(" y</div>");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		visible,
		inner,
		"#childScope/3": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		visible: "1:6",
		inner: "2:6"
	});
}, 1);
