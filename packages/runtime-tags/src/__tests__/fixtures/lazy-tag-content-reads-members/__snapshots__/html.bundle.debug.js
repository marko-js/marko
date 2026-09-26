// child.marko
var child_default = _template("__tests__/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, $sg__input_content);
	_html("</section>");
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/child.marko", 0);
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "ready:__tests__/child.marko");
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
	$Child_withLoadAssets({ content: _content("__tests__/template.marko_1*content", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(_text_resume($scope1_id, "#text/0", value.a + value.b));
		_subscribe($value_b__closures, _subscribe($value_a__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:2"), "__tests__/template.marko_1_value_a#4/subscribe"), "__tests__/template.marko_1_value_b#5/subscribe");
	}, $scope0_id) });
	_script($scope0_id, "__tests__/template.marko_0_value_a#4");
	_scope($scope0_id, {
		value_a: value?.a,
		"ClosureScopes:value_a": $value_a__closures,
		"ClosureScopes:value_b": $value_b__closures
	}, "__tests__/template.marko", 0, { value_a: ["value.a", "3:6"] });
}, 1);
