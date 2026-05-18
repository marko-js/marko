// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_value = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_value__closures = new Set();
	let Parent = "div";
	let Child = "a";
	_html(`<div><svg>${_unescaped(input.value)}${_el_resume($scope0_id, "#text/1", $sg__input_value)}`);
	_dynamic_tag($scope0_id, "#text/2", Child, { href: "#bar" }, _content_resume("__tests__/template.marko_2_content", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html("Hi");
	}, $scope0_id));
	_html(`</svg><math>${_unescaped(input.value)}${_el_resume($scope0_id, "#text/3", $sg__input_value)}`);
	_dynamic_tag($scope0_id, "#text/4", Child, { href: "#bar" }, _content_resume("__tests__/template.marko_3_content", () => {
		const $scope3_id = _scope_id();
		_scope_reason();
		_html("Hi");
	}, $scope0_id));
	_html("</math>");
	_dynamic_tag($scope0_id, "#text/5", Parent, {}, _content_resume("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`${_unescaped(input.value)}${_el_resume($scope1_id, "#text/0", $sg__input_value)}`);
		_subscribe($input_value__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "12:3"));
		_resume_branch($scope1_id);
	}, $scope0_id));
	_html(`<button class=toggle-parent>Toggle Parent</button>${_el_resume($scope0_id, "#button/6")}<button class=toggle-child>Toggle Child</button>${_el_resume($scope0_id, "#button/7")}</div>${_el_resume($scope0_id, "#div/0")}`);
	_script($scope0_id, "__tests__/template.marko_0_Parent_Child");
	_script($scope0_id, "__tests__/template.marko_0_Child");
	_script($scope0_id, "__tests__/template.marko_0_Parent");
	writeScope($scope0_id, {
		input_value: input.value,
		Parent,
		Child,
		"ClosureScopes:input_value": _serialize_if($scope0_reason, 0) && $input_value__closures
	}, "__tests__/template.marko", 0, {
		input_value: ["input.value"],
		Parent: "1:5",
		Child: "2:5"
	});
	_resume_branch($scope0_id);
}, 1);
