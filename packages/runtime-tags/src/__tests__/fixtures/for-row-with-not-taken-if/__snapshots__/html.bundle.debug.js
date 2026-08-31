// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = [1, 2];
	_html(`<button>drop</button>${_el_resume($scope0_id, "#button/0")}`);
	_for_of(items, (i) => {
		const $scope1_id = _scope_id();
		_html(`<div>item ${_text_resume($scope1_id, "#text/0", i, 2)}</div>`);
		_if(() => {
			if (i > 9) {
				const $scope2_id = _scope_id();
				_html("never");
				writeScope($scope2_id, {}, "__tests__/template.marko", "5:4");
				return 0;
			}
		}, $scope1_id, "#text/1");
		writeScope($scope1_id, {}, "__tests__/template.marko", "3:2");
	}, 0, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
