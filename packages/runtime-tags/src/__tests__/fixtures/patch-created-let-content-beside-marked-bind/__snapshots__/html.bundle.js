// tags/label.marko
const $setup$3 = [[], []];
_shells({ c: "c," });
var label_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_script($scope0_id, "c0", 0, _filled_guard($scope0_reason, 0), "b");
	_scope($scope0_id, { b: input }) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xb", input, !_server_guard($scope0_reason, 0));
});

// tags/card.marko
const $template$1 = "<section><button>clear</button><!></section>";
const $walks$1 = "D b%l";
const $setup$2 = [[], ["b0"]];
_shells({ b: "b !b0;D b%;<section><button>clear</button><!></section>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_first_value($scope0_id, "f", c, $scope0_reason, 0);
	_html(`<section><button>clear</button>${_el_resume($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", c, {}, 2, 0, 0, 1, $scope0_reason, 0, "f");
	_html("</section>");
	_script($scope0_id, "b0");
	_scope($scope0_id, {}) || _content_withhold(input.content);
});

// tags/outer.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>x</button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&`)($walks$1);
const $setup$1 = _shell_setup([[], ["d0"]], ["b>", $setup$2]);
_shells({ d: /*@__PURE__*/ (() => `d${_shell_marker($setup$1)};${((_w0) => ` b/${_w0}&`)($walks$1)};${((_w0) => `<button>x</button>${_w0}`)($template$1)}`)() });
var outer_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let o = input.content;
	_html(`<button>x</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	card_default({ content: o });
	_patch_child_end();
	_script($scope0_id, "d0");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vd1", o, 1);
	_scope($scope0_id, { b: _existing_scope($childScope) }) || _content_withhold(input.content);
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$3]);
_shells({
	a2: "a2;Db%;<em>static <!></em>",
	"~a2": "~a2;Db%;<em>static <!></em>",
	a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `/${_w0}&b%c`)("")};${((_w0) => `<!>${_w0}<!><!>`)("")}`)(),
	a3: /*@__PURE__*/ ((_w0) => `a3${_shell_marker(_shell_setup([[], []], ["a>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_show__OR__input_label = _write_if($scope0_reason, 0), $sg__input_title = _server_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.title, !$sg__input_title);
	const getTitle = _bind_resume(() => input.title, "a0", $scope0_id);
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	label_default(_patch_live($childScope, { get: getTitle }, $scope0_id, "h"));
	_patch_child_end();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope2 = _peek_scope_id($scope1_id, "a", 1);
			outer_default({ content: _content("a2", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`<em>static ${_text_resume($scope2_id, "a", input.label, 2, $scope0_reason, 3)}</em>`);
				_client_guard($scope0_reason, 3) && _patch_init($scope2_id, "a1");
				_subscribe(_unfilled_if($scope0_reason, 3) && $input_label__closures, _scope($scope2_id, { _: $wi__input_show__OR__input_label && _scope_with_id($scope1_id) }));
			}, $scope1_id, 2) });
			_patch_child_end();
			_scope($scope1_id, {
				_: $wi__input_show__OR__input_label && _scope_with_id($scope0_id),
				a: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 2), 1, 0, 0, ["a3"], $scope0_reason, 2);
	_scope($scope0_id, {
		e: input.title,
		g: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.label,
		a: _existing_scope($childScope),
		i: _write_if($scope0_reason, 3) && _unfilled_if($scope0_reason, 3) && $input_label__closures
	}) || (_filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 2) && _patch_fill($scope0_id, "va4", input.label, !_server_guard($scope0_reason, 3)), _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xh", getTitle, !$sg__input_title));
}, 1);
