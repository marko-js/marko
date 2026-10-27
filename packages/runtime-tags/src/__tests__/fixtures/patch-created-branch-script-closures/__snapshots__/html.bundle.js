// tags/level-watch.marko
const $template$1 = "<button> </button><!><!>";
const $walks$1 = " D l%c";
const $setup$2 = [[], ["b2"]];
_shells({
	b: "b !b2; D l%;<button> </button><!><!>",
	b1: "b1 b5,"
});
var level_watch_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_projection_skill = _server_guard($scope0_reason, 1), $sg__input_baseXp = _server_guard($scope0_reason, 2), $sg__input_playerId = _server_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	let shown = 0;
	_html(`<button>${_text_resume($scope0_id, "b", shown)}</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (input.projection) {
			const $scope1_id = _scope_id();
			_script($scope1_id, "b0", 0);
			($sg__input_projection_skill || $sg__input_baseXp || $sg__input_playerId) && _patch_effect($scope1_id, "hb0", $sg__input_projection_skill && ">g", $sg__input_baseXp && ">h", $sg__input_playerId && ">i");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "c", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["b1"], $scope0_reason, 0);
	_script($scope0_id, "b2");
	_patch_fill($scope0_id, "vb3", shown, 1);
	_scope($scope0_id, {
		g: input.projection?.skill,
		h: input.baseXp,
		i: input.playerId,
		j: shown
	}) || (_filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xg", input.projection?.skill, !$sg__input_projection_skill), _filled_guard($scope0_reason, 2) && _patch_write($scope0_id, "xh", input.baseXp, !$sg__input_baseXp), _filled_guard($scope0_reason, 3) && _patch_write($scope0_id, "xi", input.playerId, !$sg__input_playerId));
});

// tags/route-play.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<p>route</p>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1);
const $setup$1 = _shell_setup([[], []], ["a>", $setup$2]);
_shells({ c: /*@__PURE__*/ (() => `c${_shell_marker($setup$1)};${((_w0) => `/${_w0}&b`)($walks$1)};${((_w0) => `${_w0}<p>route</p>`)($template$1)}`)() });
var route_play_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 0) << 3 | _mask_group($scope0_reason, 1) << 5 | _mask_group($scope0_reason, 2) << 7);
	const $childScope = _patch_child($scope0_id, "a", 0);
	level_watch_default({
		projection: input.projection,
		baseXp: input.baseXp,
		playerId: input.playerId
	});
	_patch_child_end();
	_html("<p>route</p>");
	_scope($scope0_id, { a: _existing_scope($childScope) });
});

// template.marko
const $Route_withLoadAssets = withLoadAssets(() => route_play_default, "c", flush, "_c");
const $setup = _shell_setup([[], []], ["b>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `b%b/${_w0}&b`)($walks)};${((_w0) => `<!><!>${_w0}<!>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 2) << 5);
	const $childScope = _patch_child($scope0_id, "b", 0);
	$Route_withLoadAssets({
		projection: input.projection,
		baseXp: input.baseXp,
		playerId: input.playerId
	});
	_patch_child_end();
	_scope($scope0_id, { b: _existing_scope($childScope) });
}, 1);
