// tags/card.marko
_shells({ b: "b; ;<section></section>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<section>");
	_attr_content("a", $scope0_id, input.content, 0, 1, $scope0_reason, 0);
	_html(`</section>${_el_resume($scope0_id, "a", _mask_group($scope0_reason, 0))}`);
	_scope($scope0_id, {});
});

// tags/outer.marko
const $template = "<button>clear</button><!><!>";
const $walks = " b%c";
const $setup$1 = [[], ["c4"]];
_shells({
	c2: "c2",
	c3: "c3 c8;b%;<!><!><!>",
	c: "c !c4; b%;<button>clear</button><!><!>"
});
var outer_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $o__closures = /* @__PURE__ */ new Set();
	let o = input.content;
	_html(`<button>clear</button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_if(() => {
			if (o) {
				const $scope2_id = _scope_id();
				_set_scope_reason(2);
				const $childScope = _peek_scope_id($scope2_id, "a", 0);
				card_default({ content: o });
				_patch_child_end();
				_subscribe($o__closures, _scope($scope2_id, {
					a: _existing_scope($childScope),
					Cg: 1
				}), "c0");
				return 0;
			}
		}, $scope1_id, "a", 1, 1, 0, 0, 1);
		_subscribe($o__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "c1");
	}, void 0, (err) => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html(`<p>caught ${_text_resume($scope3_id, "a", err.message, 2, 4, 0)}</p>`);
		_scope($scope3_id, {});
	}, 0, "c2", "c3", 1, 1, 1);
	_script($scope0_id, "c4");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vc5", o, 1);
	_scope($scope0_id, { g: $o__closures }) || _content_withhold(input.content);
});

// template.marko
const $setup = _shell_setup([[], []], ["b>", $setup$1]);
_shells({
	a1: "a1;Db%;<em>static <!></em>",
	"~a1": "~a1;Db%;<em>static <!></em>",
	a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `D l/${_w0}&b`)($walks)};${((_w0) => `<h1> </h1>${_w0}<!>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_html(`<h1>${_text_resume($scope0_id, "a", input.label, 1, $scope0_reason, 0)}</h1>`);
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	outer_default({ content: _content("a1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<em>static ${_text_resume($scope1_id, "a", input.label, 2, $scope0_reason, 0)}</em>`);
		_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "a0");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, { _: $wi__input_label && _scope_with_id($scope0_id) }));
	}, $scope0_id, 3) });
	_patch_child_end();
	_scope($scope0_id, {
		f: $wi__input_label && $input_label__closures,
		b: _existing_scope($childScope)
	});
}, 1);
