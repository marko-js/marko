// tags/conditional.marko
var conditional_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on = _write_guard($scope0_reason, 0), $wi__input_on = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.on) {
			const $scope1_id = _scope_id();
			_html("<b>B</b>");
			$wi__input_on && _scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", $wg__input_on, $wg__input_on, 0, 0, 1);
	_html("<i>tail</i>");
	$wi__input_on && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let visible = false;
	let inner = true;
	_html(`<button id=t>t</button>${_el_resume($scope0_id, "a")}<button id=i>i</button>${_el_resume($scope0_id, "b")}<div id=c>x `);
	_show_start(visible);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	conditional_default({ on: inner });
	_show_end($scope0_id, "e", visible);
	_html(" y</div>");
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		f: visible,
		g: inner,
		d: _existing_scope($childScope)
	});
}, 1);
