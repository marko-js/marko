// tags/inner.marko
var inner_default = _template("__tests__/tags/inner.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div></div>${_el_resume($scope0_id, "#div/0")}`);
	_script($scope0_id, "__tests__/tags/inner.marko_0_input#2");
	_scope($scope0_id, { input }, "__tests__/tags/inner.marko", 0, { input: 0 });
});

// tags/outer.marko
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = input.data;
	const fn = _resume(function() {
		return value.b;
	}, "__tests__/tags/outer.marko_0/fn", $scope0_id);
	_html(`<button class=set>set</button>${_el_resume($scope0_id, "#button/0")}`);
	inner_default({ fn });
	_script($scope0_id, "__tests__/tags/outer.marko_0");
	_scope($scope0_id, { value_b: value?.b }, "__tests__/tags/outer.marko", 0, { value_b: ["value.b", "1:6"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			outer_default({ data: {
				a: "x",
				b: input.label,
				c: { d: input.label },
				items: [input.label, "y"]
			} });
			_write_if($scope0_reason, 0) && _scope($scope1_id, {
				_: $wi__input_label && _scope_with_id($scope0_id),
				"#childScope/0": $wi__input_label && _existing_scope($childScope)
			}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", _write_guard($scope0_reason, 0), $wg__input_show);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { input_label: input.label }, "__tests__/template.marko", 0, { input_label: ["input.label"] });
}, 1);
