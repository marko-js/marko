// template.marko
function boom(msg) {
	throw new Error(msg);
}
_shells({
	a4: "a4;D ;<i> </i>",
	a5: "a5;D ;<i> </i>",
	a6: "a6 a2 a3",
	a7: "a7;D ;<i> </i>",
	a8: "a8;D ;<i> </i>",
	a9: "a9 a0 a1",
	a10: "a10;D ;<p> </p>",
	a11: "a11;D ;<p> </p>",
	a: "a;b%b%;<!><!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_early = _client_guard($scope0_reason, 1), $cg__input_late = _client_guard($scope0_reason, 2), $wi__input_early = _write_if($scope0_reason, 1), $wi__input_late = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_early__closures = /* @__PURE__ */ new Set();
	const $input_late__closures = /* @__PURE__ */ new Set();
	const $global$1 = $global();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<p>${_text_mark($scope1_id, "a", input.early ? boom("early") : "ok", 1, $scope0_reason, 1)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope1_id, "a12", $cg__input_early);
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_early__closures, _scope($scope1_id, { _: $wi__input_early && _scope_with_id($scope0_id) }), $cg__input_early && "a12");
	}, void 0, (err) => {
		const $scope3_reason = _scope_reason();
		const $scope3_id = _scope_id();
		_html(`<b>${_text_mark($scope3_id, "a", $global$1.label + " " + err.message, 1, 4, 0)}</b>`);
		_await($scope3_id, "b", $global$1.p, (v) => {
			const $scope4_id = _scope_id();
			_html(`<i>${_text_mark($scope4_id, "a", v, 1, 4, 0)}</i>`);
			_scope($scope4_id, {});
		}, 1, "a7");
		_fill_global_subscribe("a0", $scope3_id);
		_fill_global_subscribe("a1", $scope3_id);
		_patch_write($scope3_id, "we", err?.message, 1);
		_scope($scope3_id, { e: _unfilled_if($scope3_reason, 0) && err?.message });
	}, 0, "a9", "a11", 1, 1, 1);
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_text_mark($scope2_id, "a", input.late ? boom("late") : "ok", 1, $scope0_reason, 2)}</p>`);
		_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope2_id, "a13", $cg__input_late);
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_late__closures, _scope($scope2_id, { _: $wi__input_late && _scope_with_id($scope0_id) }), $cg__input_late && "a13");
	}, void 0, (err) => {
		const $scope5_reason = _scope_reason();
		const $scope5_id = _scope_id();
		_html(`<b>${_text_mark($scope5_id, "a", $global$1.label + " " + err.message, 1, 4, 0)}</b>`);
		_await($scope5_id, "b", $global$1.p, (v) => {
			const $scope6_id = _scope_id();
			_html(`<i>${_text_mark($scope6_id, "a", v, 1, 4, 0)}</i>`);
			_scope($scope6_id, {});
		}, 1, "a4");
		_fill_global_subscribe("a2", $scope5_id);
		_fill_global_subscribe("a3", $scope5_id);
		_patch_write($scope5_id, "we", err?.message, 1);
		_scope($scope5_id, { e: _unfilled_if($scope5_reason, 0) && err?.message });
	}, 0, "a6", "a10", 1, 1, 1);
	_scope($scope0_id, {
		g: $wi__input_early && _unfilled_if($scope0_reason, 1) && $input_early__closures,
		h: $wi__input_late && _unfilled_if($scope0_reason, 2) && $input_late__closures
	});
}, 1);
