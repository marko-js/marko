// template.marko
var template_default = _template("a", (input) => {
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
		_html(`<span>${_escape(item)}${_el_resume($scope1_id, "a")}:<!>${_escape(count)}${_el_resume($scope1_id, "b")}</span>`);
		writeScope($scope1_id, {});
	}, (item) => item, $scope0_id, "a", 1, 1, 1, "</div>", 1);
	_html(`<button id=both>both</button>${_el_resume($scope0_id, "b")}<button id=count>count</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		d: count,
		e: items
	});
	_resume_branch($scope0_id);
}, 1);
