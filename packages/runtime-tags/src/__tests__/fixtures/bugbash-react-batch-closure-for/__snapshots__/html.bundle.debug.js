// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	let items = [
		1,
		2,
		3
	];
	_html("<div>");
	_for_of(items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<span>${_escape(item)}${_el_resume($scope1_id, "#text/0")}:<!>${_escape(count)}${_el_resume($scope1_id, "#text/1")}</span>`);
		writeScope($scope1_id, {}, "__tests__/template.marko", "4:4");
	}, (item) => item, $scope0_id, "#div/0", 1, 1, 1, "</div>", 1);
	_html(`<button id=both>both</button>${_el_resume($scope0_id, "#button/1")}<button id=count>count</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		count,
		items
	}, "__tests__/template.marko", 0, {
		count: "1:6",
		items: "2:6"
	});
	_resume_branch($scope0_id);
}, 1);
