// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = [1, 2];
	let n = 0;
	_html(`<button class=prepend></button>${_el_resume($scope0_id, "#button/0")}`);
	_for_of(items, (item) => {
		const $scope1_id = _scope_id();
		let m = 0;
		const label = "n" + n;
		_html(`<button${_attr_class("row" + item)}>${_text_resume($scope1_id, "#text/1", m + ":" + label)}</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_scope($scope1_id, {
			m,
			label
		}, "__tests__/template.marko", "4:2", {
			m: "5:8",
			label: "6:10"
		});
	}, (x) => x, $scope0_id, "#text/1", 1, 1, 1, 0, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		items,
		n
	}, "__tests__/template.marko", 0, {
		items: "1:6",
		n: "2:6"
	});
}, 1);
