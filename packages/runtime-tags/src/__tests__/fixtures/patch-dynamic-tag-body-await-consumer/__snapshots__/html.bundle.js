// tags/card.marko
_shells({
	b0: "b0 b11;b%;<!><!><!>",
	b1: "b1 b11;b%;<!><!><!>",
	b: "b !b7; b%;<button class=toggle>toggle</button><!><!>"
});
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_p__OR__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render(), $wi__input_content = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_content__closures = /* @__PURE__ */ new Set();
	const $open__closures = /* @__PURE__ */ new Set();
	let open = true;
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "a")}`);
	_await($scope0_id, "b", input.p, (x) => {
		const $scope1_id = _scope_id();
		const c = x && input.content;
		_content_withhold(c), _filled_guard($scope0_reason, 0) ? _patch_value($scope1_id, "vb2", c) : _patch_init($scope1_id, "b3");
		if ($scope0_page) _if(() => {
			{
				const $scope2_id = _scope_id();
				_dynamic_tag($scope2_id, "a", c, {}, 0, 0, $wg__input_p__OR__input_content);
				_scope($scope2_id, {});
				return 0;
			}
		}, $scope1_id, "a");
		_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "b4");
		_subscribe($open__closures, _subscribe(_unfilled_if($scope0_reason, 2) && $input_content__closures, _scope($scope1_id, {
			c: $wi__input_content && x,
			e: c,
			_: _scope_with_id($scope0_id)
		}), _client_guard($scope0_reason, 2) && "b5"), "b6");
	}, 1, "b0", 1);
	_script($scope0_id, "b7");
	_patch_write($scope0_id, "wf", input.content, 1);
	_patch_value($scope0_id, "vb9", open, 1);
	$scope0_page ? _scope($scope0_id, {
		f: _write_if($scope0_reason, 1) && input.content,
		g: open,
		h: $wi__input_content && $input_content__closures,
		i: $open__closures
	}) : (_filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "vb8", input.content, !_server_guard($scope0_reason, 2)), _content_withhold(input.content));
});

// template.marko
_shells({
	a0: "a0,",
	a: "a;D%;<main><!></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_on__OR__input_p = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.on ? card_default : "div", { p: input.on && input.p }, _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_patch_text($scope1_id, "a", input.note, void 0, $scope0_reason, 4)}</em>`);
		_unfilled_if($scope0_reason, 4) && _patch_init($scope1_id, "a1");
		_subscribe(_unfilled_if($scope0_reason, 4) && $input_note__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }));
	}, $scope0_id, ($scope) => $scope0_page ? [{ g: input.note }] : []), 0, $wg__input_on__OR__input_p, void 0, 1, $scope0_reason, 0);
	_html("</main>");
	_patch_write($scope0_id, "wd", input.on, 1);
	_patch_write($scope0_id, "we", input.p, 1);
	$scope0_page ? _scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 0)) && input.on,
		e: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.p,
		g: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 4)) && input.note,
		h: _write_if($scope0_reason, 4) && $input_note__closures
	}) : _filled_guard($scope0_reason, 4) && _content_withheld("a0", $scope0_id) && _patch_value($scope0_id, "va2", input.note, !_server_guard($scope0_reason, 4));
}, 1);
