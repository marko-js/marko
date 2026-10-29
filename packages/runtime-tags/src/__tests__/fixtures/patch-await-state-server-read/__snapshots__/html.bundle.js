// template.marko
_shells({
	a2: "a2;D%c%;<p><!>:<!></p>",
	a3: "a3;D%c%;<p><!>:<!></p>",
	a: "a !a4; b%;<button class=open>inc</button><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_html(`<button class=open>inc</button>${_el_resume($scope0_id, "a")}`);
	_await($scope0_id, "b", Promise.resolve(n), (x) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "a", input.label, 1, $scope0_reason, 0)}:${_text_resume($scope1_id, "b", x, 2)}</p>`);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, $cg__input_label ? "a0" : "a1");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, {}), $cg__input_label && "a1");
	}, 1, "a2", 1, 1);
	_script($scope0_id, "a4");
	_scope($scope0_id, {
		f: n,
		g: _write_if($scope0_reason, 0) && _unfilled_if($scope0_reason, 0) && $input_label__closures
	});
}, 1);
