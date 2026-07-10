// template.marko
var template_default = _template("a", (input) => {
	const $sg__input_items = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	let count = 0;
	let label = "none";
	let fromInput = input.start;
	_html(`<button id=count>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}<button id=label>${_escape(label)}${_el_resume($scope0_id, "d")}</button>${_el_resume($scope0_id, "c")}<button id=sum>${_escape(fromInput)}${_el_resume($scope0_id, "f")}</button>${_el_resume($scope0_id, "e")}`);
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<button class=row>${_escape(item.id)}${_el_resume($scope1_id, "b", $sg__input_items)}:<!>${_escape(false)}${_el_resume($scope1_id, "c")}</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a0");
		writeScope($scope1_id, {
			g: item?.name,
			h: void 0
		});
	}, "id", $scope0_id, "g", $sg__input_items, $sg__input_items, $sg__input_items, 0, 1);
	_script($scope0_id, "a1");
	writeScope($scope0_id, {
		l: void 0,
		m: void 0,
		n: fromInput
	});
	_resume_branch($scope0_id);
}, 1);
