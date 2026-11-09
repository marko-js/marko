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
	_html(`<div${_attr_class([
		"row",
		item.status,
		input.inc.pending && "pending"
	])}><span class=badge>${_text_mark($scope0_id, "#text/1", item.label, $wg__input_inc)}</span><span${_attr_class([
		"state",
		upper,
		input.inc.pending && "pending"
	])}></span>${_el_mark($scope0_id, "#span/2", $wg__input_inc)}`);
	_if(() => {
		if (item.status !== "resolved" && !input.inc.pending) {
			const $scope1_id = _scope_id();
			_html("<form class=derived></form>");
			$wi__input_inc && _scope($scope1_id, {}, "__tests__/tags/row.marko", "11:4");
			return 0;
		}
	}, $scope0_id, "#text/3", $wg__input_inc, $wg__input_inc, 0, 0, 1);
	_html(`</div>${_el_mark($scope0_id, "#div/0", $wg__input_inc)}`);
	$wi__input_inc && _scope($scope0_id, {
		input_inc_pending: input.inc?.pending,
		sfx
	}, "__tests__/tags/row.marko", 0, {
		input_inc_pending: ["input.inc.pending"],
		sfx: "5:6"
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let inc = { status: "open" };
	const flag = inc.status + (inc.pending ? "?" : "");
	_html(`<button>resolve</button>${_el_mark($scope0_id, "#button/0")}<span${_attr_class([
		"flag",
		flag,
		inc.status
	])}></span>${_el_mark($scope0_id, "#span/1")}`);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	row_default({ inc });
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { "#childScope/2": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
