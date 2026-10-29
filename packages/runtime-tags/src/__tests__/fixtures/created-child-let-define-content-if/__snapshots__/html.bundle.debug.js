// tags/outer.marko
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = input.data;
	_html(`<button>clear</button>${_el_resume($scope0_id, "#button/0")}<section>`);
	_dynamic_tag($scope0_id, "#text/1", value.content, {});
	_html("</section>");
	_script($scope0_id, "__tests__/tags/outer.marko_0");
	_scope($scope0_id, {}, "__tests__/tags/outer.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 1), $wi__input_label__OR__input_show = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 2), $wi__input_show = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const Body = { content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_if(() => {
			if (input.label !== "x") {
				const $scope2_id = _scope_id();
				_html(`<em>${_text_resume($scope2_id, "#text/0", input.label, $wg__input_label)}</em>`);
				$wi__input_label__OR__input_show && _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					"ClosureSignalIndex:input_label/7": $wi__input_label && 1
				}, "__tests__/template.marko", "1:15"), "__tests__/template.marko_2_input_label#0:3/subscribe", $wg__input_label);
				return 0;
			}
		}, $scope1_id, "#text/0", $wg__input_label, $wg__input_label, 0, 0, 1);
		$wi__input_label__OR__input_show && _subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2"), "__tests__/template.marko_1_input_label#0:3/subscribe", $wg__input_label);
		$wg__input_label || $wi__input_label__OR__input_show && _resume_branch($scope1_id);
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope3_id = _scope_id();
			outer_default({ data: { content: Body.content } });
			$wi__input_show && _scope($scope3_id, {}, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", $wg__input_show, $wg__input_show);
	$wi__input_label__OR__input_show && _scope($scope0_id, {
		input_label: $wi__input_show && input.label,
		Body_content: $wi__input_show && Body?.content,
		"ClosureScopes:input_label/7": $wi__input_label && $input_label__closures
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		Body_content: ["Body.content", "1:9"]
	});
}, 1);
