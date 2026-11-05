// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button id=inc>${_text_mark($scope0_id, "#text/1", count)}</button>${_el_mark($scope0_id, "#button/0")}`);
	const Heading = { content: _content("__tests__/template.marko_1*content", (input) => {
		const $scope1_id = _scope_id();
		const $Heading_content__input_content__closures = new Set();
		const $scope1_reason = _scope_reason();
		_dynamic_tag($scope1_id, "#text/0", input.type, {}, _content_resume("__tests__/template.marko_2*content", () => {
			const $scope2_id = _scope_id();
			const $scope2_reason = _scope_reason();
			_dynamic_tag($scope2_id, "#text/0", input.content, {}, 0, 0, 0);
		}, $scope1_id, ($scope) => [{ input_content: input.content }]), 0, 0);
	}, $scope0_id) };
	Heading.content({
		type: "h1",
		content: _content("__tests__/template.marko_3*content", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_html("static content: not registered");
		}, $scope0_id)
	});
	Heading.content({
		type: "h2",
		content: _content("__tests__/template.marko_4*content", () => {
			_scope_reason();
			const $scope4_id = _scope_id();
			_html("also static: not registered");
		}, $scope0_id)
	});
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "3:6" });
}, 1);
