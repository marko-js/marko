// tags/card.marko
const $template$1 = "<section><!></section>";
const $setup$1 = [[], []];
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
const $setup = [[], ["c3"]];
_shells({
	c1: `c1${_shell_marker([["c0"], []], ["a>", $setup$1])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l")};${$template$1}`,
	c2: `c2${_shell_marker([["c0"], []], ["a>", $setup$1])};${((_w0) => `/${_w0}&`)("D%l")};${$template$1}`,
	c: "c !c3; b%;<button>x</button><!><!>"
});
var outer_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $c__closures = /* @__PURE__ */ new Set();
	let c = input.content;
	let p = input.promise;
	_html(`<button>x</button>${_el_mark($scope0_id, "a")}`);
	_await($scope0_id, "b", p, () => {
		const $scope1_id = _scope_id();
		_set_scope_reason(2);
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		card_default({ content: c });
		_patch_child_end();
		_subscribe($c__closures, _scope($scope1_id, { a: _existing_scope($childScope) }), "c0", 0);
		_resume_branch($scope1_id);
	}, 1, "c1", 1, 1);
	_script($scope0_id, "c3");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vc4", c, 1);
	_filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vc5", p, 1);
	_scope($scope0_id, { i: $c__closures }) || _client_branch(input.content);
});

// template.marko
_shells({
	a1: "a1|2; b D ;<input><label> </label>",
	a: "a;b%;<h1>A value the client holds</h1><!><!>",
	a3: `a3${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks)};${/*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 4), $wg__input_show = _write_guard($scope0_reason, 2), $ui__input_show = _unfilled_if($scope0_reason, 2), $ui__input_label = _unfilled_if($scope0_reason, 4), $fg__input_promise = _filled_guard($scope0_reason, 3), $fg__input_label = _filled_guard($scope0_reason, 4), $cg__input_show = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_html("<h1>A value the client holds</h1>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 3) << 3);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			outer_default({
				promise: input.promise,
				content: _content("a1", () => {
					_scope_reason();
					const $scope2_id = _scope_id();
					const uid = _id("A");
					_html(`<input${_attr("id", uid, $scope2_id, "a", 0, 0)}>${_el_mark($scope2_id, "a", 0)}<label${_attr("for", uid, $scope2_id, "b", 0, 0)}>${_text_mark($scope2_id, "c", input.label, 1, $scope0_reason, 4)}</label>${_el_mark($scope2_id, "b", 0)}`);
					$cg__input_label && _patch_render($scope2_id, "a0");
					_subscribe(_unfilled_if($scope0_reason, 4) && $input_label__closures, _scope($scope2_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope1_id) }), $cg__input_label && "a0");
				}, $scope1_id, 2)
			});
			_patch_child_end();
			_client_guard($scope0_reason, 3) && _patch_render($scope1_id, "a2");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a3"], $scope0_reason, 2);
	$fg__input_promise && $cg__input_show && _patch_render($scope0_id, "a2", "e");
	$fg__input_label && $cg__input_show && _patch_subscribers($scope0_id, "a4", "f");
	_scope($scope0_id, {
		e: ($ui__input_show || _unfilled_if($scope0_reason, 3)) && input.promise,
		f: ($ui__input_show || $ui__input_label) && input.label,
		h: _write_if($scope0_reason, 4) && ($ui__input_label || $ui__input_show) && $input_label__closures
	}) || ($fg__input_promise && $ui__input_show && _patch_write($scope0_id, "xe", input.promise, !_server_guard($scope0_reason, 3)), $fg__input_label && _patch_write($scope0_id, "xf", input.label, !_server_guard($scope0_reason, 4)));
}, 1);
