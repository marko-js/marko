// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let useBox = false;
	_html(`<button id=toggle>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	const Box = { content: _content_resume("__tests__/template.marko_1*content", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		let count = 0;
		_html(`<button class=box>${_text_resume($scope1_id, "#text/1", count)} `);
		_dynamic_tag($scope1_id, "#text/2", input.content, {}, 0, 0, _serialize_guard($scope1_reason, 0));
		_html(`</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_scope($scope1_id, { count }, "__tests__/template.marko", "4:2", { count: "5:8" });
	}, $scope0_id) };
	Box.content({ content: _content("__tests__/template.marko_2*content", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("static");
	}, $scope0_id) });
	_dynamic_tag($scope0_id, "#text/2", useBox ? Box : "div", {}, _content_resume("__tests__/template.marko_3*content", () => {
		const $scope3_id = _scope_id();
		_scope_reason();
		_html("dynamic");
	}, $scope0_id));
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		useBox,
		Box
	}, "__tests__/template.marko", 0, {
		useBox: "1:6",
		Box: "4:9"
	});
}, 1);
