// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let hide = undefined;
	_html(`<button id=toggle>Toggle</button>${_el_resume($scope0_id, "#button/0")}<button id=cleanup>Cleanup</button>${_el_resume($scope0_id, "#button/1")}`);
	_if(() => {
		if (!hide) {
			const $scope1_id = _scope_id();
			_html("<div>Hello</div>");
			writeScope($scope1_id, {}, "__tests__/template.marko", "20:2");
			return 0;
		}
	}, $scope0_id, "#text/2", 1, 1, 1, 0, 1, 1);
	_script($scope0_id, "__tests__/template.marko_0_hide");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { hide }, "__tests__/template.marko", 0, { hide: "7:6" });
	_resume_branch($scope0_id);
});
