// tags/row.marko
function feed(inc, sfx) {
	return {
		status: inc.status,
		label: inc.status + sfx
	};
}
var row_default = _template("__tests__/tags/row.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_inc = _write_guard($scope0_reason, 0), $wi__input_inc = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let sfx = "!";
	const item = feed(input.inc, sfx);
	const upper = item.status.toUpperCase();
	_html(`<span${_attr_class([upper, input.inc.pending && "pending"])}></span>${_el_mark($scope0_id, "#span/0", $wg__input_inc)}`);
	_script($scope0_id, "__tests__/tags/row.marko_0_item_status#8", $wg__input_inc);
	_scope($scope0_id, {
		input_inc_pending: $wi__input_inc && input.inc?.pending,
		sfx: $wi__input_inc && sfx,
		item_status: item?.status,
		upper: _write_if($scope0_reason, 1) && upper
	}, "__tests__/tags/row.marko", 0, {
		input_inc_pending: ["input.inc.pending"],
		sfx: "5:6",
		item_status: ["item.status", "6:8"],
		upper: "7:8"
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let inc = { status: "open" };
	_html(`<button>pend</button>${_el_mark($scope0_id, "#button/0")}`);
	_set_scope_reason(10);
	const $childScope = _peek_scope_id();
	row_default({ inc });
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
