// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Outer = { content: _content("__tests__/template.marko_1*content", (input) => {
		const $scope1_id = _scope_id();
		const $Outer_content__label__closures = new Set();
		const $scope1_reason = _scope_reason(), $wg__input_depth = _write_guard($scope1_reason, 0);
		const Inner = { content: _content("__tests__/template.marko_2*content", (inner) => {
			const $scope2_id = _scope_id();
			const $scope2_reason = _scope_reason();
			_set_scope_reason(_write_guard($scope2_reason, 1) << 1);
			const $childScope = _peek_scope_id();
			Outer.content({
				depth: inner.depth,
				content: inner.content
			});
			_write_if($scope2_reason, 0) && _scope($scope2_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "2:4");
		}, $scope1_id) };
		let shown = false;
		const label = shown ? "on" : "off";
		_html(`<button>${_text_mark($scope1_id, "#text/1", input.depth, $wg__input_depth)}</button>${_el_mark($scope1_id, "#button/0")}`);
		_if(() => {
			if (shown) {
				const $scope3_id = _scope_id();
				_dynamic_tag($scope3_id, "#text/0", input.content, {}, 0, 0, 0);
				_scope($scope3_id, {}, "__tests__/template.marko", "8:4");
				return 0;
			}
		}, $scope1_id, "#text/2");
		_if(() => {
			if (input.depth < 1) {
				const $scope4_id = _scope_id();
				_set_scope_reason($wg__input_depth << 1 | $wg__input_depth << 3);
				const $childScope2 = _peek_scope_id();
				Inner.content({
					depth: input.depth + 1,
					content: _content_resume("__tests__/template.marko_5*content", () => {
						_scope_reason();
						const $scope5_id = _scope_id();
						_html(`<em>held ${_text_mark($scope5_id, "#text/0", label, 2)}</em>`);
						_subscribe($Outer_content__label__closures, _scope($scope5_id, { _: _scope_with_id($scope4_id) }, "__tests__/template.marko", "10:6"), "__tests__/template.marko_5_label#1:9/subscribe");
					}, $scope4_id)
				});
				_scope($scope4_id, {
					_: _scope_with_id($scope1_id),
					"#childScope/0": _write_if($scope1_reason, 0) && _existing_scope($childScope2)
				}, "__tests__/template.marko", "9:4");
				return 0;
			}
		}, $scope1_id, "#text/3", $wg__input_depth, $wg__input_depth);
		_script($scope1_id, "__tests__/template.marko_1");
		_scope($scope1_id, {
			input_content: input.content,
			shown,
			label,
			"ClosureScopes:label/12": $Outer_content__label__closures
		}, "__tests__/template.marko", "1:2", {
			input_content: ["input.content", "1:15"],
			shown: "5:8",
			label: "6:10"
		});
	}, $scope0_id) };
	Outer.content({ depth: 0 });
}, 1);
