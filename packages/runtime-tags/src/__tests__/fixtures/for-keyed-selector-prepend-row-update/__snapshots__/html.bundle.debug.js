// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = [1, 2];
	let selected = 0;
	_html(`<button class=prepend></button>${_el_resume($scope0_id, "#button/0")}`);
	_for_of(items, (item) => {
		const $scope1_id = _scope_id();
		let m = 0;
		const active = selected === item;
		_html(`<button${_attr_class("row" + item)}>${_text_resume($scope1_id, "#text/1", m + ":" + active)}</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_scope($scope1_id, {
			"#LoopKey": item,
			m,
			active
		}, "__tests__/template.marko", "4:2", {
			"#LoopKey": "4:6",
			m: "5:8",
			active: "6:10"
		});
	}, (x) => x, $scope0_id, "#text/1", 1, 1, 1, 0, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		items,
		selected
	}, "__tests__/template.marko", 0, {
		items: "1:6",
		selected: "2:6"
	});
}, 1);
