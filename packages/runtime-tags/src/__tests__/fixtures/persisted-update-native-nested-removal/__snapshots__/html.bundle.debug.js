// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_child = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_child__closures = new Set();
	let count = 0;
	const Child = { content: _content_resume("__tests__/template.marko_2_content", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html(`<button class=child>child</button>${_el_resume($scope2_id, "#button/0")}`);
		_script($scope2_id, "__tests__/template.marko_2");
		writeScope($scope2_id, {}, "__tests__/template.marko", "3:2");
	}, $scope0_id) };
	_html(`<button class=count>count <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/2", input.outer, { class: "outer" }, _content_resume("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_dynamic_tag($scope1_id, "#text/0", input.child === "component" ? Child : input.child === "native" ? "span" : undefined, {}, 0, 0, $sg__input_child | _persisted_reason(), "__tests__/template.marko_1/update_dynamic_#text/0");
		_subscribe($sg__input_child && $input_child__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "8:4"));
		_resume_branch($scope1_id);
	}, $scope0_id), 0, _serialize_guard($scope0_reason, 0) | _persisted_reason(), "__tests__/template.marko_0/update_dynamic_#text/2");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		input_child: input.child,
		count: _state_reason() && count,
		Child: _state_reason() && Child,
		"ClosureScopes:input_child": $sg__input_child && $input_child__closures
	}, "__tests__/template.marko", 0, {
		input_child: ["input.child"],
		count: "1:6",
		Child: "3:9"
	});
	_resume_branch($scope0_id);
}, 1);
