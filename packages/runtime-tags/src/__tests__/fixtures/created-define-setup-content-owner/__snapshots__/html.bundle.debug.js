// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 2), $wi__input_show__OR__input_label = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const Card = { content: _content("__tests__/template.marko_3*content", (input) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason();
		let n = 0;
		_html(`<section><button>${_text_resume($scope3_id, "#text/1", n)}</button>${_el_resume($scope3_id, "#button/0")}`);
		_dynamic_tag($scope3_id, "#text/2", input.content, {}, 0, 0, _write_guard($scope3_reason, 0));
		_html("</section>");
		_script($scope3_id, "__tests__/template.marko_3");
		_scope($scope3_id, { n }, "__tests__/template.marko", "1:2", { n: "2:8" });
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			Card.content({ content: _content("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				_html(`<em>static ${_text_resume($scope2_id, "#text/0", input.label, $wg__input_label * 2)}</em>`);
				$wi__input_show__OR__input_label && _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "9:4"), "__tests__/template.marko_2_input_label#0:4/subscribe", $wg__input_label);
				$wg__input_label || $wi__input_show__OR__input_label && _resume_branch($scope2_id);
			}, $scope1_id) });
			$wi__input_show__OR__input_label && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "8:2");
			return 0;
		}
	}, $scope0_id, "#text/0", $wg__input_show, $wg__input_show);
	$wi__input_show__OR__input_label && _scope($scope0_id, {
		input_label: _write_if($scope0_reason, 1) && input.label,
		"ClosureScopes:input_label/5": $wi__input_label && $input_label__closures
	}, "__tests__/template.marko", 0, { input_label: ["input.label"] });
}, 1);
