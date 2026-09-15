// tags/row.marko
function feed(inc, sfx) {
	return {
		status: inc.status,
		label: inc.status + sfx
	};
}
var row_default = _template("__tests__/tags/row.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_inc = _serialize_guard($scope0_reason, 1), $sg__input_inc_pending__OR__input_inc_status = _serialize_guard($scope0_reason, 0), $si__input_inc_pending = _serialize_if($scope0_reason, 2), $si__input_inc = _serialize_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let sfx = "!";
	const item = feed(input.inc, sfx);
	_html(`<div${_attr_class([
		"row",
		item.status,
		input.inc.pending && "pending"
	])}><span class=badge>${_escape(item.label)}${_el_resume($scope0_id, "#text/1", $sg__input_inc)}</span>`);
	_if(() => {
		if (item.status !== "resolved" && !input.inc.pending) {
			const $scope1_id = _scope_id();
			_html("<form class=derived></form>");
			$si__input_inc && writeScope($scope1_id, {}, "__tests__/tags/row.marko", "13:4");
			return 0;
		}
	}, $scope0_id, "#text/2", $sg__input_inc, $sg__input_inc, $sg__input_inc, 0, 1);
	_if(() => {
		if (input.inc.status !== "resolved" && !input.inc.pending) {
			const $scope2_id = _scope_id();
			_html("<form class=direct></form>");
			_serialize_if($scope0_reason, 0) && writeScope($scope2_id, {}, "__tests__/tags/row.marko", "14:4");
			return 0;
		}
	}, $scope0_id, "#text/3", $sg__input_inc_pending__OR__input_inc_status, $sg__input_inc_pending__OR__input_inc_status, $sg__input_inc, 0, 1);
	_html(`</div>${_el_resume($scope0_id, "#div/0", $sg__input_inc)}`);
	$si__input_inc && writeScope($scope0_id, {
		input_inc_pending: input.inc?.pending,
		input_inc_status: $si__input_inc_pending && input.inc?.status,
		sfx,
		item_status: $si__input_inc_pending && item?.status
	}, "__tests__/tags/row.marko", 0, {
		input_inc_pending: ["input.inc.pending"],
		input_inc_status: ["input.inc.status"],
		sfx: "9:6",
		item_status: ["item.status", "10:8"]
	});
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let inc = { status: "open" };
	_html(`<button>go</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_serialize_reason(1);
	const $childScope = _peek_scope_id();
	row_default({ inc });
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
