// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $value_a__closures = new Set();
	const $value_b__closures = new Set();
	let value = {
		a: 1,
		b: 1
	};
	_html(`<button>inc</button>${_el_resume($scope0_id, "#button/0")}`);
	_try($scope0_id, "#text/1", _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "#text/0", resolveAfter(0, 1), () => {
			const $scope2_id = _scope_id();
			_html(`<span>${_text_resume($scope2_id, "#text/0", value.a + value.b)}</span>`);
			_subscribe($value_b__closures, _subscribe($value_a__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "6:4"), "__tests__/template.marko_2_value_a#3/subscribe"), "__tests__/template.marko_2_value_b#4/subscribe");
		});
		_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:2");
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_3*content", () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html("loading...");
	}, $scope0_id) }) }, 0);
	_script($scope0_id, "__tests__/template.marko_0_value_a#3");
	_scope($scope0_id, {
		value_a: value?.a,
		"ClosureScopes:value_a": $value_a__closures,
		"ClosureScopes:value_b": $value_b__closures
	}, "__tests__/template.marko", 0, { value_a: ["value.a", "2:6"] });
}, 1);
