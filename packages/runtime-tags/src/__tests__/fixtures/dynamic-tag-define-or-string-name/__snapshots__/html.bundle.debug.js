// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	const Foo = { content: _content("__tests__/template.marko_1*content", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $sg__input_content = _serialize_guard($scope1_reason, 0);
		let open = false;
		_html(`<button id=open>open</button>${_el_resume($scope1_id, "#button/0")}`);
		_if(() => {
			if (open) {
				const $scope2_id = _scope_id();
				_dynamic_tag($scope2_id, "#text/0", input.content, {}, 0, 0, $sg__input_content);
				_scope($scope2_id, {}, "__tests__/template.marko", "5:4");
				return 0;
			}
		}, $scope1_id, "#text/1");
		_script($scope1_id, "__tests__/template.marko_1");
		_scope($scope1_id, { input_content: input?.content }, "__tests__/template.marko", "2:2", { input_content: ["input.content", "2:13"] });
	}, $scope0_id) };
	_dynamic_tag($scope0_id, "#text/0", show ? Foo : "div", {}, _content_resume("__tests__/template.marko_3*content", () => {
		const $scope3_id = _scope_id();
		_scope_reason();
		_html("body");
	}, $scope0_id), 0, 0);
}, 1);
