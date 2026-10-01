// tags/row.marko
function feed(inc, sfx) {
	return {
		status: inc.status,
		label: inc.status + sfx
	};
}
var row_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_inc = _write_guard($scope0_reason, 0), $wi__input_inc_pending = _write_if($scope0_reason, 1), $wi__input_inc = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let sfx = "!";
	const item = feed(input.inc, sfx);
	const upper = item.status.toUpperCase();
	_html(`<div${_attr_class([
		"row",
		item.status,
		input.inc.pending && "pending"
	])}><span class=badge>${_text_resume($scope0_id, "b", item.label, $wg__input_inc)}</span><span${_attr_class([
		"state",
		upper,
		input.inc.pending && "pending"
	])}></span>${_el_resume($scope0_id, "c", $wg__input_inc)}`);
	_if(() => {
		if (item.status !== "resolved" && !input.inc.pending) {
			const $scope1_id = _scope_id();
			_html("<form class=derived></form>");
			$wi__input_inc && _scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "d", $wg__input_inc, $wg__input_inc, $wg__input_inc, 0, 1);
	_html(`</div>${_el_resume($scope0_id, "a", $wg__input_inc)}`);
	$wi__input_inc && _scope($scope0_id, {
		h: input.inc?.pending,
		i: sfx,
		l: $wi__input_inc_pending && item?.status,
		o: $wi__input_inc_pending && upper
	});
	$wg__input_inc || $wi__input_inc && _resume_branch($scope0_id);
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let inc = { status: "open" };
	const flag = inc.status + (inc.pending ? "?" : "");
	_html(`<button>resolve</button>${_el_resume($scope0_id, "a")}<span${_attr_class([
		"flag",
		flag,
		inc.status
	])}></span>${_el_resume($scope0_id, "b")}`);
	_set_scope_reason(10);
	const $childScope = _peek_scope_id();
	row_default({ inc });
	_script($scope0_id, "a0");
	_scope($scope0_id, { c: _existing_scope($childScope) });
}, 1);
