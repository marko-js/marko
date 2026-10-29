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

// tags/outer.marko
const $template = "<button>x</button><!><!>";
const $walks = " b%c";
const $setup = [[], ["c5"]];
_shells({ c: "c !c5; b%;<button>x</button><!><!>" });
var outer_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_promise = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	let rows = [input.content];
	_html(`<button>x</button>${_el_resume($scope0_id, "a")}`);
	_for_of(rows, (entry) => {
		const $scope1_id = _scope_id();
		const $for_content__entry__closures = /* @__PURE__ */ new Set();
		_try($scope1_id, "a", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_await($scope2_id, "a", input.promise, () => {
				const $scope4_id = _scope_id();
				_set_scope_reason(2);
				const $childScope2 = _peek_scope_id($scope4_id, "a", 1);
				card_default({ content: entry });
				_patch_child_end();
				_subscribe($for_content__entry__closures, _scope($scope4_id, {
					a: _existing_scope($childScope2),
					Ci: 1
				}), "c1");
			}, void 0, 0, 0, 0, 1);
			_subscribe($wi__input_promise && $input_promise__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "c2", 0);
			_resume_branch($scope2_id);
		}, void 0, () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_set_scope_reason(2);
			const $childScope = _peek_scope_id($scope3_id, "a", 0);
			card_default({ content: entry });
			_patch_child_end();
			_subscribe($for_content__entry__closures, _scope($scope3_id, {
				_: _scope_with_id($scope1_id),
				a: _existing_scope($childScope)
			}), "c0");
		}, 0, "c3", "c4");
		_scope($scope1_id, {
			c: entry,
			i: $for_content__entry__closures
		});
	}, 0, $scope0_id, "b");
	_script($scope0_id, "c5");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vc7", rows, 1);
	_scope($scope0_id, {
		f: input.promise,
		h: $wi__input_promise && $input_promise__closures
	}) || (_filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vc6", input.promise, !_server_guard($scope0_reason, 1)), _content_withhold(input.content));
});

// template.marko
_shells({
	a2: "a2",
	a: "a !;b%;<h1>Rows whose await rejects</h1><!><!>",
	a4: /*@__PURE__*/ (() => `a4${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks)};${/*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_html("<h1>Rows whose await rejects</h1>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 3);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			outer_default({
				promise: input.promise,
				content: _content_resume("a2", () => {
					_scope_reason();
					const $scope2_id = _scope_id();
					const uid = _id("A");
					_html(`<input${_attr("id", uid, $scope2_id, "aa$id", 0, 0)}>${_el_resume($scope2_id, "a", 0)}<label${_attr("for", uid, $scope2_id, "ab$for", 0, 0)}>${_text_resume($scope2_id, "c", input.label, 1, $scope0_reason, 2)}</label>${_el_resume($scope2_id, "b", 0)}`);
					_unfilled_if($scope0_reason, 2) && _patch_init($scope2_id, _client_guard($scope0_reason, 2) ? "a0" : "a1");
					_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }));
				}, $scope1_id)
			});
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a3");
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a4"], $scope0_reason, 0);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.promise,
		f: input.label,
		h: _write_if($scope0_reason, 2) && $input_label__closures
	}) || (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va5", input.promise, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "va6", input.label, !_server_guard($scope0_reason, 2)));
}, 1);
