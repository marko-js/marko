// template.marko
_shells({
	a2: "a2;D ;<p> </p>",
	a: "a !;b%b%;<!><!><!><!>",
	a1: "a1; ;<div>shown</div>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items__OR__input_id = _write_guard($scope0_reason, 0), $wg__input_id = _write_guard($scope0_reason, 2), $wi__input_id = _write_if($scope0_reason, 2), $cg__input_items = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_id__closures = /* @__PURE__ */ new Set();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 1) && _unfilled_if($scope0_reason, 0) && _patch_write($scope1_id, "xd", item?.on, !_server_guard($scope0_reason, 1));
		_html("<div>");
		const $show = item.on ? input.id : "";
		_show_start($show, 1, $wg__input_items__OR__input_id, "</div>");
		_html("shown");
		_show_end($scope1_id, "a", $show, 1, $wg__input_items__OR__input_id, "</div>", void 0, 0, void 0, void 0, $scope0_reason, 0);
		(_filled_guard($scope0_reason, 2) && !$cg__input_items || _filled_guard($scope0_reason, 1)) && _patch_join_init($scope1_id, "a0", $scope0_reason, 0, _filled_guard($scope0_reason, 2) && ">f", _filled_guard($scope0_reason, 1) && "d");
		_scope($scope1_id, {
			d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && item?.on,
			_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id)
		});
	}, "k", $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "a1", $scope0_reason, 1);
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html(`<p>${_patch_text($scope3_id, "a", input.id, void 0, $scope0_reason, 2)}</p>`);
		_unfilled_if($scope0_reason, 2) && _patch_init($scope3_id, _client_guard($scope0_reason, 2) ? "a4" : "a5");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_id__closures, _scope($scope3_id, {
			_: $wi__input_id && _scope_with_id($scope0_id),
			Cg: $wi__input_id && 1
		}), "a5");
	}, () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`loading ${_text_resume($scope2_id, "a", input.id, $wg__input_id * 2)}`);
		_subscribe($wi__input_id && $input_id__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }), "a3", $wg__input_id);
		$wg__input_id || _resume_branch($scope2_id);
	}, void 0, "a6", void 0, "a2", 1);
	_scope($scope0_id, {
		f: input.id,
		g: $wi__input_id && $input_id__closures
	}) || _filled_guard($scope0_reason, 2) && ($cg__input_items ? _patch_fill($scope0_id, "va8", input.id) : _patch_fill($scope0_id, "va7", input.id, !_server_guard($scope0_reason, 2)));
}, 1);
