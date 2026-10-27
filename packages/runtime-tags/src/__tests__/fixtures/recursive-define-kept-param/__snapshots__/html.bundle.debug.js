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

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Level = { content: _content("__tests__/template.marko_1*content", ({ n, label, content }) => {
		const $scope1_id = _scope_id();
		const $Level_content__n__closures = new Set();
		const $Level_content__label__closures = new Set();
		const $scope1_reason = _scope_reason(), $wg__n = _write_guard($scope1_reason, 1), $wg__label = _write_guard($scope1_reason, 2), $wg__n__OR__label = _write_guard($scope1_reason, 0), $wg__content = _write_guard($scope1_reason, 3), $wi__n = _write_if($scope1_reason, 1), $wi__label = _write_if($scope1_reason, 2);
		_if(() => {
			if (n) {
				const $scope2_id = _scope_id();
				_set_scope_reason($wg__n__OR__label << 1 | $wg__n << 3 | $wg__label << 5);
				const $childScope = _peek_scope_id();
				Level.content({
					n: n - 1,
					label,
					content: _content_resume("__tests__/template.marko_3*content", () => {
						const $scope3_reason = _scope_reason();
						const $scope3_id = _scope_id();
						_html(`<em>${_text_resume($scope3_id, "#text/0", n, $wg__n)}:${_text_resume($scope3_id, "#text/1", label, $wg__label * 2)}</em>`);
						_subscribe($wi__label && $Level_content__label__closures, _subscribe($wi__n && $Level_content__n__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "3:6"), "__tests__/template.marko_3_n#1:4/subscribe", $wg__n || $wg__label), "__tests__/template.marko_3_label#1:5/subscribe", $wg__n || $wg__label);
						$wg__n || $wg__label || _resume_branch($scope3_id);
					}, $scope2_id)
				});
				_scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					"#childScope/0": _write_if($scope1_reason, 0) && _existing_scope($childScope)
				}, "__tests__/template.marko", "2:4");
				return 0;
			}
		}, $scope1_id, "#text/0", $wg__n__OR__label, $wg__n);
		_set_scope_reason($wg__content << 1);
		const $childScope2 = _peek_scope_id();
		keeper_default({ content });
		_scope($scope1_id, {
			n,
			label,
			"ClosureScopes:n/7": $wi__n && $Level_content__n__closures,
			"ClosureScopes:label/8": $wi__label && $Level_content__label__closures,
			"#childScope/1": _write_if($scope1_reason, 3) && _existing_scope($childScope2)
		}, "__tests__/template.marko", "1:2", {
			n: "1:17",
			label: "1:20"
		});
	}, $scope0_id) };
	_html("<main>");
	_set_scope_reason($wg__input_label << 1 | $wg__input_label << 5);
	const $childScope3 = _peek_scope_id();
	Level.content({
		n: 2,
		label: input.label
	});
	_html("</main>");
	_write_if($scope0_reason, 0) && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope3) }, "__tests__/template.marko", 0);
}, 1);
