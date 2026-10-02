// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const { foo: $foo, ...rest } = input.value || {};
	_if(() => {
		if (input.value) {
			const $scope1_id = _scope_id();
			_html(` -- ${_text_resume($scope1_id, "#text/0", input.value.foo, _write_guard($scope0_reason, 2) * 2)}<span`);
			_attrs_content(rest, "#span/1", $scope1_id, "span");
			_html(`</span>${_el_resume($scope1_id, "#span/1")}`);
			_script($scope1_id, "__tests__/template.marko_1_rest#0:5");
			_scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2", { "EventAttributes:#span/1": ["...rest", "6:12"] });
			return 0;
		}
	}, $scope0_id, "#text/0", $wg__input_value, $wg__input_value);
	_write_if($scope0_reason, 1) && _scope($scope0_id, {
		foo: input.value?.foo,
		rest
	}, "__tests__/template.marko", 0, {
		foo: "4:12",
		rest: "4:20"
	});
}, 1);
