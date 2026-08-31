// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", x)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (x % 2 === 0) {
			const $scope1_id = _scope_id();
			_html("<b>outer</b>");
			_if(() => {
				if (x > 9) {
					const $scope2_id = _scope_id();
					_html("inner");
					writeScope($scope2_id, {}, "__tests__/template.marko", "5:4");
					return 0;
				}
			}, $scope1_id, "#text/0");
			writeScope($scope1_id, {}, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/2");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { x }, "__tests__/template.marko", 0, { x: "1:6" });
	_resume_branch($scope0_id);
}, 1);
