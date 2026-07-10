// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_items = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	let label = "none";
	let fromInput = input.start;
	_html(`<button id=count>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}<button id=label>${_escape(label)}${_el_resume($scope0_id, "#text/3")}</button>${_el_resume($scope0_id, "#button/2")}<button id=sum>${_escape(fromInput)}${_el_resume($scope0_id, "#text/5")}</button>${_el_resume($scope0_id, "#button/4")}`);
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		let open = false;
		_html(`<button class=row>${_escape(item.id)}${_el_resume($scope1_id, "#text/1", $sg__input_items)}:<!>${_escape(open && item.name)}${_el_resume($scope1_id, "#text/2")}</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		writeScope($scope1_id, {
			item_name: item?.name,
			open: open === false ? void 0 : open
		}, "__tests__/template.marko", "7:2", {
			item_name: ["item.name", "7:6"],
			open: "8:8"
		});
	}, "id", $scope0_id, "#text/6", $sg__input_items, $sg__input_items, $sg__input_items, 0, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		count: count === 0 ? void 0 : count,
		label: label === "none" ? void 0 : label,
		fromInput
	}, "__tests__/template.marko", 0, {
		count: "1:6",
		label: "2:6",
		fromInput: "3:6"
	});
	_resume_branch($scope0_id);
}, 1);
