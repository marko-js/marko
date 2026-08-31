// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", x)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (x % 2 === 0) {
			const $scope1_id = _scope_id();
			_html("<b>before</b>");
			_await($scope1_id, "#text/0", resolveAfter("A", 1), (v) => {
				const $scope2_id = _scope_id();
				_html(`<i>${_escape(v)}</i>`);
			}, 0);
			_if(() => {
				if (x > 9) {
					const $scope3_id = _scope_id();
					_html("never");
					_scope($scope3_id, {}, "__tests__/template.marko", "9:4");
					return 0;
				}
			}, $scope1_id, "#text/1");
			_scope($scope1_id, {}, "__tests__/template.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/2");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { x }, "__tests__/template.marko", 0, { x: "2:6" });
	_resume_branch($scope0_id);
}, 1);
