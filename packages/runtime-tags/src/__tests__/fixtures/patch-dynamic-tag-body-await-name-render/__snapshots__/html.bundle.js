// tags/card.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b1: "b1;b%;<!><!><!>",
	b2: "b2;b%;<!><!><!>",
	b: "b;b%;<!><!><!>"
});
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 1), $cg__input_content = _client_guard($scope0_reason, 1), $wi__input_content = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_content__closures = /* @__PURE__ */ new Set();
	_await($scope0_id, "a", input.p, (x) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 1);
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope1_id, "b0", $cg__input_content);
		$wi__input_content && _subscribe(_unfilled_if($scope0_reason, 1) && $input_content__closures, _scope($scope1_id, {}), $cg__input_content && "b0", $wg__input_content);
	}, 1, "b1", _unfilled_if($scope0_reason, 0), 1, 1);
	_scope($scope0_id, { f: $wi__input_content && _unfilled_if($scope0_reason, 1) && $input_content__closures });
});

// tags/keeper.marko
_shells({ c: "c !c1; b%;<button class=toggle>toggle</button><!><!>" });
var keeper_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $fg__input_content = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button class=toggle>toggle</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, 0, $wg__input_content);
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "c0");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b");
	_script($scope0_id, "c1");
	$fg__input_content && _patch_render($scope0_id, "c0", "e");
	_patch_fill($scope0_id, "vc2", open, 1);
	_scope($scope0_id, {
		e: input.content,
		f: open
	}) || $fg__input_content && _patch_write($scope0_id, "xe", input.content, !_server_guard($scope0_reason, 0));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({
	a0: "a0",
	a: `a${_shell_marker($setup)};${((_w0) => `D/${_w0}&l`)("b%c")};${((_w0) => `<main>${_w0}</main>`)($template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_note = _client_guard($scope0_reason, 3), $wg__input_on = _write_guard($scope0_reason, 2), $wi__input_on__OR__input_note = _write_if($scope0_reason, 0), $fg__input_note = _filled_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	const $input_on__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_set_scope_reason(_updates_from($scope0_reason, 1) << 1);
	const $childScope = _peek_scope_id($scope0_id, "a", 1);
	card_default({
		p: input.p,
		content: _content("a3", () => {
			_scope_reason();
			const $scope1_page = _page_render();
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.on ? keeper_default : "div", {}, 2, _content_resume("a0", () => {
				const $scope2_id = _scope_id();
				_scope_reason();
				_html(`<em>${_text_mark($scope2_id, "a", input.note, 1, $scope0_reason, 3)}</em>`);
				_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope2_id, "a1", $cg__input_note);
				_subscribe(_unfilled_if($scope0_reason, 3) && $input_note__closures, _scope($scope2_id, { _: $wi__input_on__OR__input_note && _scope_with_id($scope1_id) }), $cg__input_note && "a1");
			}, $scope1_id, ($scope) => $scope1_page ? [{ f: input.note }, { _: $scope($scope0_id) }] : []), 0, $wg__input_on, $scope0_reason, 2, 0, void 0, 0, 0, "a0");
			$wi__input_on__OR__input_note && _subscribe(_unfilled_if($scope0_reason, 2) && $input_on__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 2) && "a2", $wg__input_on);
			$wg__input_on || $wi__input_on__OR__input_note && _resume_branch($scope1_id);
		}, $scope0_id)
	});
	_patch_child_end();
	_html("</main>");
	$fg__input_note && _patch_subscribers($scope0_id, "a4", "f");
	_scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.note,
		h: _write_if($scope0_reason, 3) && $input_note__closures,
		g: _write_if($scope0_reason, 2) && $input_on__closures,
		a: _existing_scope($childScope)
	}) || $fg__input_note && (_client_branch_if("a0", $scope0_id) || _unfilled_if($scope0_reason, 2)) && _patch_write($scope0_id, "xf", input.note, !_server_guard($scope0_reason, 3));
}, 1);
