// tags/card.marko
_shells({ b: "b !b0; b%;<button class=toggle>toggle</button><!><!>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "a")}`);
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

// tags/counter.marko
const $template = "<button class=inc> </button>";
const $walks = " D l";
const $setup = [[], ["c0"]];
_shells({ c: "c !c0; D ;<button class=inc> </button>" });
_stateful_return("c");
var counter_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let c = 1;
	_html(`<button class=inc>${_text_resume($scope0_id, "b", c)}</button>${_el_resume($scope0_id, "a")}`);
	const $return = c;
	_script($scope0_id, "c0");
	_patch_fill($scope0_id, "vc1", c, 1);
	_scope($scope0_id, { c });
	return $return;
});

// template.marko
_shells({
	a1: "a1 a9",
	a: "a !; ;<main></main>",
	a5: /*@__PURE__*/ (() => `a5${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `0${_w0}&%c`)($walks)};${/*@__PURE__*/ ((_w0) => `${_w0}<!><!>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_show = _write_guard($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $if_content__v__closures = /* @__PURE__ */ new Set();
			const $childScope = _patch_child($scope1_id, "a", 0, 1);
			let v = counter_default({});
			_var($scope1_id, "b", $childScope, "a0");
			_patch_child_end();
			_dynamic_tag($scope1_id, "c", input.on ? card_default : "div", {}, 10, _content_resume("a1", () => {
				const $scope2_id = _scope_id();
				_scope_reason();
				_html(`<em>${_patch_text($scope2_id, "a", input.note, void 0, $scope0_reason, 4)} ${_text_resume($scope2_id, "b", v, 2)}</em>`);
				_unfilled_if($scope0_reason, 4) && _patch_init($scope2_id, _client_guard($scope0_reason, 4) ? "a2" : "a3");
				_subscribe($if_content__v__closures, _subscribe(_unfilled_if($scope0_reason, 4) && $input_note__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) })));
			}, $scope1_id, ($scope) => $scope0_page ? [{ f: input.note }, {
				d: v,
				_: $scope($scope0_id)
			}] : []), 0, _write_guard($scope0_reason, 3), $scope0_reason, 3);
			_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "a4");
			_scope($scope1_id, {
				d: _write_if($scope0_reason, 3) && v,
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope),
				i: $if_content__v__closures
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a5"], $scope0_reason, 2);
	_html(`</main>${_el_resume($scope0_id, "a", $wg__input_show)}`);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.on,
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 4)) && input.note,
		h: _write_if($scope0_reason, 4) && $input_note__closures
	}) || (_filled_guard($scope0_reason, 3) && $cg__input_show && _patch_fill($scope0_id, "va6", input.on, !_server_guard($scope0_reason, 3)), $cg__input_show && _content_withhold(input.on), _filled_guard($scope0_reason, 4) && _content_withheld("a1", $scope0_id) && _patch_fill($scope0_id, "va7", input.note, !_server_guard($scope0_reason, 4)));
}, 1);
