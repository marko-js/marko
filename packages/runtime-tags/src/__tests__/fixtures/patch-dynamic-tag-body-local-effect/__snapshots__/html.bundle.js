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
	a0: "a0",
	a: "a; ;<main></main>",
	a6: "a6; b%;<div></div><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_note = _client_guard($scope0_reason, 2), $wi__input_note__OR__input_on = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 1), $sg__input_note = _server_guard($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 1), $fg__input_note = _filled_guard($scope0_reason, 2), $fg__input_on = _filled_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $if_content__x__closures = /* @__PURE__ */ new Set();
			const x = input.note + "!";
			_filled_guard($scope0_reason, 2) && _patch_write($scope1_id, "xc", x, !$sg__input_note);
			_html(`<div></div>${_el_mark($scope1_id, "a")}`);
			_dynamic_tag($scope1_id, "b", input.on ? card_default : "div", {}, 2, _content_resume("a0", () => {
				const $scope2_id = _scope_id();
				_scope_reason();
				_html(`<em>${_text_mark($scope2_id, "a", x, 1, $scope0_reason, 2)}</em>`);
				_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope2_id, "a1", $cg__input_note);
				_subscribe(_unfilled_if($scope0_reason, 2) && $if_content__x__closures, _scope($scope2_id, { _: $wi__input_note__OR__input_on && _scope_with_id($scope1_id) }));
			}, $scope1_id), 0, _write_guard($scope0_reason, 3), $scope0_reason, 3);
			_script($scope1_id, "a2", 1, _filled_guard($scope0_reason, 2), "c");
			_filled_guard($scope0_reason, 2) && _patch_subscribers($scope1_id, "a3", "c");
			$cg__input_note && _patch_render($scope1_id, "a4");
			_client_guard($scope0_reason, 3) && _patch_render($scope1_id, "a5");
			_scope($scope1_id, {
				c: x,
				_: $wi__input_note__OR__input_on && _scope_with_id($scope0_id),
				i: _write_if($scope0_reason, 2) && $if_content__x__closures
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a6"], $scope0_reason, 1);
	_html(`</main>${_el_mark($scope0_id, "a", $wg__input_show)}`);
	$fg__input_note && $cg__input_show && _patch_render($scope0_id, "a4", "e");
	$fg__input_on && $cg__input_show && _patch_render($scope0_id, "a5", "f");
	_scope($scope0_id, {
		e: _write_if($scope0_reason, 1) && input.note,
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.on
	}) || ($fg__input_note && $cg__input_show && _patch_write($scope0_id, "xe", input.note, !$sg__input_note), $fg__input_on && $cg__input_show && _patch_write($scope0_id, "xf", input.on, !_server_guard($scope0_reason, 3)));
}, 1);
