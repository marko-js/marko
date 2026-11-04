// template.marko
_shells({
	a: "a !a4; D l%;<button> </button><!><!>",
	a3: "a3 a7!a1; bD ;<input><span> </span>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_items = _server_guard($scope0_reason, 1), $fg__input_a = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let s = 0;
	const cm = `${input.a}:${s}`;
	_html(`<button>${_text_mark($scope0_id, "b", s)}</button>${_el_mark($scope0_id, "a")}`);
	_for_of(input.items, (it) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 1) && _patch_write($scope1_id, "xe", it?.v, !$sg__input_items);
		let cv = "";
		_html(`<input${_attr_input_value($scope1_id, "a", it.v + cm, _resume(function(v) {
			cv = v;
		}, "a0", $scope1_id), 0, 0, 0, "wEa")}>${_el_mark($scope1_id, "a")}<span>${_text_mark($scope1_id, "b", cv, 1, 0, 0, 1)}</span>`);
		_script($scope1_id, "a1");
		_patch_render($scope1_id, "a2", [
			">j",
			_filled_guard($scope0_reason, 0) && ">f",
			_filled_guard($scope0_reason, 1) && "e"
		]);
		_scope($scope1_id, {
			e: it?.v,
			_: _scope_with_id($scope0_id)
		});
	}, "id", $scope0_id, "c", 1, 1, 1, 0, 0, "a3", $scope0_reason, 1);
	_script($scope0_id, "a4");
	_patch_render($scope0_id, "a5", $fg__input_a && "f");
	_scope($scope0_id, {
		f: input.a,
		h: s,
		j: _write_if($scope0_reason, 1) && cm
	}) || $fg__input_a && _patch_write($scope0_id, "xf", input.a, !_server_guard($scope0_reason, 0));
}, 1);
