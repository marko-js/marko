// template.marko
_shells({
	a: "a !a5; D l%;<button> </button><!><!>",
	a1: "a1 a9!a2; bD ;<input><span> </span>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let s = 0;
	const cm = `${input.a}:${s}`;
	_html(`<button>${_text_resume($scope0_id, "b", s)}</button>${_el_resume($scope0_id, "a")}`);
	_for_of(input.items, (it) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 1) && _patch_value($scope1_id, "va3", it?.v);
		let cv = "";
		_html(`<input${_patch_input_value($scope1_id, "a", it.v + cm, _resume(function(v) {
			cv = v;
		}, "a0", $scope1_id), void 0, void 0, void 0, "dEa")}>${_el_resume($scope1_id, "a")}<span>${_text_resume($scope1_id, "b", cv)}</span>`);
		_script($scope1_id, "a2");
		_patch_value($scope1_id, "va4", cv, 1);
		_scope($scope1_id, {
			e: it?.v,
			_: _scope_with_id($scope0_id)
		});
	}, "id", $scope0_id, "c", 1, void 0, void 0, void 0, void 0, "a1", $scope0_reason, 1);
	_script($scope0_id, "a5");
	_patch_value($scope0_id, "va7", s, 1);
	$scope0_page ? _scope($scope0_id, {
		f: input.a,
		h: s,
		j: _write_if($scope0_reason, 1) && cm
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "va6", input.a);
}, 1);
