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
const $setup = [[], ["c2"]];
_shells({ c: "c !c2; b%;<button>x</button><!><!>" });
var outer_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_promise = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $c__closures = /* @__PURE__ */ new Set();
	let c = input.content;
	_html(`<button>x</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {
		if (c) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "a", input.promise, () => {
				const $scope2_id = _scope_id();
				_set_scope_reason(2);
				const $childScope = _peek_scope_id($scope2_id, "a", 0);
				card_default({ content: c });
				_patch_child_end();
				_subscribe($c__closures, _scope($scope2_id, { a: _existing_scope($childScope) }), "c0", 0);
				_resume_branch($scope2_id);
			}, void 0, void 0, 1);
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "c1");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b");
	_script($scope0_id, "c2");
	$fg__input_promise && _patch_render($scope0_id, "c1", "f");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vc3", c, 1);
	_scope($scope0_id, {
		f: input.promise,
		i: $c__closures
	}) || (_client_branch(input.content), $fg__input_promise && _patch_write($scope0_id, "xf", input.promise, !_server_guard($scope0_reason, 1)));
});

// template.marko
_shells({
	a1: "a1|2; b D ;<input><label> </label>",
	a: "a;b%;<h1>A branch that waits on a settled promise</h1><!><!>",
	a2: `a2${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks)};${/*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 2), $wi__input_show__OR__input_label = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_html("<h1>A branch that waits on a settled promise</h1>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			outer_default({
				promise: Promise.resolve(0),
				content: _content("a1", () => {
					_scope_reason();
					const $scope2_id = _scope_id();
					const uid = _id("A");
					_html(`<input${_attr("id", uid, $scope2_id, "a", 0, 0)}>${_el_mark($scope2_id, "a", 0)}<label${_attr("for", uid, $scope2_id, "b", 0, 0)}>${_text_mark($scope2_id, "c", input.label, 1, $scope0_reason, 2)}</label>${_el_mark($scope2_id, "b", 0)}`);
					$cg__input_label && _patch_render($scope2_id, "a0");
					_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope2_id, { _: $wi__input_show__OR__input_label && _scope_with_id($scope1_id) }), $cg__input_label && "a0");
				}, $scope1_id, 2)
			});
			_patch_child_end();
			_scope($scope1_id, {
				_: $wi__input_show__OR__input_label && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a2"], $scope0_reason, 1);
	_scope($scope0_id, {
		e: _write_if($scope0_reason, 1) && (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.label,
		f: _write_if($scope0_reason, 2) && $input_label__closures
	}) || _filled_guard($scope0_reason, 2) && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 2)) && _client_guard($scope0_reason, 1) && _patch_subscribers($scope0_id, "a3", "e");
}, 1);
