// card-a.marko
_shells({ a: "a;D ;<section class=a> </section>" });
var card_a_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<section class=a>${_patch_text($scope0_id, "a", input.label, void 0, $scope0_reason, 0)}</section>`);
	$scope0_page && _scope($scope0_id, {});
});

// card-b.marko
_shells({ b: "b;D%;<article class=b><!>!</article>" });
var card_b_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<article class=b>${_patch_text($scope0_id, "a", input.label, void 0, $scope0_reason, 0)}!</article>`);
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
_shells({ c: "c !c0;D%b D ;<main><!><button> </button></main>" });
var template_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.mode === "a" ? card_a_default : card_b_default, { label: input.label }, 0, 0, _write_guard($scope0_reason, 0), void 0, 1, $scope0_reason, 0);
	_html(`<button>${_text_resume($scope0_id, "c", n)}</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "c0");
	_patch_write($scope0_id, "wf", input.mode, 1);
	_patch_write($scope0_id, "wg", input.label, 1);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "c3");
	_patch_value($scope0_id, "vc4", n, 1);
	$scope0_page ? _scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.mode,
		g: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.label,
		i: n
	}) : (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "vc1", input.mode), _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "vc2", input.label));
}, 1);
