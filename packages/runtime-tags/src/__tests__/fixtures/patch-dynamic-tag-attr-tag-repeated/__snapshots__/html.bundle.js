// template.marko
_shells({
	a5: "a5",
	a0: "a0 !a1",
	a6: "a6",
	a7: "a7",
	a: "a !;D%;<main><!></main>",
	a4: "a4;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_on = _write_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_a__closures = /* @__PURE__ */ new Set();
	const $input_b__closures = /* @__PURE__ */ new Set();
	const Wrap = { content: _content_resume("a0", ({ item }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $wg__item = _write_guard($scope3_reason, 0);
		_content_withhold(item), _patch_fill($scope3_id, "va2", item);
		let open = true;
		_html(`<button class=toggle>t</button>${_el_resume($scope3_id, "a")}`);
		if ($scope0_page) _if(() => {
			{
				const $scope4_id = _scope_id();
				if ($scope0_page) _for_of(item, (it) => {
					const $scope5_id = _scope_id();
					_dynamic_tag($scope5_id, "a", it, {}, 0, 0, 0, $wg__item);
					_write_if($scope3_reason, 0) && _scope($scope5_id, {});
				}, 0, $scope4_id, "a", $wg__item, $wg__item);
				_scope($scope4_id, {});
				return 0;
			}
		}, $scope3_id, "b");
		_script($scope3_id, "a1");
		_patch_fill($scope3_id, "va3", open, 1);
		_scope($scope3_id, {
			e: item,
			f: open
		});
	}, $scope0_id) };
	const Plain = { content: _content_resume("a5", ({ item }) => {
		const $scope6_id = _scope_id();
		const $scope6_reason = _scope_reason(), $wg__item2 = _write_guard($scope6_reason, 0);
		_for_of(item, (it) => {
			const $scope7_id = _scope_id();
			_dynamic_tag($scope7_id, "a", it, {}, 10, 0, 0, $wg__item2);
			_write_if($scope6_reason, 0) && _scope($scope7_id, {});
		}, 0, $scope6_id, "a", 1, void 0, void 0, void 0, void 0, "a4");
		_scope($scope6_id, {});
	}, $scope0_id) };
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.on ? Wrap : Plain, { item: attrTags(attrTag({ content: _content_resume("a7", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<em>${_patch_text($scope1_id, "a", input.a, void 0, $scope0_reason, 4)}</em>`);
		_unfilled_if($scope0_reason, 4) && _patch_init($scope1_id, _client_guard($scope0_reason, 4) ? "a8" : "a9");
		_subscribe(_unfilled_if($scope0_reason, 4) && $input_a__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }));
	}, $scope0_id, ($scope) => $scope0_page ? [{ e: input.a }] : []) }), { content: _content_resume("a6", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<b>${_patch_text($scope2_id, "a", input.b, void 0, $scope0_reason, 5)}</b>`);
		_unfilled_if($scope0_reason, 5) && _patch_init($scope2_id, _client_guard($scope0_reason, 5) ? "a10" : "a11");
		_subscribe(_unfilled_if($scope0_reason, 5) && $input_b__closures, _scope($scope2_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }));
	}, $scope0_id, ($scope2) => $scope0_page ? [{ f: input.b }] : []) }) }, 17, 0, 0, $wg__input_on, $scope0_reason, 3);
	_html("</main>");
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 4)) && input.a,
		f: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 5)) && input.b,
		g: _unfilled_if($scope0_reason, 3) && Wrap,
		h: _unfilled_if($scope0_reason, 3) && Plain,
		j: _write_if($scope0_reason, 4) && $input_a__closures,
		k: _write_if($scope0_reason, 5) && $input_b__closures
	}) || (_filled_guard($scope0_reason, 4) && _content_withheld("a7", $scope0_id) && _patch_fill($scope0_id, "va12", input.a, !_server_guard($scope0_reason, 4)), _filled_guard($scope0_reason, 5) && _content_withheld("a6", $scope0_id) && _patch_fill($scope0_id, "va13", input.b, !_server_guard($scope0_reason, 5)));
}, 1);
