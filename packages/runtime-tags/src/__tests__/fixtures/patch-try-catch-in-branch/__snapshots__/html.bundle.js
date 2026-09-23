// template.marko
function boom() {
	throw new Error("boom");
}
_shells({
	a0: "a0;D%b%;<em><!><!></em>",
	a: "a; ;<main></main>",
	a1: "a1;b%;<!><!><!>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $sg__input_show = _source_guard($scope0_reason, 1), $si__input_show = _source_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_message__closures = /* @__PURE__ */ new Set();
	const $input_boom__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_try($scope1_id, "a", _content_resume("a0", () => {
				const $scope2_id = _scope_id();
				_scope_reason();
				_html(`<em>${_patch_text($scope2_id, "a", input.message, void 0, $scope0_reason, 2)}${_patch_text($scope2_id, "b", input.boom ? boom() : "", 2, $scope0_reason, 3)}</em>`);
				_subscribe(_unfilled_if($scope0_reason, 3) && $input_boom__closures, _subscribe(_unfilled_if($scope0_reason, 2) && $input_message__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) })));
			}, $scope1_id), { catch: attrTag({ content: _content_elide("a2", (err) => {
				const $scope3_reason = _scope_reason(), $sg__err_message = _source_guard($scope3_reason, 0);
				const $scope3_id = _scope_id();
				_html(`<b>${_text_resume($scope3_id, "a", err.message, $sg__err_message)}</b>`);
				_source_if($scope3_reason, 0) && _scope($scope3_id, {});
			}, $scope1_id) }) });
			$scope0_page && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a1"], $scope0_reason, 1);
	_html(`</main>${_el_resume($scope0_id, "a", $sg__input_show)}`);
	$scope0_page && _scope($scope0_id, {
		e: $si__input_show && input.message,
		f: $si__input_show && input.boom,
		g: $input_message__closures,
		h: $input_boom__closures
	});
}, 1, 0);
