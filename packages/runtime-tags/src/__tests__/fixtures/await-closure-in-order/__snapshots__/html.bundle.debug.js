// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = 1;
	_html(`<button>${_escape(value)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_await($scope0_id, "#text/2", resolveAfter(0, 4), () => {
		const $scope2_id = _scope_id();
		_html("<span>Hello</span>");
	}, 0);
	_if(() => {
		if (value) {
			const $scope1_id = _scope_id();
			_html(`<span>${_escape(value)}${_el_resume($scope1_id, "#text/0")}</span>`);
			writeScope($scope1_id, {}, "__tests__/template.marko", "6:1");
			return 0;
		}
	}, $scope0_id, "#text/3", 1, 1, 1, 0, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { value }, "__tests__/template.marko", 0, { value: "2:5" });
	_resume_branch($scope0_id);
}, 1);
