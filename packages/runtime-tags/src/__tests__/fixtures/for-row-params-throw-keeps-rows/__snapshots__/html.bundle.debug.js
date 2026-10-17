// template.marko
function check(item) {
	if (item.bad) throw new Error("row params");
	return item.id;
}
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = [
		{ id: 1 },
		{ id: 2 },
		{ id: 3 }
	];
	_html(`<button class=bad>bad</button>${_el_resume($scope0_id, "#button/0")}<button class=next>next</button>${_el_resume($scope0_id, "#button/1")}<ul><li>head</li>`);
	_for_of(items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_text_resume($scope1_id, "#text/0", check(item))}</li>`);
		_scope($scope1_id, {}, "__tests__/template.marko", "11:4");
	}, "id", $scope0_id, "#text/2", 1, 1, 0, 0, 1);
	_html("</ul>");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
