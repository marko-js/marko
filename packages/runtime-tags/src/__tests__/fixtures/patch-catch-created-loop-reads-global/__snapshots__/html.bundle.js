// template.marko
function boom(msg) {
	throw new Error(msg);
}
_shells({
	a1: "a1;D ;<p> </p>",
	a2: "a2 a3",
	a: "a !a6;b%;<!><!><!>",
	a0: "a0;D%c%;<i><!>:<!></i>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_n = _client_guard($scope0_reason, 0), $cg__input_late = _client_guard($scope0_reason, 1), $wi__input_late = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_n__closures = /* @__PURE__ */ new Set();
	const $input_late__closures = /* @__PURE__ */ new Set();
	const $global$1 = $global();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_text_mark($scope2_id, "a", input.late ? boom("late") : "ok", 1, $scope0_reason, 1)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "a5", $cg__input_late);
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_late__closures, _scope($scope2_id, { _: $wi__input_late && _scope_with_id($scope0_id) }), $cg__input_late && "a5");
	}, void 0, (err) => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<b>${_text_mark($scope1_id, "a", err.message, 1, 4, 0)}</b>`);
		_for_until(input.n, 0, 1, (i) => {
			const $scope3_id = _scope_id();
			_html(`<i>${_text_mark($scope3_id, "a", i, 1, $scope0_reason, 0)}:${_text_mark($scope3_id, "b", $global$1.label, 2, 4, 0)}</i>`);
			_scope($scope3_id, {});
		}, 0, $scope1_id, "b", 1, 1, 1, 0, 0, "a0", $scope0_reason, 0);
		_fill_global_subscribe("a3", $scope1_id, _client_guard($scope0_reason, 0));
		_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope1_id, "a4", $cg__input_n);
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_n__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_n && "a4");
	}, 0, "a2", "a1", 1, 1, 1);
	_script($scope0_id, "a6", 0);
	_scope($scope0_id, {
		d: input.n,
		f: _write_if($scope0_reason, 0) && $input_n__closures,
		g: $wi__input_late && _unfilled_if($scope0_reason, 1) && $input_late__closures
	}) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xd", input.n, !_server_guard($scope0_reason, 0)) && _patch_subscribers($scope0_id, "a7", "d");
}, 1);
