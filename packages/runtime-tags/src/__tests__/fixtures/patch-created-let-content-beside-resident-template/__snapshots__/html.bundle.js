// counter.marko
_shells({ a: "a;D ;<b> </b>" });
var counter_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<b>${_text_resume($scope0_id, "a", input.label, 1, $scope0_reason, 0)}</b>`);
	_scope($scope0_id, {});
});

// other.marko
_shells({ b: "b;D ;<i> </i>" });
var other_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<i>${_text_resume($scope0_id, "a", input.label, 1, $scope0_reason, 0)}</i>`);
	_scope($scope0_id, {});
});

// tags/chooser.marko
const $template$2 = "<button>toggle</button><!><!>";
const $walks$2 = " b%c";
const $setup$3 = [[], ["e0"]];
_shells({ e: "e !e0; b%;<button>toggle</button><!><!>" });
var chooser_default = _template("e", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let show = false;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {}, $scope0_id, "b");
	_script($scope0_id, "e0");
	_patch_fill($scope0_id, "ve3", show, 1);
	_scope($scope0_id, {
		e: input.Tag,
		f: input.label,
		g: show
	}) || (_filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "ve1", input.Tag, !_server_guard($scope0_reason, 1)), _content_withhold(input.Tag), _filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "ve2", input.label, !_server_guard($scope0_reason, 2)), _content_withhold(input.label));
});

// tags/card.marko
const $template$1 = "<section><button>clear</button><!></section>";
const $walks$1 = "D b%l";
const $setup$2 = [[], ["d0"]];
_shells({ d: "d !d0;D b%;<section><button>clear</button><!></section>" });
var card_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_first_value($scope0_id, "f", c, $scope0_reason, 0);
	_html(`<section><button>clear</button>${_el_resume($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", c, {}, 2, 0, 0, 1, $scope0_reason, 0, "f");
	_html("</section>");
	_script($scope0_id, "d0");
	_scope($scope0_id, {}) || _content_withhold(input.content);
});

// tags/outer.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>x</button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&`)($walks$1);
const $setup$1 = _shell_setup([[], ["f0"]], ["b>", $setup$2]);
_shells({ f: /*@__PURE__*/ (() => `f${_shell_marker($setup$1)};${((_w0) => ` b/${_w0}&`)($walks$1)};${((_w0) => `<button>x</button>${_w0}`)($template$1)}`)() });
var outer_default = _template("f", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let o = input.content;
	_html(`<button>x</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	card_default({ content: o });
	_patch_child_end();
	_script($scope0_id, "f0");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vf1", o, 1);
	_scope($scope0_id, { b: _existing_scope($childScope) }) || _content_withhold(input.content);
});

// template.marko
const $setup = _shell_setup([[], []], ["b>", $setup$3]);
_shells({
	c1: "c1;Db%;<em>static <!></em>",
	"~c1": "~c1;Db%;<em>static <!></em>",
	c: /*@__PURE__*/ (() => `c${_shell_marker($setup)};${((_w0) => `b%b/${_w0}&%c`)($walks$2)};${((_w0) => `<!><!>${_w0}<!><!>`)($template$2)}`)(),
	c2: /*@__PURE__*/ ((_w0) => `c2${_shell_marker(_shell_setup([[], []], ["a>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template)
});
var template_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label__OR__input_show = _write_if($scope0_reason, 2), $cg__input_which = _client_guard($scope0_reason, 3), $cg__input_label = _client_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_dynamic_tag($scope0_id, "a", input.which ? counter_default : other_default, { label: input.label }, 5, 0, 0, _write_guard($scope0_reason, 0), $scope0_reason, 0);
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 3) << 3 | _mask_group($scope0_reason, 4) << 5);
	const $childScope = _peek_scope_id($scope0_id, "b", 1);
	chooser_default({
		Tag: input.which ? counter_default : other_default,
		label: input.label
	});
	_patch_child_end();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope2 = _peek_scope_id($scope1_id, "a", 2);
			outer_default({ content: _content("c1", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`<em>static ${_text_resume($scope2_id, "a", input.label, 2, $scope0_reason, 4)}</em>`);
				$cg__input_label && _patch_init($scope2_id, "c0");
				_subscribe(_unfilled_if($scope0_reason, 4) && $input_label__closures, _scope($scope2_id, { _: $wi__input_label__OR__input_show && _scope_with_id($scope1_id) }));
			}, $scope1_id, 2) });
			_patch_child_end();
			_scope($scope1_id, {
				_: $wi__input_label__OR__input_show && _scope_with_id($scope0_id),
				a: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "c", 1, _write_guard($scope0_reason, 5), 1, 0, 0, ["c2"], $scope0_reason, 5);
	_filled_guard($scope0_reason, 3) && $cg__input_label && _patch_write($scope0_id, "xf", input.which);
	_patch_join_init($scope0_id, "c4", $scope0_reason, 0, _filled_guard($scope0_reason, 3) && "f", _filled_guard($scope0_reason, 4) && "g");
	_scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 5)) && input.which,
		g: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 4)) && input.label,
		b: _existing_scope($childScope),
		j: _write_if($scope0_reason, 4) && (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 0)) && $input_label__closures
	}) || (_filled_guard($scope0_reason, 4) && ($cg__input_which || _client_guard($scope0_reason, 5)) && _patch_fill($scope0_id, "vc3", input.label, !_server_guard($scope0_reason, 4)), $cg__input_which && _content_withhold(input.label));
}, 1);
