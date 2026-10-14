// counter.marko
_shells({ a: "a !a1; D ;<button> </button>" });
_client_return("a");
var counter_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = input;
	_html(`<button>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}`);
	const $return = n;
	_script($scope0_id, "a1");
	const $valueChange2 = _patch_bind($scope0_id, "dU", _resume(function(v) {
		n = v;
	}, "a0", $scope0_id) || void 0, 0, 0);
	_patch_value($scope0_id, "va2", n, 1);
	$scope0_page && _scope($scope0_id, {
		e: n,
		U: $valueChange2
	});
	return $return;
});

// template.marko
_shells({ b: "b !;D1bD ;<main><!><p> </p></main>" });
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	const $inputoncounternull_scope = _peek_scope_id();
	let n = _dynamic_tag($scope0_id, "a", input.on ? counter_default : null, [input.start], 0, 1, void 0, "b0", 1, $scope0_reason, 0);
	_var($scope0_id, "b", $inputoncounternull_scope, "b0");
	_html(`<p>${_text_resume($scope0_id, "c", n)}</p></main>`);
	_patch_write($scope0_id, "wf", input.on, 1);
	_patch_write($scope0_id, "wg", input.start, 1);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "b3");
	$scope0_page ? _scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.on,
		g: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.start
	}) : (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "vb1", input.on), _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "vb2", input.start));
}, 1);
