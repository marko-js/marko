// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Stat = { content: _content("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		const $return = { class: "foo" };
		return $return;
	}) };
	const Dyn = { content: _content("__tests__/template.marko_2_content", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		let count = 0;
		const $return2 = {
			"data-count": count,
			onClick: _resume(function() {
				count++;
			}, "__tests__/template.marko_2/_return", $scope2_id)
		};
		writeScope($scope2_id, { count }, "__tests__/template.marko", "7:2", { count: "8:8" });
		_resume_branch($scope2_id);
		return $return2;
	}) };
	let staticAttrs = Stat.content({});
	const $childScope = _peek_scope_id();
	let dynamicAttrs = Dyn.content({});
	_var($scope0_id, "#scopeOffset/3", $childScope, "__tests__/template.marko_0_dynamicAttrs/var");
	_html(`<button${_attrs({
		...staticAttrs,
		...dynamicAttrs
	}, "#button/4", $scope0_id, "button")}>Click</button>${_el_resume($scope0_id, "#button/4")}`);
	_script($scope0_id, "__tests__/template.marko_0_staticAttrs_dynamicAttrs");
	writeScope($scope0_id, {
		staticAttrs,
		"#childScope/2": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { staticAttrs: "18:7" });
}, 1);
