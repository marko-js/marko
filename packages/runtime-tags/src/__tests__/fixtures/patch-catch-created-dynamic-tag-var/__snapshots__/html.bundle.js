// tags/huge-label.marko
_shells({ b: "b;D ;<em> </em>" });
var huge_label_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<em>${_patch_text($scope0_id, "a", input.label, void 0, $scope0_reason, 0)}</em>`);
	const $return = input.label + "!";
	$scope0_page && _scope($scope0_id, {});
	return $return;
});

// tags/tiny-label.marko
_shells({ c: "c;D ;<b> </b>" });
var tiny_label_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<b>${_patch_text($scope0_id, "a", input.label, void 0, $scope0_reason, 0)}</b>`);
	const $return = input.label + "?";
	$scope0_page && _scope($scope0_id, {});
	return $return;
});

// template.marko
function boom() {
	throw new Error("SHOWN_message");
}
_shells({
	a0: "a0;D ;<p> </p>",
	a: "a;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_fail = _write_if($scope0_reason, 3), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_big__closures = /* @__PURE__ */ new Set();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_fail__closures = /* @__PURE__ */ new Set();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_patch_text($scope2_id, "a", input.fail ? boom() : "ok", void 0, $scope0_reason, 3)}</p>`);
		_unfilled_if($scope0_reason, 3) && _patch_init($scope2_id, "a4");
		_subscribe(_unfilled_if($scope0_reason, 3) && $input_fail__closures, _scope($scope2_id, { _: $wi__input_fail && _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 3) && "a4");
	}, void 0, (err) => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<b>${_patch_text($scope1_id, "a", err.message)}</b>`);
		const $inputbigBigSmall_scope = _peek_scope_id();
		let v = _dynamic_tag($scope1_id, "b", input.big ? huge_label_default : tiny_label_default, { label: input.label });
		_var($scope1_id, "c", $inputbigBigSmall_scope, "a1", void 0, 1);
		_html(`<i>${_text_resume($scope1_id, "d", v)}</i>`);
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_big__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 1) && "a2"), _client_guard($scope0_reason, 2) && "a3");
	}, void 0, "a5", "a0", 1, "");
	$scope0_page ? _scope($scope0_id, {
		d: input.big,
		e: input.label,
		g: _write_if($scope0_reason, 1) && $input_big__closures,
		h: _write_if($scope0_reason, 2) && $input_label__closures,
		i: $wi__input_fail && _unfilled_if($scope0_reason, 3) && $input_fail__closures
	}) : (_filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "va6", input.big, !_server_guard($scope0_reason, 1)), _content_withhold(input.big), _filled_guard($scope0_reason, 2) && _patch_value($scope0_id, "va7", input.label, !_server_guard($scope0_reason, 2)), _content_withhold(input.label));
}, 1);
