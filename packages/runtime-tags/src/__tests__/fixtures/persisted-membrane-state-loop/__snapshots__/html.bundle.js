// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = ["a", "b"];
	_html(`<button class=add>add</button>${_el_resume($scope0_id, "a")}<ul class=items>`);
	_for_of(items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_escape(_hole_value($scope1_id, "Qa", item, _state_reason()))}${_el_resume($scope1_id, "a")}</li>`);
		writeScope($scope1_id, {});
	}, function(item) {
		return item;
	}, $scope0_id, "b", 1, 1, 1, "</ul>", 1, "a1");
	_script($scope0_id, "a2");
	writeScope($scope0_id, { c: _state_reason() && items });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a1": ["<li> </li>", "D l"],
	"a3": ["<li> </li>", "D l"],
	"a0": ["<button class=add>add</button><ul class=items></ul>", " b b"],
	"a": ["<button class=add>add</button><ul class=items></ul>", " b b"]
});
