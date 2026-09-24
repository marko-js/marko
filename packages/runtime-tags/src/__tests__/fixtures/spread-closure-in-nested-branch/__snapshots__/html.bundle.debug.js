// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_for_of([{
		id: "a",
		class: "x"
	}, {
		id: "b",
		title: "y"
	}], (item) => {
		const $scope1_id = _scope_id();
		_if(() => {
			if (show) {
				const $scope2_id = _scope_id();
				_html("<div");
				_attrs_content(item, "#div/0", $scope2_id, "div");
				_html(`</div>${_el_resume($scope2_id, "#div/0")}`);
				_script($scope2_id, "__tests__/template.marko_2_item#2");
				_scope($scope2_id, {}, "__tests__/template.marko", "4:4", { "EventAttributes:#div/0": ["...item", "5:13"] });
				return 0;
			}
		}, $scope1_id, "#text/0", 1, 1, 1, 0, 1);
		_scope($scope1_id, {
			item,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "3:2", { item: "3:6" });
	}, 0, $scope0_id, "#text/1", 1, 0, 0);
	const attrs = { class: "z" };
	_if(() => {
		if (show) {
			const $scope3_id = _scope_id();
			_html("<span");
			_attrs_content(attrs, "#span/0", $scope3_id, "span");
			_html(`</span>${_el_resume($scope3_id, "#span/0")}`);
			_script($scope3_id, "__tests__/template.marko_3_attrs#4");
			_scope($scope3_id, {}, "__tests__/template.marko", "9:2", { "EventAttributes:#span/0": ["...attrs", "10:12"] });
			return 0;
		}
	}, $scope0_id, "#text/2", 1, 1, 1, 0, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		show,
		attrs
	}, "__tests__/template.marko", 0, {
		show: "1:6",
		attrs: "8:8"
	});
}, 1);
