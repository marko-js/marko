// tags/outer.marko
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let T = input.fmt;
	_dynamic_tag($scope0_id, "#text/0", T, {}, 0, 0, 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 2), $wi__input_items__OR__input_label = _write_if($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 2), $wg__input_items = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	_for_of(input.items, (v) => {
		const $scope1_id = _scope_id();
		const Body = { content: _content("__tests__/template.marko_2*content", () => {
			const $scope2_id = _scope_id();
			const $scope2_reason = _scope_reason();
			_html(`<p>${_text_resume($scope2_id, "#text/0", v + input.label, $wg__input_label)}</p>`);
			$wi__input_items__OR__input_label && _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "1:35"), "__tests__/template.marko_2_input_label#0:4/subscribe", $wg__input_label);
			$wg__input_label || $wi__input_items__OR__input_label && _resume_branch($scope2_id);
		}, $scope1_id) };
		outer_default({ fmt: Body });
		$wi__input_items__OR__input_label && _scope($scope1_id, {
			"#LoopKey": $wi__input_label && v,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "1:2", { "#LoopKey": "1:6" });
	}, (v) => v, $scope0_id, "#text/0", $wg__input_items, $wg__input_items);
	$wi__input_items__OR__input_label && _scope($scope0_id, {
		input_label: _write_if($scope0_reason, 1) && input.label,
		"ClosureScopes:input_label/5": $wi__input_label && $input_label__closures
	}, "__tests__/template.marko", 0, { input_label: ["input.label"] });
}, 1);
