// tags/row.marko
function feed(inc, sfx) {
	return {
		status: inc.status,
		label: inc.status + sfx
	};
}
var row_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_inc = _serialize_guard($scope0_reason, 1), $sg__input_inc_pending__OR__input_inc_status = _serialize_guard($scope0_reason, 0), $si__input_inc_pending = _serialize_if($scope0_reason, 2), $si__input_inc = _serialize_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let sfx = "!";
	const item = feed(input.inc, sfx);
	_html(`<div${_attr_class([
		"row",
		item.status,
		input.inc.pending && "pending"
	])}><span class=badge>${_escape(item.label)}${_el_resume($scope0_id, "b", $sg__input_inc)}</span>`);
	_if(() => {
		if (item.status !== "resolved" && !input.inc.pending) {
			const $scope1_id = _scope_id();
			_html("<form class=derived></form>");
			$si__input_inc && writeScope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "c", $sg__input_inc, $sg__input_inc, $sg__input_inc, 0, 1);
	_if(() => {
		if (input.inc.status !== "resolved" && !input.inc.pending) {
			const $scope2_id = _scope_id();
			_html("<form class=direct></form>");
			_serialize_if($scope0_reason, 0) && writeScope($scope2_id, {});
			return 0;
		}
	}, $scope0_id, "d", $sg__input_inc_pending__OR__input_inc_status, $sg__input_inc_pending__OR__input_inc_status, $sg__input_inc, 0, 1);
	_html(`</div>${_el_resume($scope0_id, "a", $sg__input_inc)}`);
	$si__input_inc && writeScope($scope0_id, {
		h: input.inc?.pending,
		i: $si__input_inc_pending && input.inc?.status,
		k: sfx,
		n: $si__input_inc_pending && item?.status
	});
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let inc = { status: "open" };
	_html(`<button>go</button>${_el_resume($scope0_id, "a")}`);
	_set_serialize_reason(1);
	const $childScope = _peek_scope_id();
	row_default({ inc });
	_script($scope0_id, "a0");
	writeScope($scope0_id, { b: _existing_scope($childScope) });
	_resume_branch($scope0_id);
}, 1);
