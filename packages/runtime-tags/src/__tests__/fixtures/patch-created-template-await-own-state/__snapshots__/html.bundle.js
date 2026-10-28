// tags/card.marko
_shells({
	b4: "b4;b%;<!><!><!>",
	b: "b b5!b1; b%;<button class=toggle>toggle</button><!><!>"
});
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $wi__input_content = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_content__closures = /* @__PURE__ */ new Set();
	let n = 1;
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "a")}`);
	_await($scope0_id, "b", Promise.resolve(n), (x) => {
		const $scope1_id = _scope_id();
		_if(() => {
			if (x) {
				const $scope2_id = _scope_id();
				_dynamic_tag($scope2_id, "a", input.content, {}, 0, 0, 0, $wg__input_content);
				_subscribe($wi__input_content && $input_content__closures, _scope($scope2_id, {}), "b0", $wg__input_content);
				return 0;
			}
		}, $scope1_id, "a");
		_scope($scope1_id, {});
	}, 1, 0, 1);
	_script($scope0_id, "b1");
	_patch_fill($scope0_id, "vb3", n, 1);
	_scope($scope0_id, {
		e: input.content,
		f: n,
		g: $wi__input_content && $input_content__closures
	}) || (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb2", input.content, !_server_guard($scope0_reason, 0)), _content_withhold(input.content));
});

// template.marko
_shells({
	a0: "a0",
	a: "a !;D%;<main><!></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_on = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.on ? card_default : "div", {}, 2, _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_text_resume($scope1_id, "a", input.note, 1, $scope0_reason, 2)}</em>`);
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, _client_guard($scope0_reason, 2) ? "a1" : "a2");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_note__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }));
	}, $scope0_id, ($scope) => $scope0_page ? [{ e: input.note }] : []), 0, $wg__input_on, $scope0_reason, 1);
	_html("</main>");
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.note,
		f: _write_if($scope0_reason, 2) && $input_note__closures
	}) || _filled_guard($scope0_reason, 2) && _content_withheld("a0", $scope0_id) && _patch_fill($scope0_id, "va3", input.note, !_server_guard($scope0_reason, 2));
}, 1);
