// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = [{
		id: "a",
		name: "A"
	}, {
		id: "b",
		name: "B"
	}];
	let picked = void 0;
	_html("<ul>");
	_for_of(items, (item, i) => {
		const $scope1_id = _scope_id();
		_html(`<li><button>${_text_mark($scope1_id, "#text/1", i)}</button>${_el_mark($scope1_id, "#button/0")}</li>`);
		_script($scope1_id, "__tests__/template.marko_1");
		_scope($scope1_id, { item }, "__tests__/template.marko", "4:4", { item: "4:8" });
	}, "id", $scope0_id, "#ul/0", 1, 1, 1, "</ul>", 1);
	_html(`<button id=rotate>rotate</button>${_el_mark($scope0_id, "#button/1")}<span>${_text_mark($scope0_id, "#text/2", picked?.name)}</span>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { items }, "__tests__/template.marko", 0, { items: "1:6" });
}, 1);
