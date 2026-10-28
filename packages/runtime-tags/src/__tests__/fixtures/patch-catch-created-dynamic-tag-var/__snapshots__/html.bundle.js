// tags/huge-label.marko
_shells({ b: "b;D ;<em> </em>" });
var huge_label_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_text_resume($scope0_id, "a", input.label, 1, $scope0_reason, 0)}</em>`);
	const $return = input.label + "!";
	_scope($scope0_id, {});
	return $return;
});

// tags/tiny-label.marko
_shells({ c: "c;D ;<b> </b>" });
var tiny_label_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<b>${_text_resume($scope0_id, "a", input.label, 1, $scope0_reason, 0)}</b>`);
	const $return = input.label + "?";
	_scope($scope0_id, {});
	return $return;
});

// template.marko
function boom() {
	throw new Error("SHOWN_message");
}
_shells({
	a7: "a7;D ;<p> </p>",
	a6: "a6",
	a: "a;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_fail = _client_guard($scope0_reason, 3), $wi__input_fail = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_big__closures = /* @__PURE__ */ new Set();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_fail__closures = /* @__PURE__ */ new Set();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_text_resume($scope2_id, "a", input.fail ? boom() : "ok", 1, $scope0_reason, 3)}</p>`);
		_unfilled_if($scope0_reason, 3) && _patch_init($scope2_id, $cg__input_fail ? "a4" : "a5");
		_subscribe(_unfilled_if($scope0_reason, 3) && $input_fail__closures, _scope($scope2_id, { _: $wi__input_fail && _scope_with_id($scope0_id) }), $cg__input_fail && "a5");
	}, void 0, (err) => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<b>${_text_resume($scope1_id, "a", err.message, 1, 4, 0)}</b>`);
		const $inputbigBigSmall_scope = _peek_scope_id();
		let v = _dynamic_tag($scope1_id, "b", input.big ? huge_label_default : tiny_label_default, { label: input.label }, 5, void 0, void 0, void 0, $scope0_reason, 0, void 0, void 0, void 0, "a0");
		_var($scope1_id, "c", $inputbigBigSmall_scope, "a0");
		_html(`<i>${_text_resume($scope1_id, "d", v)}</i>`);
		(_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && _patch_init($scope1_id, "a1");
		(_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && _patch_init($scope1_id, "a2");
		_patch_join_init($scope1_id, "a3", $scope0_reason, 0, _filled_guard($scope0_reason, 1) && ">d", _filled_guard($scope0_reason, 2) && ">e");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_big__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 1) && "a1"), _client_guard($scope0_reason, 2) && "a2");
	}, void 0, "a6", "a7", 1, 1, 1);
	_filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va8", input.big);
	_filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "va9", input.label);
	_scope($scope0_id, {
		d: input.big,
		e: input.label,
		g: _write_if($scope0_reason, 1) && $input_big__closures,
		h: _write_if($scope0_reason, 2) && $input_label__closures,
		i: $wi__input_fail && _unfilled_if($scope0_reason, 3) && $input_fail__closures
	});
}, 1);
