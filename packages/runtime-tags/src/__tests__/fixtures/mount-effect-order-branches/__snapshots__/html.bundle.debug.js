// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_script($scope0_id, "__tests__/tags/child.marko_0", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	let items = [1, 2];
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_script($scope1_id, "__tests__/template.marko_1", 0);
			_scope($scope1_id, {}, "__tests__/template.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_for_of(items, (i) => {
		const $scope2_id = _scope_id();
		_script($scope2_id, "__tests__/template.marko_2", 0);
		_scope($scope2_id, {}, "__tests__/template.marko", "7:2");
	}, 0, $scope0_id, "#text/1");
	child_default({});
	_html(`<button>t</button>${_el_resume($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		show,
		items
	}, "__tests__/template.marko", 0, {
		show: "1:6",
		items: "2:6"
	});
}, 1);
