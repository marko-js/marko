// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = ["a", "b"];
	_html(`<button class=add>add</button>${_el_resume($scope0_id, "a")}<ul class=rows>`);
	_for_of(items, () => {
		const $scope1_id = _scope_id();
		_html("<li>row</li>");
		writeScope($scope1_id, {});
	}, 0, $scope0_id, "b", 1, 1, 1, "</ul>", 1, "a1");
	_script($scope0_id, "a2");
	writeScope($scope0_id, { c: _seed_fill(_state_reason() && items) });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a1": ["<li>row</li>", "b"],
	"a3": ["<li>row</li>", "b"],
	"a0": ["<button class=add>add</button><ul class=rows></ul>", " b b"],
	"a": ["<button class=add>add</button><ul class=rows></ul>", " b b"]
});
