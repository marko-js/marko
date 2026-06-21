// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let list = [
		{
			id: 1,
			on: true
		},
		{
			id: 2,
			on: false
		},
		{
			id: 3,
			on: true
		}
	];
	_html("<div>");
	_for_of(list, (item) => {
		const $scope1_id = _scope_id();
		_if(() => {
			if (item.on) {
				const $scope2_id = _scope_id();
				_html(`<span>A<!>${_escape(item.id)}${_el_resume($scope2_id, "#text/0")}</span>`);
				writeScope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "6:6");
				return 0;
			} else {
				const $scope3_id = _scope_id();
				_html(`<b>B<!>${_escape(item.id)}${_el_resume($scope3_id, "#text/0")}</b>`);
				writeScope($scope3_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "9:6");
				return 1;
			}
		}, $scope1_id, "#text/0", 1, 1, 1, 0, 1);
		writeScope($scope1_id, { item_id: item?.id }, "__tests__/template.marko", "5:4", { item_id: ["item.id", "5:8"] });
	}, "id", $scope0_id, "#div/0", 1, 1, 1, "</div>");
	_html(`<button>rot</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0_list_2_list_0_list_1");
	writeScope($scope0_id, {
		list_2: list?.[2],
		list_0: list?.[0],
		list_1: list?.[1]
	}, "__tests__/template.marko", 0, {
		list_2: ["list[2]", "3:6"],
		list_0: ["list[0]", "3:6"],
		list_1: ["list[1]", "3:6"]
	});
	_resume_branch($scope0_id);
}, 1);
