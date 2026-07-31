// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let flip = false;
	_html(`<button>flip</button>${_el_resume($scope0_id, "#button/0")}<div>x `);
	_if(() => {
		if (flip) {
			const $scope1_id = _scope_id();
			_html("<span>A</span>");
			writeScope($scope1_id, {}, "__tests__/template.marko", "6:4");
			return 0;
		} else {
			const $scope2_id = _scope_id();
			_html("<span>B</span>");
			writeScope($scope2_id, {}, "__tests__/template.marko", "9:4");
			return 1;
		}
	}, $scope0_id, "#text/1", 1, 1, 1, 0, 1);
	_html(" y</div>");
	_await($scope0_id, "#text/2", resolveAfter(0, 1), (_) => {
		const $scope3_id = _scope_id();
		_html("ready");
	}, 0);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { flip }, "__tests__/template.marko", 0, { flip: "2:6" });
	_resume_branch($scope0_id);
}, 1);
