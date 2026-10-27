// tags/level-watch.marko
const $template$2 = "<button> </button><!><!>";
const $walks$2 = " D l%c";
const $setup$2 = [[], ["__tests__/tags/level-watch.marko_0"]];
_shells({
	"__tests__/tags/level-watch.marko": "__tests__/tags/level-watch.marko !__tests__/tags/level-watch.marko_0; D l%;<button> </button><!><!>",
	"__tests__/tags/level-watch.marko_1*shell": "__tests__/tags/level-watch.marko_1*shell __tests__/tags/level-watch.marko_1_input_projection_skill#0:6_input_baseXp#0:7_input_playerId#0:8_shown#0:9/init,"
});
var level_watch_default = _template("__tests__/tags/level-watch.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_projection_skill = _server_guard($scope0_reason, 1), $sg__input_baseXp = _server_guard($scope0_reason, 2), $sg__input_playerId = _server_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	let shown = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", shown)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (input.projection) {
			const $scope1_id = _scope_id();
			_script($scope1_id, "__tests__/tags/level-watch.marko_1_input_projection_skill#0:6_input_baseXp#0:7_input_playerId#0:8_shown#0:9", 0, ($sg__input_projection_skill || $sg__input_baseXp || $sg__input_playerId) && 2, $sg__input_projection_skill && ">input_projection_skill", $sg__input_baseXp && ">input_baseXp", $sg__input_playerId && ">input_playerId");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/level-watch.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/2", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["__tests__/tags/level-watch.marko_1*shell"], $scope0_reason, 0);
	_script($scope0_id, "__tests__/tags/level-watch.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/level-watch.marko_fill0", shown, 1);
	_scope($scope0_id, {
		input_projection_skill: input.projection?.skill,
		input_baseXp: input.baseXp,
		input_playerId: input.playerId,
		shown
	}, "__tests__/tags/level-watch.marko", 0, {
		input_projection_skill: ["input.projection.skill"],
		input_baseXp: ["input.baseXp"],
		input_playerId: ["input.playerId"],
		shown: "2:6"
	}) || (_filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_projection_skill", input.projection?.skill, !$sg__input_projection_skill), _filled_guard($scope0_reason, 2) && _patch_write($scope0_id, "PatchMarkedWrite:input_baseXp", input.baseXp, !$sg__input_baseXp), _filled_guard($scope0_reason, 3) && _patch_write($scope0_id, "PatchMarkedWrite:input_playerId", input.playerId, !$sg__input_playerId));
});

// tags/route-play.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `${_w0}<p>route</p>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$2);
const $setup$1 = _shell_setup([[], []], ["#childScope/0>", $setup$2]);
_shells({ "__tests__/tags/route-play.marko": /*@__PURE__*/ (() => `__tests__/tags/route-play.marko${_shell_marker($setup$1)};${((_w0) => `/${_w0}&b`)($walks$2)};${((_w0) => `${_w0}<p>route</p>`)($template$2)}`)() });
var route_play_default = _template("__tests__/tags/route-play.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 0) << 3 | _mask_group($scope0_reason, 1) << 5 | _mask_group($scope0_reason, 2) << 7);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	level_watch_default({
		projection: input.projection,
		baseXp: input.baseXp,
		playerId: input.playerId
	});
	_patch_child_end();
	_html("<p>route</p>");
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/route-play.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks$1);
const $Route_withLoadAssets = withLoadAssets(() => route_play_default, "__tests__/tags/route-play.marko", flush, "ready:__tests__/tags/route-play.marko");
const $setup = _shell_setup([[], []], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b%b/${_w0}&b`)($walks$1)};${((_w0) => `<!><!>${_w0}<!>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 2) << 5);
	const $childScope = _patch_child($scope0_id, "#childScope/1", 0);
	$Route_withLoadAssets({
		projection: input.projection,
		baseXp: input.baseXp,
		playerId: input.playerId
	});
	_patch_child_end();
	_scope($scope0_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
