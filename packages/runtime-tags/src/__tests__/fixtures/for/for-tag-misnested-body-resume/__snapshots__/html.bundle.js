// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let list = [1, 2];
	let count = 0;
	_html("<table>");
	_for_of(list, (x) => {
		const $scope1_id = _scope_id();
		_html(`<div>${_text_resume($scope1_id, "a", x)}</div>`);
		_scope($scope1_id, {});
	}, 0, $scope0_id, "a", 1, 1, 1, "</table>", 1);
	_html(`<button class=count>${_text_resume($scope0_id, "c", count)}</button>${_el_resume($scope0_id, "b")}<button class=clear>clear</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { f: count });
}, 1);
