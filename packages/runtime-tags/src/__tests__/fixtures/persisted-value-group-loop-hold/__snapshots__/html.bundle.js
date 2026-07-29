// template.marko
var template_default = _template("a", (input) => {
	const $sg__input_items = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}<ul>`);
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		let n = 0;
		_html(`<li class=item>${_escape(_hole_value($scope1_id, "Qa", item.name, _persisted_reason()))}${_el_resume($scope1_id, "a", $sg__input_items)}<button class=tap>tap <!>${_escape(n)}${_el_resume($scope1_id, "c")}</button>${_el_resume($scope1_id, "b")}</li>`);
		_script($scope1_id, "a1");
		writeScope($scope1_id, { g: _seed_fill(_state_reason() && n) });
	}, function(item) {
		return item.id;
	}, $scope0_id, "c", $sg__input_items, $sg__input_items, $sg__input_items, "</ul>", 1, "a2");
	_script($scope0_id, "a3");
	writeScope($scope0_id, { g: _seed_fill(_state_reason() && count) });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a2": ["<li class=item> <button class=tap>tap <!></button></li>", "D b Db%m"],
	"a4": ["<li class=item> <button class=tap>tap <!></button></li>", "D b Db%m"],
	"a0": ["<button class=count>clicked <!></button><ul></ul>", " Db%l b"],
	"a": ["<button class=count>clicked <!></button><ul></ul>", " Db%l b"]
});
