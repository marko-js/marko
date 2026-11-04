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
	_scope($scope0_id, {}) || _client_branch(input.content);
});

// tags/badge.marko
_shells({
	b: "b;D l%;<span> </span><!><!>",
	b0: "b0,<em>three</em>"
});
var badge_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_text_mark($scope0_id, "a", input.tag, 1, $scope0_reason, 0)}</span>`);
	_if(() => {
		if (input.tag === "t3") {
			const $scope1_id = _scope_id();
			_html("<em>three</em>");
			_write_if($scope0_reason, 0) && _scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["b0"], $scope0_reason, 0);
	_scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], ["a4"]], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `/${_w0}&%b%b b`)($walks)};${((_w0) => `${_w0}<!><!><button>toggle</button>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_tag = _updates_from($scope0_reason, 1), $cg__input_tag = _client_guard($scope0_reason, 1), $wi__input_tag = _write_if($scope0_reason, 1), $fg__input_tag = _filled_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let show = true;
	let items = [1, 2];
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	card_default({ content: _content("a1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<em>${_text_mark($scope1_id, "a", input.label, 1, $scope0_reason, 0)}</em>`);
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, { _: $wi__input_label && _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 0) && "a0");
	}, $scope0_id, 1) });
	_patch_child_end();
	_if(() => {
		{
			const $scope2_id = _scope_id();
			_set_scope_reason($uf__input_tag << 1);
			const $childScope2 = _peek_scope_id($scope2_id, "a", 1);
			badge_default({ tag: input.tag });
			_patch_child_end();
			$cg__input_tag && _patch_render($scope2_id, "a2");
			_scope($scope2_id, { a: $wi__input_tag && _existing_scope($childScope2) });
			return 0;
		}
	}, $scope0_id, "b");
	_for_of(items, (item) => {
		const $scope3_id = _scope_id();
		_set_scope_reason($uf__input_tag << 1);
		const $childScope3 = _peek_scope_id($scope3_id, "a", 2);
		badge_default({ tag: input.tag });
		_patch_child_end();
		$cg__input_tag && _patch_render($scope3_id, "a3");
		_scope($scope3_id, { a: $wi__input_tag && _existing_scope($childScope3) });
	}, 0, $scope0_id, "c");
	_html(`<button>toggle</button>${_el_mark($scope0_id, "d")}`);
	_script($scope0_id, "a4");
	$fg__input_tag && _patch_render($scope0_id, "a2", "h");
	$fg__input_tag && _patch_render($scope0_id, "a3", "h");
	_scope($scope0_id, {
		h: input.tag,
		i: show,
		k: $wi__input_label && _unfilled_if($scope0_reason, 0) && $input_label__closures,
		a: _existing_scope($childScope)
	}) || $fg__input_tag && _patch_write($scope0_id, "xh", input.tag, !_server_guard($scope0_reason, 1));
}, 1);
