// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_if(() => {
		if (true) {
			const $scope1_id = _scope_id();
			const { value: $value2, valueChange: $valueChange3, ...rest } = input;
			_html(`<button${_attrs_partial(rest, { "on-click": 1 }, "#button/0", $scope1_id, "button")}>${_text_resume($scope1_id, "#text/1", input.value, _write_guard($scope0_reason, 1))}</button>${_el_resume($scope1_id, "#button/0")}`);
			_script($scope1_id, "__tests__/tags/child.marko_1_rest#0:5");
			_script($scope1_id, "__tests__/tags/child.marko_1_$valueChange#0:4");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/child.marko", "1:2", { "EventAttributes:#button/0": ["...rest", "1:54"] });
			return 0;
		}
	}, $scope0_id, "#text/0", _write_guard($scope0_reason, 0), 0, 0, 0, 1);
	_scope($scope0_id, {
		value: input.value,
		$valueChange: input.valueChange
	}, "__tests__/tags/child.marko", 0, {
		value: "1:19",
		$valueChange: "1:71"
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let v = 1;
	_set_scope_reason(10);
	const $childScope = _peek_scope_id();
	child_default({
		value: v,
		valueChange: _resume((_new_v) => {
			v = _new_v;
		}, "__tests__/template.marko_0/valueChange", $scope0_id),
		class: "c"
	});
	_html(`<em>${_text_resume($scope0_id, "#text/1", v)}</em>`);
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
