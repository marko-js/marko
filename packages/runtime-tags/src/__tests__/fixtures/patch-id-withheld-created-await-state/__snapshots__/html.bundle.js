// tags/card.marko
const $template$1 = "<section><!></section>";
_shells({ b: "b;D%;<section><!></section>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</section>");
	_scope($scope0_id, {});
});

// tags/outer.marko
const $template = "<button>x</button><!><!>";
const $walks = " b%c";
const $setup = [["c4"], ["c0"]];
_shells({
	c3: /*@__PURE__*/ ((_w0) => `c3;${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l")};${_w0}`)($template$1),
	c: "c c4!c0; b%;<button>x</button><!><!>"
});
var outer_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $c__closures = /* @__PURE__ */ new Set();
	let c = input.content;
	let p = input.promise;
	_html(`<button>x</button>${_el_resume($scope0_id, "a")}`);
	_await($scope0_id, "b", p, () => {
		const $scope1_id = _scope_id();
		_set_scope_reason(2);
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		card_default({ content: c });
		_patch_child_end();
		_subscribe($c__closures, _scope($scope1_id, { a: _existing_scope($childScope) }));
	}, 1, 0, 0, 0, 1);
	_script($scope0_id, "c0");
	!_client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vc1", c, 1);
	_filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vc2", p, 1);
	_scope($scope0_id, { i: $c__closures }) || _content_withhold(input.content);
});

// template.marko
_shells({
	a1: "a1; b D ;<input><label> </label>",
	"~a1": "~a1; b D ;<input><label> </label>",
	a: "a !;b%;<h1>A value the client holds</h1><!><!>",
	a3: /*@__PURE__*/ (() => `a3${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks)};${/*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_html("<h1>A value the client holds</h1>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 3) << 3);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			outer_default({
				promise: input.promise,
				content: _content("a1", () => {
					_scope_reason();
					const $scope2_id = _scope_id();
					const uid = _id("A");
					_html(`<input${_attr("id", uid, $scope2_id, "aa$id", 0, 0)}>${_el_resume($scope2_id, "a", 0)}<label${_attr("for", uid, $scope2_id, "ab$for", 0, 0)}>${_text_resume($scope2_id, "c", input.label, 1, $scope0_reason, 4)}</label>${_el_resume($scope2_id, "b", 0)}`);
					_client_guard($scope0_reason, 4) && _patch_init($scope2_id, "a0");
					_subscribe(_unfilled_if($scope0_reason, 4) && $input_label__closures, _scope($scope2_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope1_id) }));
				}, $scope1_id, 3)
			});
			_patch_child_end();
			_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "a2");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a3"], $scope0_reason, 2);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.promise,
		f: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 4)) && input.label,
		h: _write_if($scope0_reason, 4) && $input_label__closures
	}) || (_filled_guard($scope0_reason, 3) && $cg__input_show && _patch_fill($scope0_id, "va4", input.promise, !_server_guard($scope0_reason, 3)), _filled_guard($scope0_reason, 4) && $cg__input_show && _patch_fill($scope0_id, "va5", input.label, !_server_guard($scope0_reason, 4)));
}, 1);
