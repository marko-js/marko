// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const Tree = { content: _content("__tests__/template.marko_2*content", (input) => {
		const $scope2_id = _scope_id();
		const $Tree_content2__input_depth__closures = new Set();
		const $Tree_content2__input_content__closures = new Set();
		const $scope2_reason = _scope_reason(), $wg__input_depth = _write_guard($scope2_reason, 0), $wg__input_content = _write_guard($scope2_reason, 1), $wi__input_depth = _write_if($scope2_reason, 0), $wi__input_content = _write_if($scope2_reason, 1);
		let open = false;
		_html(`<button>${_text_resume($scope2_id, "#text/1", input.depth, $wg__input_depth)}</button>${_el_resume($scope2_id, "#button/0")}`);
		_if(() => {
			if (open) {
				const $scope3_id = _scope_id();
				_dynamic_tag($scope3_id, "#text/0", input.content, {}, 0, 0, $wg__input_content);
				_if(() => {
					if (input.depth) {
						const $scope4_id = _scope_id();
						_set_scope_reason($wg__input_depth << 1);
						const $childScope = _peek_scope_id();
						Tree.content({
							depth: input.depth - 1,
							content: _content_resume("__tests__/template.marko_5*content", () => {
								const $scope5_reason = _scope_reason();
								const $scope5_id = _scope_id();
								_html(`${_text_resume($scope5_id, "#text/0", input.depth, $wg__input_depth)}: `);
								_dynamic_tag($scope5_id, "#text/1", input.content, {}, 0, 0, $wg__input_content);
								_subscribe($wi__input_content && $Tree_content2__input_content__closures, _subscribe($wi__input_depth && $Tree_content2__input_depth__closures, _scope($scope5_id, {
									_: _scope_with_id($scope4_id),
									"ClosureSignalIndex:input_depth/8": $wi__input_depth && 1
								}, "__tests__/template.marko", "7:8"), "__tests__/template.marko_5_input_depth#2:5/subscribe", $wg__input_depth || $wg__input_content), "__tests__/template.marko_5_input_content#2:6/subscribe", $wg__input_depth || $wg__input_content);
								$wg__input_depth || $wg__input_content || _resume_branch($scope5_id);
							}, $scope4_id)
						});
						_subscribe($wi__input_depth && $Tree_content2__input_depth__closures, _scope($scope4_id, {
							_: _scope_with_id($scope3_id),
							"#childScope/0": $wi__input_depth && _existing_scope($childScope)
						}, "__tests__/template.marko", "6:6"), "__tests__/template.marko_4_input_depth#2:5/subscribe", $wg__input_depth);
						return 0;
					}
				}, $scope3_id, "#text/1", $wg__input_depth, $wg__input_depth, $wg__input_depth);
				_scope($scope3_id, {}, "__tests__/template.marko", "4:4");
				return 0;
			}
		}, $scope2_id, "#text/2");
		_script($scope2_id, "__tests__/template.marko_2");
		_scope($scope2_id, {
			input_depth: input.depth,
			input_content: input.content,
			open,
			"ClosureScopes:input_depth/8": $wi__input_depth && $Tree_content2__input_depth__closures,
			"ClosureScopes:input_content/9": $wi__input_content && $Tree_content2__input_content__closures
		}, "__tests__/template.marko", "1:2", {
			input_depth: ["input.depth", "1:14"],
			input_content: ["input.content", "1:14"],
			open: "2:8"
		});
	}, $scope0_id) };
	Tree.content({
		depth: 2,
		content: _content_resume("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_html(`leaf ${_text_resume($scope1_id, "#text/0", input.label, $wg__input_label * 2)}`);
			_subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "12:2"), "__tests__/template.marko_1_input_label#0:3/subscribe", $wg__input_label);
			$wg__input_label || _resume_branch($scope1_id);
		}, $scope0_id)
	});
	_scope($scope0_id, {
		input_label: input.label,
		"ClosureScopes:input_label/4": $wi__input_label && $input_label__closures
	}, "__tests__/template.marko", 0, { input_label: ["input.label"] });
}, 1);
