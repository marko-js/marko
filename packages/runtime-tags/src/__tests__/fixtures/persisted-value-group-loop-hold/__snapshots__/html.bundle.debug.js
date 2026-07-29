// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_items = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}<ul>`);
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		let n = 0;
		_html(`<li class=item>${_escape(_hole_value($scope1_id, "PatchHole:#text/0", item.name, _persisted_reason()))}${_el_resume($scope1_id, "#text/0", $sg__input_items)}<button class=tap>tap <!>${_escape(n)}${_el_resume($scope1_id, "#text/2")}</button>${_el_resume($scope1_id, "#button/1")}</li>`);
		_script($scope1_id, "__tests__/template.marko_1");
		writeScope($scope1_id, { n: _seed_fill(_state_reason() && n) }, "__tests__/template.marko", "4:4", { n: "5:10" });
	}, function(item) {
		return item.id;
	}, $scope0_id, "#ul/2", $sg__input_items, $sg__input_items, $sg__input_items, "</ul>", 1, "__tests__/template.marko_1_update");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { count: _seed_fill(_state_reason() && count) }, "__tests__/template.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_1_update": ["<li class=item> <button class=tap>tap <!></button></li>", "D b Db%m"],
	"__tests__/template.marko_1_content": ["<li class=item> <button class=tap>tap <!></button></li>", "D b Db%m"],
	"__tests__/template.marko_0_update": ["<button class=count>clicked <!></button><ul></ul>", " Db%l b"],
	"__tests__/template.marko": ["<button class=count>clicked <!></button><ul></ul>", " Db%l b"]
});
