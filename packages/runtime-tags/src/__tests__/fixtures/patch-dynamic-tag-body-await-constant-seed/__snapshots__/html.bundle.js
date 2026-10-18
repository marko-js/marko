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
const $template = "<!><!><!>";
_shells({
	b0: "b0,",
	b1: "b1;b%;<!><!><!>",
	b2: "b2;b%;<!><!><!>",
	b: "b;b%;<!><!><!>"
});
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_on = _write_guard($scope0_reason, 3), $wi__input_v__OR__input_on__OR__input_note = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	const $input_on__closures = /* @__PURE__ */ new Set();
	_await($scope0_id, "a", input.v, (v) => {
		const $scope1_id = _scope_id();
		const $await_content__v__closures = /* @__PURE__ */ new Set();
		_dynamic_tag($scope1_id, "a", input.on ? keeper_default : "div", {}, _content_resume("b0", () => {
			const $scope2_id = _scope_id();
			_scope_reason();
			_html(`<em>${_patch_text($scope2_id, "a", input.note, void 0, $scope0_reason, 4)} ${_patch_text($scope2_id, "b", v, 2, $scope0_reason, 2)}</em>`);
			_unfilled_if($scope0_reason, 4) && _patch_init($scope2_id, _client_guard($scope0_reason, 4) ? "b3" : "b4");
			_unfilled_if($scope0_reason, 2) && _patch_init($scope2_id, _client_guard($scope0_reason, 2) ? "b5" : "b6");
			_subscribe(_unfilled_if($scope0_reason, 2) && $await_content__v__closures, _subscribe(_unfilled_if($scope0_reason, 4) && $input_note__closures, _scope($scope2_id, { _: $wi__input_v__OR__input_on__OR__input_note && _scope_with_id($scope1_id) })));
		}, $scope1_id, ($scope) => $scope0_page ? [{ f: input.note }, {
			c: v,
			_: $scope($scope0_id)
		}] : []), 0, $wg__input_on, void 0, 2, $scope0_reason, 3);
		_filled_guard($scope0_reason, 2) && _content_withheld("b0", $scope1_id) && _patch_value($scope1_id, "vb7", v);
		_filled_guard($scope0_reason, 4) && _content_withheld("b0", $scope1_id) && _patch_value($scope0_id, "vb8", input.note);
		_unfilled_if($scope0_reason, 3) && _patch_init($scope1_id, _client_guard($scope0_reason, 3) ? "b9" : "b10");
		$wi__input_v__OR__input_on__OR__input_note && _subscribe(_unfilled_if($scope0_reason, 3) && $input_on__closures, _scope($scope1_id, {
			c: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 2)) && v,
			_: _scope_with_id($scope0_id),
			i: _write_if($scope0_reason, 2) && $await_content__v__closures
		}), _client_guard($scope0_reason, 3) && "b10", $wg__input_on);
		$wg__input_on || $wi__input_v__OR__input_on__OR__input_note && _resume_branch($scope1_id);
	}, 1, "b1", 1, 1);
	_patch_write($scope0_id, "we", input.on, 1);
	$scope0_page && _scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.on,
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 4)) && input.note,
		h: _write_if($scope0_reason, 4) && $input_note__closures,
		g: _write_if($scope0_reason, 3) && _unfilled_if($scope0_reason, 3) && $input_on__closures
	});
});

// template.marko
_shells({
	a: "a; ;<main></main>",
	a0: /*@__PURE__*/ (() => `a0;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 0) << 3 | _mask_group($scope0_reason, 3) << 5 | _mask_group($scope0_reason, 2) << 7);
			const $childScope = _patch_child($scope1_id, "a");
			card_default({
				note: "n",
				on: input.on,
				v: input.v
			});
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a0"], $scope0_reason, 1);
	_html(`</main>${_el_resume($scope0_id, "a", $wg__input_show)}`);
	$scope0_page ? _scope($scope0_id, {
		e: _unfilled_if($scope0_reason, 1) && input.on,
		f: _unfilled_if($scope0_reason, 1) && input.v
	}) : (_filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "va1", input.on, !_server_guard($scope0_reason, 2)), _client_guard($scope0_reason, 1) && _content_withhold(input.on), _filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "va2", input.v, !_server_guard($scope0_reason, 3)));
}, 1);
