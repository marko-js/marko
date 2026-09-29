// template.marko
_shells({
	a0: "a0;D ;<b> </b>",
	a1: "a1;b%bD ;<!><!><span> </span>",
	a: "a;D%;<main><!></main>",
	a2: "a2;D ;<b> </b>",
	a3: "a3;b%;<!><!><!>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $sg__input_show = _source_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_a__closures = /* @__PURE__ */ new Set();
	const $input_show__closures = /* @__PURE__ */ new Set();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_if(() => {
			if (input.show) {
				const $scope2_id = _scope_id();
				_await($scope2_id, "a", input.a, (a) => {
					const $scope4_id = _scope_id();
					_html(`<b>${_patch_text($scope4_id, "a", a, void 0, $scope0_reason, 3)}</b>`);
					_scope($scope4_id, {});
				}, 1, "a0");
				$scope0_page && _subscribe(_unfilled_if($scope0_reason, 3) && $input_a__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), _client_guard($scope0_reason, 3) && "a4", 0);
				return 0;
			}
		}, $scope1_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a3"], $scope0_reason, 2);
		_html(`<span>${_patch_text($scope1_id, "b", input.label, void 0, $scope0_reason, 4)}</span>`);
		_subscribe(_unfilled_if($scope0_reason, 4) && $input_label__closures, _subscribe(_unfilled_if($scope0_reason, 2) && $input_show__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 2) && "a5"), _client_guard($scope0_reason, 4) && "a6");
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<i>loading</i>");
	}, void 0, "a7", void 0, "a1", 1);
	_html("</main>");
	$scope0_page && _scope($scope0_id, {
		e: _source_if($scope0_reason, 2) && input.a,
		h: $input_a__closures,
		g: $input_show__closures,
		i: $input_label__closures
	});
}, 1, 0);
