// tags/counter.marko
_shells({ b: "b !b0; D%c%;<button class=inc><!> <!></button>" });
_stateful_return("b");
var counter_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=inc>${_text_mark($scope0_id, "b", input.label, 1, $scope0_reason, 0)} ${_text_mark($scope0_id, "c", n, 2)}</button>${_el_mark($scope0_id, "a")}`);
	const $return = n;
	_script($scope0_id, "b0");
	_patch_fill($scope0_id, "vb1", n, 1);
	_scope($scope0_id, { g: n });
	return $return;
});

// tags/other.marko
_shells({ c: "c;D ;<i> </i>" });
var other_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<i>${_text_mark($scope0_id, "a", input.label, 1, $scope0_reason, 0)}</i>`);
	const $return = -1;
	_scope($scope0_id, {});
	return $return;
});

// template.marko
_shells({ a: "a;b1b D ;<!><!><p> </p>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_which__OR__input_label = _unfilled_if($scope0_reason, 0), $ui__input_label = _unfilled_if($scope0_reason, 2), $ui__input_which = _unfilled_if($scope0_reason, 1), $fg__input_which = _filled_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $inputwhichcounterother_scope = _peek_scope_id();
	let count = _dynamic_tag($scope0_id, "a", input.which ? counter_default : other_default, { label: input.label }, 1, 0, 0, 1, $scope0_reason, 0, 0, void 0, 0, "a0");
	_var($scope0_id, "b", $inputwhichcounterother_scope, "a0");
	_html(`<p>${_text_mark($scope0_id, "d", count)}</p>${_el_mark($scope0_id, "c")}`);
	_script($scope0_id, "a1");
	_patch_render($scope0_id, "a2", [$fg__input_which && "g", $fg__input_label && "h"], $scope0_reason, 0);
	_scope($scope0_id, {
		g: ($ui__input_label || $ui__input_which__OR__input_label) && input.which,
		h: ($ui__input_which || $ui__input_which__OR__input_label) && input.label,
		j: count
	}) || ($fg__input_which && $ui__input_label && _patch_write($scope0_id, "xg", input.which, !_server_guard($scope0_reason, 1)), $fg__input_label && $ui__input_which && _patch_write($scope0_id, "xh", input.label, !_server_guard($scope0_reason, 2)));
}, 1);
