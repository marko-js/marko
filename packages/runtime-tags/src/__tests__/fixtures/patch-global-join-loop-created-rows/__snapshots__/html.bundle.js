// template.marko
_shells({
	a: "a !a2; D l ;<button> </button><ul></ul>",
	a1: "a1 a4;D%c%c%;<li><!>:<!>:<!></li>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}<ul>`);
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_text_resume($scope1_id, "a", item, 1, $scope0_reason, 0)}:${_text_resume($scope1_id, "b", $global$1.x, 2, 4, 0)}:${_text_resume($scope1_id, "c", n, 2)}</li>`);
		_fill_global_subscribe("a0", $scope0_id);
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, 0, $scope0_id, "c", 1, void 0, void 0, void 0, void 0, "a1", $scope0_reason, 0);
	_html(`</ul>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a2");
	_scope($scope0_id, { g: n });
}, 1);
