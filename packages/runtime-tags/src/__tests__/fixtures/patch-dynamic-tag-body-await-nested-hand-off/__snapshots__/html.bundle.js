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
_shells({
	b0: "b0;b%;<!><!><!>",
	b1: "b1;b%;<!><!><!>",
	b2: "b2 b9;b%;<!><!><!>",
	b3: "b3 b9;b%;<!><!><!>",
	b: "b;b%;<!><!><!>"
});
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_p__OR__input_content = _write_guard($scope0_reason, 0), $wi__input_p__OR__input_content = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_p__closures = /* @__PURE__ */ new Set();
	const $input_content__closures = /* @__PURE__ */ new Set();
	_await($scope0_id, "a", input.p, (x) => {
		const $scope1_id = _scope_id();
		const $await_content__c__closures = /* @__PURE__ */ new Set();
		const c = x && input.content;
		_await($scope1_id, "a", input.p, (y) => {
			const $scope2_id = _scope_id();
			_dynamic_tag($scope2_id, "a", y ? keeper_default : "div", { content: c }, 0, 0, $wg__input_p__OR__input_content, void 0, 1, $scope0_reason, 0);
			_unfilled_if($scope0_reason, 0) && _patch_init($scope2_id, "b4");
			_client_guard($scope0_reason, 0) && _patch_init($scope2_id, "b5");
			$wi__input_p__OR__input_content && _subscribe(_unfilled_if($scope0_reason, 0) && $await_content__c__closures, _scope($scope2_id, {
				c: _unfilled_if($scope0_reason, 0) && y,
				_: _scope_with_id($scope1_id)
			}), _client_guard($scope0_reason, 0) && "b4", $wg__input_p__OR__input_content);
			$wg__input_p__OR__input_content || $wi__input_p__OR__input_content && _resume_branch($scope2_id);
		}, 1, "b0", 1, 1);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, _client_guard($scope0_reason, 1) ? "b6" : "b7");
		_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "b8");
		$wi__input_p__OR__input_content && _subscribe(_unfilled_if($scope0_reason, 2) && $input_content__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_p__closures, _scope($scope1_id, {
			c: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && x,
			e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && c,
			_: _scope_with_id($scope0_id),
			h: _unfilled_if($scope0_reason, 0) && $await_content__c__closures
		}), _client_guard($scope0_reason, 1) && "b7", 0), _client_guard($scope0_reason, 2) && "b9", 0);
		$wi__input_p__OR__input_content && _resume_branch($scope1_id);
	}, 1, "b2", 1, 1);
	_patch_write($scope0_id, "we", input.content, 1);
	$scope0_page ? _scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.content,
		f: _write_if($scope0_reason, 1) && (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && $input_p__closures,
		g: _write_if($scope0_reason, 2) && (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && $input_content__closures
	}) : (_filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "vb10", input.content, !_server_guard($scope0_reason, 2)), _client_guard($scope0_reason, 1) && _content_withhold(input.content));
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
