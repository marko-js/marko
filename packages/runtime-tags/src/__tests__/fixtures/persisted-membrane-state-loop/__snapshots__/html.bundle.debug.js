// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = ["a", "b"];
	_html(`<button class=add>add</button>${_el_resume($scope0_id, "#button/0")}<ul class=items>`);
	_for_of(items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_escape(item)}${_el_resume($scope1_id, "#text/0")}</li>`);
		writeScope($scope1_id, {}, "__tests__/template.marko", "4:4");
	}, function(item) {
		return item;
	}, $scope0_id, "#ul/1", 1, 1, 1, "</ul>", 1, "__tests__/template.marko_1_update");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { items: _state_reason() && items }, "__tests__/template.marko", 0, { items: "1:6" });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_1_update": ["<li> </li>", "D l"],
	"__tests__/template.marko_1_content": ["<li> </li>", "D l"],
	"__tests__/template.marko_0_update": ["<button class=add>add</button><ul class=items></ul>", " b b"],
	"__tests__/template.marko": ["<button class=add>add</button><ul class=items></ul>", " b b"]
});
