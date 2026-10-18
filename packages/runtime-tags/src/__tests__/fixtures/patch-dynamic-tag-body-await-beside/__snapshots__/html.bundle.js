// tags/card.marko
_shells({ b: "b !b0; b%;<button class=toggle>toggle</button><!><!>" });
var card_default = _template("b", (input) => {
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
	_script($scope0_id, "b0");
	_patch_value($scope0_id, "vb2", open, 1);
	$scope0_page ? _scope($scope0_id, {
		e: input.content,
		f: open
	}) : (_filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "vb1", input.content, !_server_guard($scope0_reason, 0)), _content_withhold(input.content));
});

// template.marko
_shells({
	a0: "a0,",
	a1: "a1,",
	a2: "a2 !;b%;<!><!><!>",
	a3: "a3 !;b%;<!><!><!>",
	a: "a !;D%b%;<main><!><!></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_on = _write_guard($scope0_reason, 4), $wi__input_v__OR__input_on__OR__input_note = _write_if($scope0_reason, 2), $wi__input_note = _write_if($scope0_reason, 5);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	const $input_on__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_await($scope0_id, "a", input.v, (v) => {
		const $scope1_id = _scope_id();
		const $await_content__v__closures = /* @__PURE__ */ new Set();
		_dynamic_tag($scope1_id, "a", input.on ? card_default : "div", {}, _content_resume("a1", () => {
			const $scope2_id = _scope_id();
			_scope_reason();
			_html(`<em>${_patch_text($scope2_id, "a", input.note, void 0, $scope0_reason, 5)} ${_patch_text($scope2_id, "b", v, 2, $scope0_reason, 3)}</em>`);
			_unfilled_if($scope0_reason, 5) && _patch_init($scope2_id, "a4");
			_unfilled_if($scope0_reason, 3) && _patch_init($scope2_id, "a5");
			_subscribe(_unfilled_if($scope0_reason, 3) && $await_content__v__closures, _subscribe(_unfilled_if($scope0_reason, 5) && $input_note__closures, _scope($scope2_id, { _: $wi__input_v__OR__input_on__OR__input_note && _scope_with_id($scope1_id) })));
		}, $scope1_id, ($scope) => $scope0_page ? [{ g: input.note }, {
			c: v,
			_: $scope($scope0_id)
		}] : []), 0, $wg__input_on, void 0, 2, $scope0_reason, 4);
		_filled_guard($scope0_reason, 3) && _content_withheld("a1", $scope1_id) && _patch_value($scope1_id, "va6", v);
		_filled_guard($scope0_reason, 5) && _content_withheld("a1", $scope1_id) && _patch_value($scope0_id, "va7", input.note);
		_unfilled_if($scope0_reason, 4) && _patch_init($scope1_id, "a8");
		$wi__input_v__OR__input_on__OR__input_note && _subscribe(_unfilled_if($scope0_reason, 4) && $input_on__closures, _scope($scope1_id, {
			c: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 3)) && v,
			_: _scope_with_id($scope0_id),
			j: _write_if($scope0_reason, 3) && $await_content__v__closures
		}), _client_guard($scope0_reason, 4) && "a8", $wg__input_on);
		$wg__input_on || $wi__input_v__OR__input_on__OR__input_note && _resume_branch($scope1_id);
	}, 1, "a2", 1);
	_dynamic_tag($scope0_id, "b", input.on ? card_default : "div", {}, _content_resume("a0", () => {
		const $scope3_id = _scope_id();
		_scope_reason();
		_html(`<b>${_patch_text($scope3_id, "a", input.note, void 0, $scope0_reason, 5)}</b>`);
		_unfilled_if($scope0_reason, 5) && _patch_init($scope3_id, "a9");
		_subscribe(_unfilled_if($scope0_reason, 5) && $input_note__closures, _scope($scope3_id, {
			_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
			Ci: $wi__input_note && 1
		}));
	}, $scope0_id, ($scope2) => $scope0_page ? [{ g: input.note }] : []), 0, $wg__input_on, void 0, 2, $scope0_reason, 4);
	_html("</main>");
	_patch_write($scope0_id, "wf", input.on, 1);
	$scope0_page ? _scope($scope0_id, {
		f: _unfilled_if($scope0_reason, 3) && input.on,
		g: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 5)) && input.note,
		i: $wi__input_note && $input_note__closures,
		h: _write_if($scope0_reason, 4) && _unfilled_if($scope0_reason, 4) && $input_on__closures
	}) : _filled_guard($scope0_reason, 5) && _content_withheld("a0", $scope0_id) && _patch_value($scope0_id, "va7", input.note, !_server_guard($scope0_reason, 5));
}, 1);
