// template.marko
_shells({
	a2: "a2;D%c%;<p><!>:<!></p>",
	a3: "a3;D%c%;<p><!>:<!></p>",
	a: "a !a4;b%b ;<!><!><button>interactive</button>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_await($scope0_id, "a", Promise.resolve(1), (x) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "a", input.label, 1, $scope0_reason, 0)}:${_text_resume($scope1_id, "b", x, 2, 0, 0)}</p>`);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, $cg__input_label ? "a0" : "a1");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, {}), $cg__input_label && "a1");
	}, 1, "a2", void 0, 1);
	_html(`<button>interactive</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a4");
	_scope($scope0_id, { f: _write_if($scope0_reason, 0) && _unfilled_if($scope0_reason, 0) && $input_label__closures });
}, 1);
