// tags/card.marko
_shells({ b: "b !b1; b%;<button class=toggle>toggle</button><!><!>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $fg__input_content = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button class=toggle>toggle</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, 0, $wg__input_content);
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "b0");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b");
	_script($scope0_id, "b1");
	$fg__input_content && _patch_render($scope0_id, "b0", "e");
	_patch_fill($scope0_id, "vb2", open, 1);
	_scope($scope0_id, {
		e: input.content,
		f: open
	}) || $fg__input_content && _patch_write($scope0_id, "xe", input.content, !_server_guard($scope0_reason, 0));
});

// template.marko
_shells({
	a2: "a2 >>>a>",
	a4: "a4;b%;<!><!><!>",
	a: "a; ;<main></main>",
	a5: "a5;b%;<!><!><!>",
	a6: "a6;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_note = _client_guard($scope0_reason, 3), $scope0_page = _page_render(), $wg__input_on = _write_guard($scope0_reason, 6), $cg__input_on = _client_guard($scope0_reason, 6), $wi__input_show__OR__input_on = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 4), $ui__input_show = _unfilled_if($scope0_reason, 4), $ui__input_on = _unfilled_if($scope0_reason, 6), $wi__input_show = _write_if($scope0_reason, 4), $ui__input_show__OR__input_on = _unfilled_if($scope0_reason, 0), $fg__input_v = _filled_guard($scope0_reason, 5), $cg__input_show = _client_guard($scope0_reason, 4), $wi__input_on = _write_if($scope0_reason, 6);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	const $input_on__closures = /* @__PURE__ */ new Set();
	const Body = { content: _content("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_text_mark($scope1_id, "a", input.note, 1, $scope0_reason, 3)}</em>`);
		_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope1_id, "a1", $cg__input_note);
		_subscribe(_unfilled_if($scope0_reason, 3) && $input_note__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }), $cg__input_note && "a1");
	}, $scope0_id) };
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			_await($scope2_id, "a", input.v, (v) => {
				const $scope3_id = _scope_id();
				_dynamic_tag($scope3_id, "a", input.on ? card_default : "div", {}, 10, _content_resume("a2", () => {
					const $scope4_id = _scope_id();
					_scope_reason();
					const $childScope = _peek_scope_id($scope4_id, "a", 0, 0, $scope0_id);
					Body.content({});
					_patch_child_end();
					_scope($scope4_id, {
						_: $wi__input_show__OR__input_on && _scope_with_id($scope3_id),
						a: _existing_scope($childScope)
					});
				}, $scope3_id, ($scope) => $scope0_page ? [
					{ d: input.note },
					{ _: $scope($scope0_id) },
					{ _: $scope($scope2_id) }
				] : []), 0, $wg__input_on, $scope0_reason, 6, 0, void 0, 0, 0, "a2");
				_unfilled_if($scope0_reason, 6) && _patch_subscribe($scope3_id, "a3", $cg__input_on);
				$wi__input_show__OR__input_on && _subscribe(_unfilled_if($scope0_reason, 6) && $input_on__closures, _scope($scope3_id, {}), $cg__input_on && "a3", $wg__input_on);
				$wg__input_on || $wi__input_show__OR__input_on && _resume_branch($scope3_id);
			}, 1, "a4", _unfilled_if($scope0_reason, 5), 0, 1);
			_client_guard($scope0_reason, 5) && _patch_render($scope2_id, "a7");
			_write_if($scope0_reason, 2) && _scope($scope2_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a6"], $scope0_reason, 4);
	_html(`</main>${_el_mark($scope0_id, "a", $wg__input_show)}`);
	$fg__input_v && $cg__input_show && _patch_render($scope0_id, "a7", "f");
	_scope($scope0_id, {
		d: $wi__input_show__OR__input_on && ($ui__input_show__OR__input_on || _unfilled_if($scope0_reason, 3)) && input.note,
		f: $wi__input_show && ($ui__input_show || _unfilled_if($scope0_reason, 5)) && input.v,
		g: $wi__input_show && ($ui__input_show || $ui__input_on) && input.on,
		h: _write_if($scope0_reason, 3) && $input_note__closures,
		j: $wi__input_on && $wi__input_on && ($ui__input_on || $ui__input_show) && $input_on__closures
	}) || (_filled_guard($scope0_reason, 3) && (_client_branch_if("a2", $scope0_id) || $ui__input_show__OR__input_on) && _patch_write($scope0_id, "xd", input.note, !_server_guard($scope0_reason, 3)) && _patch_subscribers($scope0_id, "a8", "d"), $fg__input_v && $ui__input_show && _patch_write($scope0_id, "xf", input.v, !_server_guard($scope0_reason, 5)), _filled_guard($scope0_reason, 6) && $ui__input_show && _patch_write($scope0_id, "xg", input.on, !_server_guard($scope0_reason, 6)) && $cg__input_show && _patch_subscribers($scope0_id, "a9", "g"));
}, 1);
