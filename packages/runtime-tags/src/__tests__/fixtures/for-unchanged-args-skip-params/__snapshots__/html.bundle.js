// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = [
		{
			id: "a",
			n: 1
		},
		{
			id: "b",
			n: 2
		},
		{
			id: "c",
			n: 3
		}
	];
	_html("<ul>");
	_for_of(items, (item, index) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_text_resume($scope1_id, "a", index)}:${_text_resume($scope1_id, "b", item.id, 2)}=${_text_resume($scope1_id, "c", item.n, 2)}</li>`);
		_scope($scope1_id, {});
	}, "id", $scope0_id, "a", 1, 1, 1, "</ul>", 1);
	_html(`<button class=rotate>Rotate</button>${_el_resume($scope0_id, "b")}<button class=bump>Bump b</button>${_el_resume($scope0_id, "c")}<button class=resettle>Same items</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { e: items });
}, 1);
