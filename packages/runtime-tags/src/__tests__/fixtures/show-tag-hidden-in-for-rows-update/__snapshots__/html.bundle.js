// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let labels = [
		"a",
		"bb",
		"c"
	];
	_html(`<button id=add>add</button>${_el_mark($scope0_id, "a")}<button id=grow>grow</button>${_el_mark($scope0_id, "b")}<ul>`);
	_for_of(labels, (label) => {
		const $scope1_id = _scope_id();
		const $show = label.length > 1;
		_show_start($show, 0);
		_html(`<li>${_text_mark($scope1_id, "a", label)}</li>`);
		_show_end($scope1_id, "b", $show, 1, 0, 0, 1);
		_scope($scope1_id, {});
	}, 0, $scope0_id, "c", 1, 1, 1, "</ul>");
	_script($scope0_id, "a0");
	_scope($scope0_id, { d: labels });
}, 1);
