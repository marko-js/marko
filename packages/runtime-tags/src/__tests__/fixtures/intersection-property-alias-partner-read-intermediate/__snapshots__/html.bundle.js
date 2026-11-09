// tags/row.marko
function feed(inc, sfx) {
	return {
		status: inc.status,
		label: inc.status + sfx
	};
}
var row_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_inc = _write_guard($scope0_reason, 0), $wi__input_inc = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let sfx = "!";
	const item = feed(input.inc, sfx);
	const upper = item.status.toUpperCase();
	_html(`<span${_attr_class([upper, input.inc.pending && "pending"])}></span>${_el_mark($scope0_id, "a", $wg__input_inc)}`);
	_script($scope0_id, "b0", $wg__input_inc);
	_scope($scope0_id, {
		e: $wi__input_inc && input.inc?.pending,
		f: $wi__input_inc && sfx,
		i: item?.status,
		j: _write_if($scope0_reason, 1) && upper
	});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let inc = { status: "open" };
	_html(`<button>pend</button>${_el_mark($scope0_id, "a")}`);
	_set_scope_reason(10);
	const $childScope = _peek_scope_id();
	row_default({ inc });
	_script($scope0_id, "a0");
	_scope($scope0_id, { b: _existing_scope($childScope) });
}, 1);
