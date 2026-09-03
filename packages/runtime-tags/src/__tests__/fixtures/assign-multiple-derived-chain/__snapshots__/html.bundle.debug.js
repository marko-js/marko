// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = [
		1,
		2,
		3,
		4
	];
	let min = 0;
	let max = 4;
	let index = 0;
	const filtered = items.filter((item) => item >= min && item <= max);
	const selected = filtered[index];
	_html(`<div>${_text_resume($scope0_id, "#text/0", filtered.join(" "))} selected ${_text_resume($scope0_id, "#text/1", selected, 2)}</div><button id=update>update</button>${_el_resume($scope0_id, "#button/2")}<button id=reselect>reselect</button>${_el_resume($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		items,
		min,
		max,
		index,
		filtered
	}, "__tests__/template.marko", 0, {
		items: "1:6",
		min: "2:6",
		max: "3:6",
		index: "4:6",
		filtered: "5:8"
	});
}, 1);
