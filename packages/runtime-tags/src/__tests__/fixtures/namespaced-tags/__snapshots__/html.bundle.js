// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_value = _serialize_guard($scope0_reason, 0), $si__input_value = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_value__closures = /* @__PURE__ */ new Set();
	let Parent = "div";
	let Child = "a";
	_html(`<div><svg>${_unescaped(input.value)}${_el_resume($scope0_id, "b", $sg__input_value)}`);
	_dynamic_tag($scope0_id, "c", Child, { href: "#bar" }, _content_resume("a0", () => {
		_scope_id();
		_scope_reason();
		_html("Hi");
	}, $scope0_id));
	_html(`</svg><math>${_unescaped(input.value)}${_el_resume($scope0_id, "d", $sg__input_value)}`);
	_dynamic_tag($scope0_id, "e", Child, { href: "#bar" }, _content_resume("a1", () => {
		_scope_id();
		_scope_reason();
		_html("Hi");
	}, $scope0_id));
	_html("</math>");
	_dynamic_tag($scope0_id, "f", Parent, {}, _content_resume("a2", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`${_unescaped(input.value)}${_el_resume($scope1_id, "a", $sg__input_value)}`);
		_subscribe($si__input_value && $input_value__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope1_id);
	}, $scope0_id));
	_html(`<button class=toggle-parent>Toggle Parent</button>${_el_resume($scope0_id, "g")}<button class=toggle-child>Toggle Child</button>${_el_resume($scope0_id, "h")}</div>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a3");
	_script($scope0_id, "a4");
	writeScope($scope0_id, {
		k: input.value,
		l: Parent,
		m: Child,
		Bk: $si__input_value && $input_value__closures
	});
	_resume_branch($scope0_id);
}, 1);
