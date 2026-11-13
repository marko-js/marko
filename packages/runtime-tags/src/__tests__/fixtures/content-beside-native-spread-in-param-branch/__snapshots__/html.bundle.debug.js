// tags/wrap.marko
var wrap_default = _template("__tests__/tags/wrap.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html("<div");
	_attrs_content(input, "#div/0", $scope0_id, "div");
	_html(`</div>${_el_mark($scope0_id, "#div/0")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, $wg__input_content);
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) }, "__tests__/tags/wrap.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/1", _write_guard($scope0_reason, 0), _write_guard($scope0_reason, 1));
	_script($scope0_id, "__tests__/tags/wrap.marko_0_input#3");
	_scope($scope0_id, { input_content: _write_if($scope0_reason, 1) && input.content }, "__tests__/tags/wrap.marko", 0, {
		input_content: ["input.content"],
		"EventAttributes:#div/0": ["...input", "1:9"]
	});
});

// tags/outer.marko
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1), $wi__input_value = _write_if($scope0_reason, 2), $wi__input_show = _write_if($scope0_reason, 1), $wi__input_show__OR__input_value = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_value__closures = new Set();
	_set_scope_reason($wg__input_show << 1 | $wg__input_show << 3 | $wg__input_show << 5);
	const $childScope = _peek_scope_id();
	wrap_default({
		show: input.show,
		content: _content_resume("__tests__/tags/outer.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_html(_text_mark($scope1_id, "#text/0", input.value, $wg__input_value));
			$wi__input_show__OR__input_value && _subscribe($wi__input_value && $input_value__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/outer.marko", "1:2"), "__tests__/tags/outer.marko_1_input_value#0:4/subscribe", $wg__input_value);
		}, $scope0_id)
	});
	$wi__input_show__OR__input_value && _scope($scope0_id, {
		input_value: $wi__input_show && input.value,
		"ClosureScopes:input_value/5": $wi__input_value && $input_value__closures,
		"#childScope/0": $wi__input_show && _existing_scope($childScope)
	}, "__tests__/tags/outer.marko", 0, { input_value: ["input.value"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 1;
	_set_scope_reason(42);
	const $childScope = _peek_scope_id();
	outer_default({
		value: x,
		show: x > 1
	});
	_html(`<button>inc</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		x,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { x: "1:6" });
}, 1);
