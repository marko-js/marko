// tags/keeper.marko
_shells({ b: "b !b1; b%;<button class=toggle>t</button><!><!>" });
var keeper_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $fg__input_content = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button class=toggle>t</button>${_el_mark($scope0_id, "a")}`);
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
	a: `a;${((_w0, _w1) => `D0${_w0}&/${_w1}&l`)($D_content__walks, $D_content__walks)};${((_w0, _w1) => `<main>${_w0}${_w1}</main>`)($D_content__template, $D_content__template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on = _write_guard($scope0_reason, 0), $wi__input_on = _write_if($scope0_reason, 0), $uf__input_on = _updates_from($scope0_reason, 0), $ui__input_a = _unfilled_if($scope0_reason, 1), $uf__input_a = _updates_from($scope0_reason, 1), $uf__input_b = _updates_from($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_on__closures = /* @__PURE__ */ new Set();
	const D = { content: _content("a2", ({ label, prev }) => {
		const $scope1_id = _scope_id(), $ui__input_on = _unfilled_if($scope0_reason, 0);
		const $D_content__label__closures = /* @__PURE__ */ new Set();
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render(), $cg__label = _client_guard($scope1_reason, 1), $wg__prev = _write_guard($scope1_reason, 2), $fg__label = _filled_guard($scope1_reason, 1), $fg__prev = _filled_guard($scope1_reason, 2), $wi__label = _write_if($scope1_reason, 1);
		const X = { content: _content_resume("a0", () => {
			const $scope2_id = _scope_id();
			_scope_reason();
			_html(`<em>${_text_mark($scope2_id, "a", label, 1, $scope1_reason, 1)}</em>`);
			_unfilled_if($scope1_reason, 1) && _patch_subscribe($scope2_id, "a1", $cg__label);
			_subscribe(_unfilled_if($scope1_reason, 1) && $D_content__label__closures, _scope($scope2_id, { _: ($wi__input_on || $wi__label) && _scope_with_id($scope1_id) }), $cg__label && "a1");
		}, $scope1_id, ($scope) => $scope1_page ? [{ e: label }] : []) };
		_dynamic_tag($scope1_id, "a", input.on ? keeper_default : plain_default, { content: X }, 1, 0, 0, $wg__input_on, $scope0_reason, 0, 0, void 0, 0, 0, "a0");
		_dynamic_tag($scope1_id, "b", input.on ? keeper_default : plain_default, { content: prev }, 9, 0, 0, $wg__input_on || $wg__prev, $uf__input_on << 1, 0, 0, void 0, 0, 0, "a0");
		const $return = X;
		$ui__input_on && _patch_write($scope1_id, "wh", X, 1);
		$fg__label && _patch_subscribers($scope1_id, "a3", "e");
		_patch_render($scope1_id, "a4", ((_filled_guard($scope0_reason, 0) ? " >f" : "") + ($fg__prev ? " f" : "")).slice(1), $uf__input_on << 1, 0);
		($wi__input_on || _write_if($scope1_reason, 0)) && _subscribe(_unfilled_if($uf__input_on << 1, 0) && $wi__input_on && $input_on__closures, _scope($scope1_id, {
			e: ($ui__input_on || _unfilled_if($scope1_reason, 1)) && label,
			f: $ui__input_on && prev,
			h: $ui__input_on && X,
			_: $wi__input_on && _scope_with_id($scope0_id),
			k: $wi__label && $D_content__label__closures
		}), _client_guard($uf__input_on << 1, 0) && "a5", $wg__input_on || $wg__prev || $wg__input_on) || ($fg__label && (_client_branch_if("a0", $scope1_id) || _client_guard($scope0_reason, 0) || $ui__input_on) && _patch_write($scope1_id, "xe", label, !_server_guard($scope1_reason, 1)), $fg__prev && $ui__input_on && _patch_write($scope1_id, "xf", prev, 1));
		return $return;
	}, $scope0_id) };
	_html("<main>");
	_set_scope_reason($uf__input_a << 1 | $uf__input_a << 3);
	const $childScope = _peek_scope_id($scope0_id, "a", 2, $ui__input_a && 1);
	let first = D.content({ label: input.a });
	$ui__input_a && _var($scope0_id, "b", $childScope, "a6");
	_patch_child_end();
	_set_scope_reason($uf__input_b << 1 | $uf__input_b << 3);
	const $childScope2 = _peek_scope_id($scope0_id, "c", 3);
	D.content({
		label: input.b,
		prev: first
	});
	_patch_child_end();
	_html("</main>");
	_scope($scope0_id, {
		j: $wi__input_on && $input_on__closures,
		a: _existing_scope($childScope),
		c: _existing_scope($childScope2)
	});
}, 1);
