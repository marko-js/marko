// tags/keeper.marko
_shells({ b: "b !b0; b%;<button class=toggle>t</button><!><!>" });
var keeper_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button class=toggle>t</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, 0, $wg__input_content);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b");
	_script($scope0_id, "b0");
	_patch_fill($scope0_id, "vb2", open, 1);
	_scope($scope0_id, {
		e: input.content,
		f: open
	}) || (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb1", input.content, !_server_guard($scope0_reason, 0)), _content_withhold(input.content));
});

// tags/plain.marko
_shells({ c: "c;b%;<!><!><!>" });
var plain_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_scope($scope0_id, {});
});

// template.marko
const $D_content__walks = "b%b%c";
const $D_content__template = "<!><!><!><!>";
_shells({
	a0: "a0",
	a: /*@__PURE__*/ (() => `a;${((_w0, _w1) => `D0${_w0}&/${_w1}&l`)($D_content__walks, $D_content__walks)};${((_w0, _w1) => `<main>${_w0}${_w1}</main>`)($D_content__template, $D_content__template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on = _write_guard($scope0_reason, 0), $wi__input_on = _write_if($scope0_reason, 0), $cg__input_on = _client_guard($scope0_reason, 0), $cg__input_a = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_on__closures = /* @__PURE__ */ new Set();
	const D = { content: _content("a3", ({ label, prev }) => {
		const $scope1_id = _scope_id();
		const $D_content__label__closures = /* @__PURE__ */ new Set();
		const $scope1_reason = _scope_reason(), $wg__prev = _write_guard($scope1_reason, 2), $wi__label = _write_if($scope1_reason, 1), $wi__label__OR__prev = _write_if($scope1_reason, 0);
		const X = { content: _content_resume("a0", () => {
			const $scope2_id = _scope_id();
			_scope_reason();
			_html(`<em>${_text_resume($scope2_id, "a", label, 1, $scope1_reason, 1)}</em>`);
			_unfilled_if($scope1_reason, 1) && _patch_init($scope2_id, _client_guard($scope1_reason, 1) ? "a1" : "a2");
			_subscribe(_unfilled_if($scope1_reason, 1) && $D_content__label__closures, _scope($scope2_id, { _: ($wi__input_on || $wi__label) && _scope_with_id($scope1_id) }));
		}, $scope1_id) };
		_dynamic_tag($scope1_id, "a", input.on ? keeper_default : plain_default, { content: X }, 1, 0, 0, $wg__input_on, $scope0_reason, 0);
		_dynamic_tag($scope1_id, "b", input.on ? keeper_default : plain_default, { content: prev }, 9, 0, 0, $wg__input_on || $wg__prev, (_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 2)) << 1, 0);
		const $return = X;
		$cg__input_on && _patch_write($scope1_id, "xf", prev, !(_filled_guard($scope1_reason, 2) && $cg__input_on));
		$cg__input_on && _patch_write($scope1_id, "wh", X, 1);
		_patch_init_entry($scope1_id, "a5", [_filled_guard($scope0_reason, 0) && ">f", _filled_guard($scope1_reason, 2) && "f"], (_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 2)) << 1, 0);
		($wi__input_on || $wi__label__OR__prev) && _subscribe(_unfilled_if((_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 2)) << 1, 0) && $wi__input_on && $input_on__closures, _scope($scope1_id, {
			e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope1_reason, 1)) && label,
			f: _unfilled_if($scope0_reason, 0) && prev,
			h: _unfilled_if($scope0_reason, 0) && X,
			_: ($wi__input_on || _write_if($scope1_reason, 2)) && _scope_with_id($scope0_id),
			k: $wi__label && $D_content__label__closures
		}), _client_guard((_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 2)) << 1, 0) && "a6", $wg__input_on || $wg__prev || $wg__input_on) || _filled_guard($scope1_reason, 1) && (_content_withheld("a0", $scope1_id) || $cg__input_on) && _patch_fill($scope1_id, "va4", label, !_server_guard($scope1_reason, 1));
		$wg__input_on || $wg__prev || $wg__input_on || ($wi__input_on || $wi__label__OR__prev) && _resume_branch($scope1_id);
		return $return;
	}, $scope0_id) };
	_html("<main>");
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 3);
	const $childScope = _peek_scope_id($scope0_id, "a", 2, $cg__input_a && 1);
	let first = D.content({ label: input.a });
	$cg__input_a && _var($scope0_id, "b", $childScope, "a7");
	_patch_child_end();
	_set_scope_reason(_mask_group($scope0_reason, 2) << 1 | _mask_group($scope0_reason, 2) << 3);
	const $childScope2 = _peek_scope_id($scope0_id, "c", 3);
	D.content({
		label: input.b,
		prev: first
	});
	_patch_child_end();
	_html("</main>");
	_scope($scope0_id, {
		f: input.on,
		j: $wi__input_on && $input_on__closures,
		a: _existing_scope($childScope),
		c: _existing_scope($childScope2)
	});
}, 1);
