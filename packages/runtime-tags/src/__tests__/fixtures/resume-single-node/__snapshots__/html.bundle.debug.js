// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let itemId = 0;
	let items = [0];
	_for_of(items, () => {
		const $scope1_id = _scope_id();
		_html("<div>a</div>");
		_if(() => {
			if (items.length > 1) {
				const $scope2_id = _scope_id();
				_html("<div>b</div>");
				writeScope($scope2_id, {}, "__tests__/template.marko", "6:4");
				return 0;
			}
		}, $scope1_id, "#text/0", 1, 1, 1, 0, 1);
		writeScope($scope1_id, {}, "__tests__/template.marko", "4:2");
	}, 0, $scope0_id, "#text/0");
	_html(`<button>More</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		itemId,
		items,
		items_length: items?.length
	}, "__tests__/template.marko", 0, {
		itemId: "1:6",
		items: "2:6",
		items_length: ["items.length", "2:6"]
	});
	_resume_branch($scope0_id);
}, 1);
