// template.marko
_shells({
	a4: "a4",
	a0: "a0 !a1",
	a: "a;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 1), $wi__input_label__OR__input_which = _write_if($scope0_reason, 0), $wg__input_label__OR__input_which = _write_guard($scope0_reason, 0), $ui__input_label__OR__input_which = _unfilled_if($scope0_reason, 0), $ui__input_label = _unfilled_if($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 1), $fg__input_which = _filled_guard($scope0_reason, 2), $wi__input_label = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const Counter = { content: _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		let n = 0;
		_html(`<button class=inc>${_text_mark($scope1_id, "b", input.label, 1, $scope0_reason, 1)} ${_text_mark($scope1_id, "c", n, 2)}</button>${_el_mark($scope1_id, "a")}`);
		_script($scope1_id, "a1");
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope1_id, "a2", $cg__input_label);
		_patch_fill($scope1_id, "va3", n, 1);
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope1_id, {
			d: n,
			_: $wi__input_label__OR__input_which && _scope_with_id($scope0_id)
		}), $cg__input_label && "a2");
	}, $scope0_id) };
	const Other = { content: _content_resume("a4", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html(`<i>${_text_mark($scope2_id, "a", input.label, 1, $scope0_reason, 1)}</i>`);
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "a5", $cg__input_label);
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope2_id, {
			_: $wi__input_label__OR__input_which && _scope_with_id($scope0_id),
			Ci: $wi__input_label && 1
		}), $cg__input_label && "a5");
	}, $scope0_id) };
	_dynamic_tag($scope0_id, "a", input.which ? Counter : Other, { label: input.label }, 1, 0, 0, $wg__input_label__OR__input_which, $scope0_reason, 0);
	_patch_render($scope0_id, "a7", (($fg__input_label ? " d" : "") + ($fg__input_which ? " e" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		d: ($ui__input_label__OR__input_which || $ui__input_label) && input.label,
		e: $ui__input_label__OR__input_which && input.which,
		f: $ui__input_label__OR__input_which && Counter,
		g: $ui__input_label__OR__input_which && Other,
		i: $wi__input_label && $input_label__closures
	}) || ($fg__input_label && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "xd", input.label, !_server_guard($scope0_reason, 1)) && _patch_subscribers($scope0_id, "a6", "d"), $fg__input_which && $ui__input_label && _patch_write($scope0_id, "xe", input.which, !_server_guard($scope0_reason, 2)));
}, 1);
