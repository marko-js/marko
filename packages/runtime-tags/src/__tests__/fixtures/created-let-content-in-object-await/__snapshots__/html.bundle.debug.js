// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, $wg__input_content);
	_html("</section>");
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// tags/outer.marko
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let o = { content: input.content };
	_html(`<button>x</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	card_default({ content: o.content });
	_script($scope0_id, "__tests__/tags/outer.marko_0");
	_scope($scope0_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/tags/outer.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 2), $wi__input_show__OR__input_label = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 2), $wi__input_show = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $input_show__closures = new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			outer_default({ content: _content("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				_html(`<em>static ${_text_resume($scope2_id, "#text/0", input.label, $wg__input_label * 2)}</em>`);
				$wi__input_show__OR__input_label && _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "2:17"), "__tests__/template.marko_2_input_label#0:5/subscribe", $wg__input_label);
				$wg__input_label || $wi__input_show__OR__input_label && _resume_branch($scope2_id);
			}, $scope1_id) });
			$wi__input_show__OR__input_label && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", $wg__input_show, $wg__input_show);
	_await($scope0_id, "#text/1", resolveAfter(input.label, 3), (v) => {
		const $scope3_id = _scope_id();
		_if(() => {
			if (input.show) {
				const $scope4_id = _scope_id();
				_html(`<div>${_text_resume($scope4_id, "#text/0", v, $wg__input_label)}</div>`);
				$wi__input_show__OR__input_label && _scope($scope4_id, { _: $wi__input_label && _scope_with_id($scope3_id) }, "__tests__/template.marko", "4:4");
				return 0;
			}
		}, $scope3_id, "#text/0", _write_guard($scope0_reason, 0), $wg__input_show, 0, 0, 1);
		$wi__input_show && _subscribe($input_show__closures, _scope($scope3_id, { v }, "__tests__/template.marko", "3:2", { v: "3:8" }), "__tests__/template.marko_3_input_show#0:4/subscribe", $wg__input_show);
		$wg__input_show || $wi__input_show && _resume_branch($scope3_id);
	}, $wg__input_show);
	$wi__input_show__OR__input_label && _scope($scope0_id, {
		input_label: $wi__input_show && input.label,
		"ClosureScopes:input_label/7": $wi__input_label && $input_label__closures,
		"ClosureScopes:input_show/6": $wi__input_show && $input_show__closures
	}, "__tests__/template.marko", 0, { input_label: ["input.label"] });
}, 1);
