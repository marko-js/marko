// tags/wrap.marko
const $template = "<div><!></div>";
const $setup$1 = [[], []];
_shells({ d: "d;D%;<div><!></div>" });
var wrap_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</div>");
	_scope($scope0_id, {});
});

// tags/show-value.marko
_shells({ c: "c;D ;<em> </em>" });
var show_value_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_text_resume($scope0_id, "a", input.value, 1, $scope0_reason, 0)}</em>`);
	_scope($scope0_id, {});
});

// tags/card.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({
	b0: "b0 b4;D ;<b> </b>",
	"~b0": "~b0 b4;D ;<b> </b>",
	b: /*@__PURE__*/ (() => `b${_shell_marker($setup)};${((_w0) => `/${_w0}&%c`)("D%l")};${((_w0) => `${_w0}<!><!>`)($template)}`)()
});
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_w = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $n__closures = /* @__PURE__ */ new Set();
	let n = input.n;
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	wrap_default({ content: _content("b0", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<b>${_text_resume($scope2_id, "a", n)}</b>`);
		_subscribe($n__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }));
	}, $scope0_id, 1) });
	_patch_child_end();
	_if(() => {
		if (n) {
			const $scope1_id = _scope_id();
			_html("<section><h3>Branch heading</h3><p>Static paragraph text that only the branch renders.</p></section>");
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope2 = _peek_scope_id($scope1_id, "a", 1);
			show_value_default({ value: input.w });
			_patch_child_end();
			_scope($scope1_id, {
				_: $wi__input_w && _scope_with_id($scope0_id),
				a: $wi__input_w && _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "b");
	!_client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb2", n, 1);
	_scope($scope0_id, {
		f: input.w,
		i: $n__closures,
		a: _existing_scope($childScope)
	}) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vb1", input.w, !_server_guard($scope0_reason, 1));
});

// template.marko
_shells({ a: "a !;D%;<main><!></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on__OR__input_n__OR__input_w = _write_guard($scope0_reason, 3), $cg__input_n__OR__input_w = _client_guard($scope0_reason, 2), $cg__input_on__OR__input_w = _client_guard($scope0_reason, 1), $cg__input_on__OR__input_n = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.on ? card_default : "div", {
		n: input.n,
		w: input.w
	}, 1, 0, 0, $wg__input_on__OR__input_n__OR__input_w, $scope0_reason, 3);
	_html("</main>");
	_scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.on,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.n,
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 3)) && input.w
	}) || (_filled_guard($scope0_reason, 4) && $cg__input_n__OR__input_w && _patch_fill($scope0_id, "va0", input.on, !_server_guard($scope0_reason, 4)), $cg__input_n__OR__input_w && _content_withhold(input.on), _filled_guard($scope0_reason, 5) && $cg__input_on__OR__input_w && _patch_fill($scope0_id, "va1", input.n, !_server_guard($scope0_reason, 5)), $cg__input_on__OR__input_w && _content_withhold(input.n), _filled_guard($scope0_reason, 6) && $cg__input_on__OR__input_n && _patch_fill($scope0_id, "va2", input.w, !_server_guard($scope0_reason, 6)), $cg__input_on__OR__input_n && _content_withhold(input.w));
}, 1);
