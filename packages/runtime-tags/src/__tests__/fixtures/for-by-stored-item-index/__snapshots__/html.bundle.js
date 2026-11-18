// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = [{
		id: "a",
		name: "A"
	}, {
		id: "b",
		name: "B"
	}];
	_html("<ul>");
	_for_of(items, (item, i) => {
		const $scope1_id = _scope_id();
		_html(`<li><button>${_text_mark($scope1_id, "b", i)}</button>${_el_mark($scope1_id, "a")}</li>`);
		_script($scope1_id, "a0");
		_scope($scope1_id, { d: item });
	}, "id", $scope0_id, "a", 1, 1, 1, "</ul>", 1);
	_html(`<button id=rotate>rotate</button>${_el_mark($scope0_id, "b")}<span>${_text_mark($scope0_id, "c", void 0)}</span>`);
	_script($scope0_id, "a1");
	_scope($scope0_id, { d: items });
}, 1);
