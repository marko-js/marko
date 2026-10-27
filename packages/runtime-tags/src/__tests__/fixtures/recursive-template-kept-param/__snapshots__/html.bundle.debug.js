// tags/keeper.marko
var keeper_default = _template("__tests__/tags/keeper.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button class=toggle>t</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, $wg__input_content);
			_scope($scope1_id, {}, "__tests__/tags/keeper.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/tags/keeper.marko_0");
	_scope($scope0_id, {
		input_content: input.content,
		open
	}, "__tests__/tags/keeper.marko", 0, {
		input_content: ["input.content"],
		open: "1:6"
	});
});

// tags/level.marko
const $content = (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_n = _write_guard($scope0_reason, 1), $wg__input_label = _write_guard($scope0_reason, 2), $wg__input_n__OR__input_label = _write_guard($scope0_reason, 0), $wg__input_content = _write_guard($scope0_reason, 3), $wi__input_n = _write_if($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_n__closures = new Set();
	const $input_label__closures = new Set();
	_if(() => {
		if (input.n) {
			const $scope1_id = _scope_id();
			_set_scope_reason($wg__input_n__OR__input_label << 1 | $wg__input_n << 3 | $wg__input_label << 5);
			const $childScope = _peek_scope_id();
			$content({
				n: input.n - 1,
				label: input.label,
				content: _content_resume("__tests__/tags/level.marko_2*content", () => {
					const $scope2_reason = _scope_reason();
					const $scope2_id = _scope_id();
					_html(`<em>${_text_resume($scope2_id, "#text/0", input.n, $wg__input_n)}:${_text_resume($scope2_id, "#text/1", input.label, $wg__input_label * 2)}</em>`);
					_subscribe($wi__input_label && $input_label__closures, _subscribe($wi__input_n && $input_n__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/level.marko", "2:4"), "__tests__/tags/level.marko_2_input_n#0:4/subscribe", $wg__input_n || $wg__input_label), "__tests__/tags/level.marko_2_input_label#0:5/subscribe", $wg__input_n || $wg__input_label);
					$wg__input_n || $wg__input_label || _resume_branch($scope2_id);
				}, $scope1_id)
			});
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _write_if($scope0_reason, 0) && _existing_scope($childScope)
			}, "__tests__/tags/level.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", $wg__input_n__OR__input_label, $wg__input_n);
	_set_scope_reason($wg__input_content << 1);
	const $childScope2 = _peek_scope_id();
	keeper_default({ content: input.content });
	_scope($scope0_id, {
		input_n: input.n,
		input_label: input.label,
		"ClosureScopes:input_n/7": $wi__input_n && $input_n__closures,
		"ClosureScopes:input_label/8": $wi__input_label && $input_label__closures,
		"#childScope/1": _write_if($scope0_reason, 3) && _existing_scope($childScope2)
	}, "__tests__/tags/level.marko", 0, {
		input_n: ["input.n"],
		input_label: ["input.label"]
	});
};
var level_default = _template("__tests__/tags/level.marko", $content);

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<main>");
	_set_scope_reason($wg__input_label << 1 | $wg__input_label << 5);
	const $childScope = _peek_scope_id();
	level_default({
		n: 2,
		label: input.label
	});
	_html("</main>");
	_write_if($scope0_reason, 0) && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
