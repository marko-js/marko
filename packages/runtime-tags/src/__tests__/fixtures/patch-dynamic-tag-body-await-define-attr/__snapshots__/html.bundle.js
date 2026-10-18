// tags/keeper.marko
_shells({ c: "c !c0; b%;<button class=toggle>toggle</button><!><!>" });
var keeper_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "a")}`);
	if ($scope0_page) _if(() => {
		{
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, $wg__input_content);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b");
	_script($scope0_id, "c0");
	_patch_value($scope0_id, "vc2", open, 1);
	$scope0_page ? _scope($scope0_id, {
		e: input.content,
		f: open
	}) : (_filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "vc1", input.content, !_server_guard($scope0_reason, 0)), _content_withhold(input.content));
});

// tags/card.marko
const $Pass_content__walks = "b%c";
const $Pass_content__template = "<!><!><!>";
_shells({
	b0: "b0 !;b%;<!><!><!>",
	b1: /*@__PURE__*/ (() => `b1;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Pass_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Pass_content__template)}`)(),
	b2: /*@__PURE__*/ (() => `b2;${((_w0) => `b/${_w0}&b`)($Pass_content__walks)};${((_w0) => `<!>${_w0}<!>`)($Pass_content__template)}`)(),
	b: "b;b%;<!><!><!>"
});
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_content__closures = /* @__PURE__ */ new Set();
	const Pass = { content: _content_elide("b0", ({ c, on }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__c__OR__on = _write_guard($scope2_reason, 0), $scope2_page = _page_render();
		_dynamic_tag($scope2_id, "a", on ? keeper_default : "div", { content: c }, 0, 0, $wg__c__OR__on, void 0, 1, $scope2_reason, 0);
		_patch_write($scope2_id, "wd", c, 1);
		_patch_write($scope2_id, "we", on, 1);
		_client_guard($scope2_reason, 0) && _patch_init($scope2_id, "b5");
		$scope2_page ? _write_if($scope2_reason, 0) && _scope($scope2_id, {
			d: (_unfilled_if($scope2_reason, 2) || _unfilled_if($scope2_reason, 0) || _unfilled_if($scope2_reason, 1)) && c,
			e: (_unfilled_if($scope2_reason, 1) || _unfilled_if($scope2_reason, 0) || _unfilled_if($scope2_reason, 2)) && on
		}) : (_filled_guard($scope2_reason, 1) && _client_guard($scope2_reason, 2) && _patch_value($scope2_id, "vb3", c, !_server_guard($scope2_reason, 1)), _client_guard($scope2_reason, 2) && _content_withhold(c), _filled_guard($scope2_reason, 2) && _client_guard($scope2_reason, 1) && _patch_value($scope2_id, "vb4", on, !_server_guard($scope2_reason, 2)), _client_guard($scope2_reason, 1) && _content_withhold(on));
	}, $scope0_id) };
	_await($scope0_id, "a", input.p, (x) => {
		const $scope1_id = _scope_id();
		_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 2) << 3 | _mask_group($scope0_reason, 1) << 5);
		const $childScope = _patch_child($scope1_id, "a");
		Pass.content({
			c: input.content,
			on: x
		});
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, _client_guard($scope0_reason, 2) ? "b6" : "b7");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_content__closures, _scope($scope1_id, {
			_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		}), _client_guard($scope0_reason, 2) && "b7");
	}, 1, "b1", 1, 1);
	_patch_write($scope0_id, "we", input.content, 1);
	$scope0_page && _scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.content,
		f: _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_content__closures
	});
});

// template.marko
_shells({
	a0: "a0,",
	a: "a !;D%;<main><!></main>"
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
