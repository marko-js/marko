// template.marko
_shells({
	a4: "a4",
	a0: "a0 !a1",
	a: "a;b1bD ;<!><!><p> </p>"
});
_stateful_return("a0");
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 1), $wi__input_label__OR__input_which = _write_if($scope0_reason, 0), $ui__input_label = _unfilled_if($scope0_reason, 1), $ui__input_label__OR__input_which = _unfilled_if($scope0_reason, 0), $ui__input_which = _unfilled_if($scope0_reason, 2), $fg__input_label = _filled_guard($scope0_reason, 1), $fg__input_which = _filled_guard($scope0_reason, 2), $wi__input_label = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const Counter = { content: _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		let n = 0;
		_html(`<button class=inc>${_text_mark($scope1_id, "b", input.label, 1, $scope0_reason, 1)} ${_text_mark($scope1_id, "c", n, 2)}</button>${_el_mark($scope1_id, "a")}`);
		const $return = n;
		_script($scope1_id, "a1");
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope1_id, "a2", $cg__input_label);
		_patch_fill($scope1_id, "va3", n, 1);
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope1_id, {
			d: n,
			_: $wi__input_label__OR__input_which && _scope_with_id($scope0_id)
		}), $cg__input_label && "a2");
		return $return;
	}, $scope0_id) };
	const Other = { content: _content_resume("a4", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html(`<i>${_text_mark($scope2_id, "a", input.label, 1, $scope0_reason, 1)}</i>`);
		const $return2 = -1;
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "a5", $cg__input_label);
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope2_id, {
			_: $wi__input_label__OR__input_which && _scope_with_id($scope0_id),
			Cl: $wi__input_label && 1
		}), $cg__input_label && "a5");
		return $return2;
	}, $scope0_id) };
	const $inputwhichCounterOther_scope = _peek_scope_id();
	let count = _dynamic_tag($scope0_id, "a", input.which ? Counter : Other, { label: input.label }, 1, 0, 0, 1, $scope0_reason, 0, 0, void 0, 0, "a6");
	_var($scope0_id, "b", $inputwhichCounterOther_scope, "a6");
	_html(`<p>${_text_mark($scope0_id, "c", count)}</p>`);
	_patch_render($scope0_id, "a8", (($fg__input_label ? " f" : "") + ($fg__input_which ? " g" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		f: ($ui__input_which || $ui__input_label__OR__input_which || $ui__input_label) && input.label,
		g: ($ui__input_label || $ui__input_label__OR__input_which) && input.which,
		h: $ui__input_label__OR__input_which && Counter,
		i: $ui__input_label__OR__input_which && Other,
		l: $wi__input_label && $input_label__closures
	}) || ($fg__input_label && $ui__input_which && _patch_write($scope0_id, "xf", input.label, !_server_guard($scope0_reason, 1)) && _patch_subscribers($scope0_id, "a7", "f"), $fg__input_which && $ui__input_label && _patch_write($scope0_id, "xg", input.which, !_server_guard($scope0_reason, 2)));
}, 1);
