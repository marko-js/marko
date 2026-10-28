// tags/rowsy.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
const $setup$1 = [[], ["b7"]];
_shells({
	b1: "b1",
	b2: "b2 b15",
	b: "b !b7; D l%;<button> </button><!><!>",
	b3: "b3;b%;<!><!><!>",
	b0: "b0;b%;<!><!><!>"
});
var rowsy_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_tags__OR__input_card = _write_guard($scope0_reason, 0), $cg__input_tags = _client_guard($scope0_reason, 2), $cg__input_tags__OR__input_card = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $n__closures = /* @__PURE__ */ new Set();
	const Card = { content: _content_resume("b1", ({ label, content }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $wg__content = _write_guard($scope3_reason, 2);
		_html(`<p>${_text_resume($scope3_id, "a", label, void 0, 4, 0)}`);
		_if(() => {
			if (label) {
				const $scope4_id = _scope_id();
				_dynamic_tag($scope4_id, "a", content, {}, 2, 0, 0, $wg__content);
				_write_if($scope3_reason, 0) && _scope($scope4_id, { _: _write_if($scope3_reason, 2) && _scope_with_id($scope3_id) });
				return 0;
			}
		}, $scope3_id, "b", 1, _write_guard($scope3_reason, 1), void 0, void 0, void 0, ["b0"]);
		_html("</p>");
		_scope($scope3_id, { f: _unfilled_if($scope3_reason, 1) && content });
	}, $scope0_id) };
	let n = 0;
	const Label = { content: _content_resume("b2", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_text_resume($scope1_id, "a", input.label, void 0, $scope0_reason, 1)} ${_text_resume($scope1_id, "b", n, 2)}</em>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, _client_guard($scope0_reason, 1) ? "b4" : "b5");
		_subscribe($n__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) })));
	}, $scope0_id) };
	_html(`<button>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}`);
	_for_of(input.tags, (tag) => {
		const $scope2_id = _scope_id();
		_filled_guard($scope0_reason, 2) && _unfilled_if($scope0_reason, 0) && _patch_write($scope2_id, "xc", tag, !_server_guard($scope0_reason, 2));
		_dynamic_tag($scope2_id, "a", input.card ? Card : "span", {
			label: tag,
			content: Label
		}, 9, 0, 0, $wg__input_tags__OR__input_card, $scope0_reason, 0);
		(_filled_guard($scope0_reason, 3) && !$cg__input_tags || !$cg__input_tags || !$cg__input_tags || _filled_guard($scope0_reason, 2)) && _patch_join_init($scope2_id, "b6", $scope0_reason, 0, _filled_guard($scope0_reason, 3) && ">h", _filled_guard($scope0_reason, 2) && "c");
		_write_if($scope0_reason, 0) && _scope($scope2_id, {
			c: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 0)) && tag,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "c", 1, void 0, void 0, void 0, void 0, "b3", $scope0_reason, 2);
	_script($scope0_id, "b7");
	_filled_guard($scope0_reason, 3) && $cg__input_tags ? _patch_fill($scope0_id, "vb9", input.card) : $cg__input_tags && _patch_write($scope0_id, "xh", input.card, 1);
	$cg__input_tags ? _patch_fill($scope0_id, "vb10", Card) : $cg__input_tags__OR__input_card && _patch_write($scope0_id, "wi", Card, 1);
	$cg__input_tags ? _patch_fill($scope0_id, "vb11", Label) : $cg__input_tags__OR__input_card && _patch_write($scope0_id, "wk", Label, 1);
	_patch_fill($scope0_id, "vb12", n, 1);
	_scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label,
		h: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.card,
		i: _unfilled_if($scope0_reason, 0) && Card,
		j: n,
		k: _unfilled_if($scope0_reason, 0) && Label,
		l: _write_if($scope0_reason, 1) && $input_label__closures,
		o: $n__closures
	}) || _filled_guard($scope0_reason, 1) && (_content_withheld("b2", $scope0_id) || $cg__input_tags__OR__input_card) && _patch_fill($scope0_id, "vb8", input.label, !_server_guard($scope0_reason, 1));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `/${_w0}& b`)($walks)};${((_w0) => `${_w0}<button class=c>c</button>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let card = true;
	_set_scope_reason(134 | (_mask_group($scope0_reason, 0) << 3 | _mask_group($scope0_reason, 1) << 5));
	const $childScope = _patch_child($scope0_id, "a", 0);
	rowsy_default({
		card,
		label: input.label,
		tags: input.tags
	});
	_patch_child_end();
	_html(`<button class=c>c</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		g: card,
		a: _existing_scope($childScope)
	});
}, 1);
