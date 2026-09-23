// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.content, [undefined], 0, 1, $sg__input_content);
	_dynamic_tag($scope0_id, "#text/1", input.content, ["given"], 0, 1, $sg__input_content);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $fallback__closures = new Set();
	let fallback = "default";
	_html(`<button id=change>change</button>${_el_resume($scope0_id, "#button/0")}`);
	child_default({ content: _content("__tests__/template.marko_1*content", ($y) => {
		_scope_reason();
		const $scope1_id = _scope_id();
		const y = void 0 !== $y ? $y : fallback;
		_html(`<p>${_text_resume($scope1_id, "#text/0", y)}</p>`);
		_subscribe($fallback__closures, _scope($scope1_id, {
			$y,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "3:2", { $y: "3:8" }));
	}, $scope0_id) });
	child_default({});
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		fallback,
		"ClosureScopes:fallback": $fallback__closures
	}, "__tests__/template.marko", 0, { fallback: "1:6" });
}, 1);
