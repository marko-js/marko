// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = ["first", "second"];
	_html_opens("__tests__/template.marko:2:1", "__tests__/template.marko:3:1"), _html(`<button id=clear>clear</button>${_el_resume($scope0_id, "#button/0")}<div></div>${_el_resume($scope0_id, "#div/1")}`);
	_for_of(items, (item) => {
		const $scope1_id = _scope_id();
		_html_opens("__tests__/template.marko:6:3"), _html("<div>");
		_if(() => {
			if (item) {
				const $scope2_id = _scope_id();
				_html_opens("__tests__/template.marko:8:7"), _html(`<span>${_escape(item)}${_el_resume($scope2_id, "#text/0")}</span>`);
				_script($scope2_id, "__tests__/template.marko_2_item");
				writeScope($scope2_id, {}, "__tests__/template.marko", "7:6");
				return 0;
			}
		}, $scope1_id, "#div/0", 1, 1, 1, "</div>", 1);
		writeScope($scope1_id, { item }, "__tests__/template.marko", "5:2", { item: "5:6" });
	}, 0, $scope0_id, "#text/2", 1, 1, 1, 0, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
