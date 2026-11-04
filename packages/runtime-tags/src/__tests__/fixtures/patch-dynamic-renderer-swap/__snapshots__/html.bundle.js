// card-a.marko
_shells({ a: "a;D ;<section class=a> </section>" });
var card_a_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<section class=a>${_text_mark($scope0_id, "a", input.label, 1, $scope0_reason, 0)}</section>`);
	_scope($scope0_id, {});
});

// card-b.marko
_shells({ b: "b;D%;<article class=b><!>!</article>" });
var card_b_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<article class=b>${_text_mark($scope0_id, "a", input.label, 1, $scope0_reason, 0)}!</article>`);
	_scope($scope0_id, {});
});

// template.marko
_shells({ c: "c !c0;D%b D ;<main><!><button> </button></main>" });
var template_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_mode__OR__input_label = _unfilled_if($scope0_reason, 0), $fg__input_mode = _filled_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let n = 0;
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.mode === "a" ? card_a_default : card_b_default, { label: input.label }, 1, 0, 0, _write_guard($scope0_reason, 0), $scope0_reason, 0);
	_html(`<button>${_text_mark($scope0_id, "c", n)}</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "c0");
	_patch_render($scope0_id, "c1", (($fg__input_mode ? " f" : "") + ($fg__input_label ? " g" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		f: _write_if($scope0_reason, 2) && $ui__input_mode__OR__input_label && input.mode,
		g: _write_if($scope0_reason, 1) && $ui__input_mode__OR__input_label && input.label,
		i: n
	}) || ($fg__input_mode && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "xf", input.mode, !_server_guard($scope0_reason, 1)), $fg__input_label && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xg", input.label, !_server_guard($scope0_reason, 2)));
}, 1);
