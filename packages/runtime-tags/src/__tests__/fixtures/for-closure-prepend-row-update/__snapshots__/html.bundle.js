// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = [1, 2];
	let n = 0;
	_html(`<button class=prepend></button>${_el_resume($scope0_id, "a")}`);
	_for_of(items, (item) => {
		const $scope1_id = _scope_id();
		let m = 0;
		const label = "n0";
		_html(`<button${_attr_class("row" + item)}>${_text_resume($scope1_id, "b", "0:n0")}</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a0");
		_scope($scope1_id, {
			d: m,
			e: label
		});
	}, (x) => x, $scope0_id, "b", 1, 1, 1, 0, 1);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		c: items,
		d: n
	});
}, 1);
