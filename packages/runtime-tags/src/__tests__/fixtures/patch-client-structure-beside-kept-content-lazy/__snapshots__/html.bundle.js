// note.marko
_shells({ a: "a !a0; D ;<button> </button>" });
var note_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>${_text_mark($scope0_id, "b", n)}</button>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_patch_fill($scope0_id, "va1", n, 1);
	_scope($scope0_id, { c: n });
});

// tags/card.marko
const $template = "<button>clear</button><!><!>";
const $walks = " b%c";
const $setup$1 = [[], ["c0"]];
_shells({ c: "c !c0; b%;<button>clear</button><!><!>" });
var card_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<button>clear</button>${_el_mark($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", c, {}, 2, 0, 0, 1, _client_guard($scope0_reason, 0) << 1, 0, 1);
	_script($scope0_id, "c0");
	_scope($scope0_id, {});
});

// template.marko
const $Note_withLoadAssets = withLoadAssets(() => note_default, "a", flush, "_a");
const $setup = _shell_setup([[], ["b2"]], ["a>", $setup$1]);
_shells({ b: `b${_shell_marker($setup)};${((_w0) => `/${_w0}&%b b`)($walks)};${((_w0) => `${_w0}<!><button class=toggle>toggle</button>`)($template)}` });
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $cg__input_label = _client_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let show = true;
	let T = $Note_withLoadAssets;
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	card_default({ content: _content_resume("b1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<em>${_text_mark($scope1_id, "a", input.label, $wg__input_label)}</em>`);
		$cg__input_label && _patch_render($scope1_id, "b0");
		_subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_label && "b0", $wg__input_label);
	}, $scope0_id) });
	_patch_child_end();
	_if(() => {
		{
			const $scope2_id = _scope_id();
			_dynamic_tag($scope2_id, "a", T, {}, 8);
			_scope($scope2_id, {});
			return 0;
		}
	}, $scope0_id, "b");
	_html(`<button class=toggle>toggle</button>${_el_mark($scope0_id, "c")}`);
	_script($scope0_id, "b2");
	_scope($scope0_id, {
		f: input.label,
		g: show,
		h: T,
		i: $wi__input_label && $input_label__closures,
		a: _existing_scope($childScope)
	}) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xf", input.label, !_server_guard($scope0_reason, 0)) && _patch_subscribers($scope0_id, "b3", "f");
}, 1);
