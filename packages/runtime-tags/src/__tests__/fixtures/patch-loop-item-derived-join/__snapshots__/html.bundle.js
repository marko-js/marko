// template.marko
_shells({
	a: "a !a1; D l ;<button class=n> </button><ul></ul>",
	a0: "a0 a4;D%c%;<li><!>:<!></li>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	const label = `${input.prefix}${n}`;
	_html(`<button class=n>${_text_resume($scope0_id, "b", label)}</button>${_el_resume($scope0_id, "a")}<ul>`);
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_patch_text($scope1_id, "a", item, void 0, $scope0_reason, 1)}:${_text_resume($scope1_id, "b", label, 2)}</li>`);
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, 0, $scope0_id, "c", 1, void 0, void 0, void 0, void 0, "a0", $scope0_reason, 1);
	_html(`</ul>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		f: input.prefix,
		h: n,
		j: _write_if($scope0_reason, 1) && label
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va2", input.prefix, !_server_guard($scope0_reason, 0));
}, 1);
