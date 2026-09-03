// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
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
		_html(`<li>${_text_resume($scope1_id, "#text/0", index)}:${_text_resume($scope1_id, "#text/1", item.id, 2)}=${_text_resume($scope1_id, "#text/2", item.n, 2)}</li>`);
		_scope($scope1_id, {}, "__tests__/template.marko", "4:4");
	}, "id", $scope0_id, "#ul/0", 1, 1, 1, "</ul>", 1);
	_html(`<button class=rotate>Rotate</button>${_el_resume($scope0_id, "#button/1")}<button class=bump>Bump b</button>${_el_resume($scope0_id, "#button/2")}<button class=resettle>Same items</button>${_el_resume($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { items }, "__tests__/template.marko", 0, { items: "1:6" });
}, 1);
