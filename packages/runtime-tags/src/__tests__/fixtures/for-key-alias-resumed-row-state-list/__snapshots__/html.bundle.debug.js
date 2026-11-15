// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	let items = ["a", "b"];
	_for_of(items, (item, index) => {
		const $scope1_id = _scope_id();
		_if(() => {
			if (show) {
				const $scope2_id = _scope_id();
				_html(_escape(index));
				_scope($scope2_id, {}, "__tests__/template.marko", "5:4");
				return 0;
			}
		}, $scope1_id, "#text/0");
		_scope($scope1_id, { "#LoopKey": index }, "__tests__/template.marko", "3:2", { "#LoopKey": "3:12" });
	}, 0, $scope0_id, "#text/0");
	_html(`<button class=toggle>toggle</button>${_el_mark($scope0_id, "#button/1")}<button class=add>add</button>${_el_mark($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		show,
		items
	}, "__tests__/template.marko", 0, {
		show: "1:6",
		items: "2:6"
	});
}, 1);
