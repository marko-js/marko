// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let outer = true;
	let shown = true;
	let items = [1];
	_html("<div class=host>");
	_if(() => {
		if (outer) {
			const $scope1_id = _scope_id();
			_show_start(shown, 1);
			_for_of(items, (item) => {
				const $scope2_id = _scope_id();
				_html(`<b>${_escape(item)}${_el_resume($scope2_id, "#text/0")}</b>`);
				writeScope($scope2_id, {}, "__tests__/template.marko", "8:8");
			}, 0, $scope1_id, "#text/1", 1, 1, 1, 0, 1);
			_show_end($scope1_id, "#text/3", shown);
			writeScope($scope1_id, {}, "__tests__/template.marko", "6:4");
			return 0;
		}
	}, $scope0_id, "#div/0", 1, 1, 1, "</div>");
	_html(`<button class=outer>Outer</button>${_el_resume($scope0_id, "#button/1")}<button class=show>Show</button>${_el_resume($scope0_id, "#button/2")}<button class=items>Items</button>${_el_resume($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0_items_length");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		outer,
		shown,
		items,
		items_length: items?.length
	}, "__tests__/template.marko", 0, {
		outer: "1:6",
		shown: "2:6",
		items: "3:6",
		items_length: ["items.length", "3:6"]
	});
	_resume_branch($scope0_id);
}, 1);
