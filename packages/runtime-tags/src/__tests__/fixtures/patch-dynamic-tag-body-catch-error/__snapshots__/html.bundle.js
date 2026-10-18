// tags/card.marko
_shells({
	b0: "b0 b10;b%;<!><!><!>",
	b: "b !b6; b%;<button id=toggle>fail</button><!><!>",
	b1: "b1 b3;b%;<!><!><!>"
});
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_content__closures = /* @__PURE__ */ new Set();
	const $fail__closures = /* @__PURE__ */ new Set();
	let fail = false;
	_html(`<button id=toggle>fail</button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		if ($scope0_page) _if(() => {}, $scope3_id, "a");
		_subscribe($fail__closures, _scope($scope3_id, { _: _scope_with_id($scope0_id) }), "b4");
	}, void 0, (err) => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<i>${_patch_text($scope1_id, "a", err.message)}</i>`);
		_if(() => {
			if (err) {
				const $scope2_id = _scope_id();
				_dynamic_tag($scope2_id, "a", input.content, {}, 0, 0, $wg__input_content, void 0, 2, $scope0_reason, 0);
				_client_guard($scope0_reason, 0) && _patch_init($scope2_id, "b2");
				_subscribe(_unfilled_if($scope0_reason, 0) && $input_content__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "b3", $wg__input_content);
				return 0;
			}
		}, $scope1_id, "b", 1, _write_guard($scope1_reason, 0), void 0, void 0, void 0, ["b1"]);
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, void 0, "b5", "b0", 1, "");
	_script($scope0_id, "b6");
	_patch_value($scope0_id, "vb8", fail, 1);
	$scope0_page ? _scope($scope0_id, {
		e: input.content,
		g: _write_if($scope0_reason, 0) && $input_content__closures,
		h: $fail__closures
	}) : (_filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "vb7", input.content, !_server_guard($scope0_reason, 0)), _content_withhold(input.content));
});

// template.marko
_shells({
	a0: "a0,",
	a: "a !;D%;<main><!></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_on = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.on ? card_default : "div", {}, _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_patch_text($scope1_id, "a", input.note, void 0, $scope0_reason, 2)}</em>`);
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, "a1");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_note__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }));
	}, $scope0_id, ($scope) => $scope0_page ? [{ e: input.note }] : []), 0, $wg__input_on, void 0, 2, $scope0_reason, 1);
	_html("</main>");
	$scope0_page ? _scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.note,
		f: _write_if($scope0_reason, 2) && $input_note__closures
	}) : _filled_guard($scope0_reason, 2) && _content_withheld("a0", $scope0_id) && _patch_value($scope0_id, "va2", input.note, !_server_guard($scope0_reason, 2));
}, 1);
