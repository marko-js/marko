// tags/row.marko
function feed(inc, sfx) {
	return {
		status: inc.status,
		label: inc.status + sfx
	};
}
var row_default = _template("__tests__/tags/row.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_inc = _serialize_guard($scope0_reason, 0), $si__input_inc_pending = _serialize_if($scope0_reason, 1), $si__input_inc = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let sfx = "!";
	const item = feed(input.inc, sfx);
	const upper = item.status.toUpperCase();
	_html(`<div${_attr_class([
		"row",
		item.status,
		input.inc.pending && "pending"
	])}><span class=badge>${_text_resume($scope0_id, "#text/1", item.label, $sg__input_inc)}</span><span${_attr_class([
		"state",
		upper,
		input.inc.pending && "pending"
	])}></span>${_el_resume($scope0_id, "#span/2", $sg__input_inc)}`);
	_if(() => {
		if (item.status !== "resolved" && !input.inc.pending) {
			const $scope1_id = _scope_id();
			_html("<form class=derived></form>");
			$si__input_inc && _scope($scope1_id, {}, "__tests__/tags/row.marko", "11:4");
			return 0;
		}
	}, $scope0_id, "#text/3", $sg__input_inc, $sg__input_inc, $sg__input_inc, 0, 1);
	_html(`</div>${_el_resume($scope0_id, "#div/0", $sg__input_inc)}`);
	$si__input_inc && _scope($scope0_id, {
		input_inc_pending: input.inc?.pending,
		sfx,
		item_status: $si__input_inc_pending && item?.status,
		upper: $si__input_inc_pending && upper
	}, "__tests__/tags/row.marko", 0, {
		input_inc_pending: ["input.inc.pending"],
		sfx: "5:6",
		item_status: ["item.status", "6:8"],
		upper: "7:8"
	});
	$sg__input_inc || $si__input_inc && _resume_branch($scope0_id);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let inc = { status: "open" };
	const flag = inc.status + (inc.pending ? "?" : "");
	_html(`<button>resolve</button>${_el_resume($scope0_id, "#button/0")}<span${_attr_class([
		"flag",
		flag,
		inc.status
	])}></span>${_el_resume($scope0_id, "#span/1")}`);
	_set_serialize_reason(10);
	const $childScope = _peek_scope_id();
	row_default({ inc });
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { "#childScope/2": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
