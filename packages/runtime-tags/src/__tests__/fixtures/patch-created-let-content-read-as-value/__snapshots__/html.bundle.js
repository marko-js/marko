// tags/card.marko
const $template$1 = "<p> </p>";
const $setup$1 = [[], []];
_shells({ b: "b;D ;<p> </p>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<p>${_text_mark($scope0_id, "a", input.value, 1, $scope0_reason, 0)}</p>`);
	_scope($scope0_id, {});
});

// tags/outer.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>clear</button>${_w0}<section><!></section>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&D%l`)("D l");
const $setup = _shell_setup([[], ["c0"]], ["b>", $setup$1]);
_shells({ c: `c${_shell_marker($setup)};${((_w0) => ` b/${_w0}&D%l`)("D l")};${((_w0) => `<button>clear</button>${_w0}<section><!></section>`)($template$1)}` });
var outer_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let o = input.content;
	_html(`<button>clear</button>${_el_mark($scope0_id, "a")}`);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	card_default({ value: o === void 0 });
	_patch_child_end();
	_html("<section>");
	_dynamic_tag($scope0_id, "c", o, {}, 8);
	_html("</section>");
	_script($scope0_id, "c0");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vc1", o, 1);
	_scope($scope0_id, { b: _existing_scope($childScope) });
});

// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a2: `a2${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 1), $cg__input_label = _client_guard($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			outer_default({ content: _content_resume("a1", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`<em>static ${_text_mark($scope2_id, "a", input.label, $wg__input_label * 2)}</em>`);
				$cg__input_label && _patch_render($scope2_id, "a0");
				_subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), $cg__input_label && "a0", $wg__input_label);
			}, $scope1_id) });
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a2"], $scope0_reason, 0);
	_scope($scope0_id, {
		e: input.label,
		f: $wi__input_label && $input_label__closures
	}) || _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 1)) && _patch_subscribers($scope0_id, "a3", "e");
}, 1);
