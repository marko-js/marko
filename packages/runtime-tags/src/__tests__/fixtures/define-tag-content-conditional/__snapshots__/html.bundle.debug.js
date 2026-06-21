// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = false;
	const Layout = { content: _content("__tests__/template.marko_1_content", ({ content }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html("<section>");
		_dynamic_tag($scope1_id, "#text/0", content, {}, 0, 0, _serialize_guard($scope1_reason, 0));
		_html("</section>");
		_serialize_if($scope1_reason, 0) && writeScope($scope1_id, {}, "__tests__/template.marko", "2:2");
	}) };
	_html(`<button id=toggle>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (show) {
			const $scope2_id = _scope_id();
			Layout.content({ content: _content("__tests__/template.marko_3_content", () => {
				_scope_reason();
				const $scope3_id = _scope_id();
				_html("shown content");
			}) });
			writeScope($scope2_id, {}, "__tests__/template.marko", "6:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/template.marko_0_show");
	writeScope($scope0_id, { show }, "__tests__/template.marko", 0, { show: "1:6" });
	_resume_branch($scope0_id);
}, 1);
