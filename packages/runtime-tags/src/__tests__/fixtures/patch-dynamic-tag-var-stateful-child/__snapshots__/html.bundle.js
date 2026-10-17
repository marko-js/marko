// tags/counter.marko
_shells({ b: "b !b0; D%c%;<button class=inc><!> <!></button>" });
_client_return("b");
var counter_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=inc>${_patch_text($scope0_id, "b", input.label, void 0, $scope0_reason, 0)} ${_text_resume($scope0_id, "c", n, 2)}</button>${_el_resume($scope0_id, "a")}`);
	const $return = n;
	_script($scope0_id, "b0");
	_patch_value($scope0_id, "vb1", n, 1);
	$scope0_page && _scope($scope0_id, { g: n });
	return $return;
});

// tags/other.marko
_shells({ c: "c;D ;<i> </i>" });
var other_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<i>${_patch_text($scope0_id, "a", input.label, void 0, $scope0_reason, 0)}</i>`);
	const $return = -1;
	$scope0_page && _scope($scope0_id, {});
	return $return;
});

// template.marko
_shells({ a: "a;b1b D ;<!><!><p> </p>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $inputwhichcounterother_scope = _peek_scope_id();
	let count = _dynamic_tag($scope0_id, "a", input.which ? counter_default : other_default, { label: input.label }, void 0, void 0, void 0, "a0", 1, $scope0_reason, 0);
	_var($scope0_id, "b", $inputwhichcounterother_scope, "a0");
	_html(`<p>${_text_resume($scope0_id, "d", count)}</p>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a1", 1, 1);
	_patch_write($scope0_id, "wg", input.which, 1);
	_patch_write($scope0_id, "wh", input.label, 1);
	$scope0_page && _scope($scope0_id, {
		g: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.which,
		h: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.label,
		j: count
	});
}, 1);
