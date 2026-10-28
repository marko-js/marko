// template.marko
function boom() {
	throw new Error("boom");
}
_shells({
	a4: "a4",
	a5: "a5;D%b%;<em><!><!></em>",
	a: "a !a6;D%b D ;<main><!><button> </button></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_message = _client_guard($scope0_reason, 1), $cg__input_boom = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_message__closures = /* @__PURE__ */ new Set();
	const $input_boom__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html("<main>");
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<em>${_text_resume($scope1_id, "a", input.message, 1, $scope0_reason, 1)}${_text_resume($scope1_id, "b", input.boom ? boom() : "", 2, $scope0_reason, 2)}</em>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, $cg__input_message ? "a0" : "a1");
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, $cg__input_boom ? "a2" : "a3");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_boom__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_message__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }), $cg__input_message && "a1"), $cg__input_boom && "a3");
	}, void 0, (err) => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<b>${_text_resume($scope2_id, "a", err.message, 1, 4, 0)}</b>`);
		_scope($scope2_id, {});
	}, void 0, "a4", "a5", 1, 1, 1);
	_html(`<button>${_text_resume($scope0_id, "c", count)}</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a6");
	_scope($scope0_id, {
		h: count,
		i: _write_if($scope0_reason, 1) && _unfilled_if($scope0_reason, 1) && $input_message__closures,
		j: _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_boom__closures
	});
}, 1);
