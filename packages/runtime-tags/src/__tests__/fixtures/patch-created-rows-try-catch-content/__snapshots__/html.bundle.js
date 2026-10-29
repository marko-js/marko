// tags/card.marko
_shells({ b: "b;D%;<section><!></section>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</section>");
	_scope($scope0_id, {});
});

// tags/thrower.marko
_shells({ d: "d;b%;<!><!><!>" });
var thrower_default = _template("d", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", (() => {
		throw new Error("probe");
	})(), {}, 2, 0, 0, 0, 0, 0);
});

// tags/outer.marko
const $template = "<button>x</button><!><!>";
const $walks = " b%c";
const $setup = [[], ["c3"]];
_shells({ c: "c !c3; b%;<button>x</button><!><!>" });
var outer_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let rows = [input.content];
	_html(`<button>x</button>${_el_resume($scope0_id, "a")}`);
	_for_of(rows, (entry) => {
		const $scope1_id = _scope_id();
		const $for_content__entry__closures = /* @__PURE__ */ new Set();
		_try($scope1_id, "a", () => {
			_scope_reason();
			_scope_id();
			_patch_child(1);
			thrower_default({});
			_patch_child_end();
		}, void 0, () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_set_scope_reason(2);
			const $childScope = _peek_scope_id($scope2_id, "a", 0);
			card_default({ content: entry });
			_patch_child_end();
			_subscribe($for_content__entry__closures, _scope($scope2_id, {
				_: _scope_with_id($scope1_id),
				a: _existing_scope($childScope)
			}), "c0");
		}, 0, "c1", "c2");
		_scope($scope1_id, {
			c: entry,
			d: $for_content__entry__closures
		});
	}, 0, $scope0_id, "b");
	_script($scope0_id, "c3");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vc4", rows, 1);
	_scope($scope0_id, {}) || _content_withhold(input.content);
});

// template.marko
_shells({
	a2: "a2",
	a: "a !;b%;<h1>Rows whose catch keeps content</h1><!><!>",
	a3: /*@__PURE__*/ (() => `a3${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks)};${/*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_html("<h1>Rows whose catch keeps content</h1>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			outer_default({ content: _content_resume("a2", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				const uid = _id("A");
				_html(`<input${_attr("id", uid, $scope2_id, "aa$id", 0, 0)}>${_el_resume($scope2_id, "a", 0)}<label${_attr("for", uid, $scope2_id, "ab$for", 0, 0)}>${_text_resume($scope2_id, "c", input.label, 1, $scope0_reason, 1)}</label>${_el_resume($scope2_id, "b", 0)}`);
				_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, _client_guard($scope0_reason, 1) ? "a0" : "a1");
				_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }));
			}, $scope1_id) });
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a3"], $scope0_reason, 0);
	_scope($scope0_id, {
		e: input.label,
		f: _write_if($scope0_reason, 1) && $input_label__closures
	}) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va4", input.label, !_server_guard($scope0_reason, 1));
}, 1);
