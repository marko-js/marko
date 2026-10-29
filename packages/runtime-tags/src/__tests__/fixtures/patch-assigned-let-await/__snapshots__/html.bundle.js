// template.marko
_shells({
	a3: "a3;D%c%;<p><!> <!></p>",
	a: "a !a1; b%;<button>set</button><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_w = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_w__closures = /* @__PURE__ */ new Set();
	let x = input.v;
	_html(`<button>set</button>${_el_resume($scope0_id, "a")}`);
	_await($scope0_id, "b", Promise.resolve(x), (r) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "a", r)} ${_text_resume($scope1_id, "b", input.w, _write_guard($scope0_reason, 1) * 2)}</p>`);
		_subscribe($wi__input_w && $input_w__closures, _scope($scope1_id, {}), "a0");
	}, 1, 0);
	_script($scope0_id, "a1");
	_scope($scope0_id, { h: $wi__input_w && $input_w__closures }) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va2", input.w, !_server_guard($scope0_reason, 1));
}, 1);
