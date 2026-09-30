// tags/level-watch.marko
const $template$2 = "<button> </button><!><!>";
const $walks$2 = " D l%c";
_shells({
	"__tests__/tags/level-watch.marko": "__tests__/tags/level-watch.marko !__tests__/tags/level-watch.marko_0; D l%;<button> </button><!><!>",
	"__tests__/tags/level-watch.marko_1*shell": "__tests__/tags/level-watch.marko_1*shell __tests__/tags/level-watch.marko_1_input_projection_skill#0:6/init __tests__/tags/level-watch.marko_1_input_baseXp#0:7/init __tests__/tags/level-watch.marko_1_input_playerId#0:8/init __tests__/tags/level-watch.marko_1_shown#0:9/init,"
});
var level_watch_default = _template_patch("__tests__/tags/level-watch.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_projection = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let shown = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", shown)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (input.projection) {
			const $scope1_id = _scope_id();
			_script($scope1_id, "__tests__/tags/level-watch.marko_1_input_projection_skill#0:6_input_baseXp#0:7_input_playerId#0:8_shown#0:9", 0);
			_patch_effect($scope1_id, "__tests__/tags/level-watch.marko_1_input_projection_skill#0:6_input_baseXp#0:7_input_playerId#0:8_shown#0:9", "1 input_projection_skill input_baseXp input_playerId");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/level-watch.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/2", 1, $sg__input_projection, $sg__input_projection, void 0, void 0, ["__tests__/tags/level-watch.marko_1*shell"], $scope0_reason, 0);
	_script($scope0_id, "__tests__/tags/level-watch.marko_0");
	_patch_value($scope0_id, "__tests__/tags/level-watch.marko_fill0", shown, 1);
	$scope0_page ? _scope($scope0_id, {
		input_projection_skill: input.projection?.skill,
		input_baseXp: input.baseXp,
		input_playerId: input.playerId,
		shown
	}, "__tests__/tags/level-watch.marko", 0, {
		input_projection_skill: ["input.projection.skill"],
		input_baseXp: ["input.baseXp"],
		input_playerId: ["input.playerId"],
		shown: "2:6"
	}) : (_filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "input_projection_skill", input.projection?.skill), _filled_guard($scope0_reason, 2) && _patch_write($scope0_id, "input_baseXp", input.baseXp), _filled_guard($scope0_reason, 3) && _patch_write($scope0_id, "input_playerId", input.playerId));
}, 0, 0);

// tags/route-play.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `${_w0}<p>route</p>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$2);
_shells({ "__tests__/tags/route-play.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/tags/route-play.marko;${_w0};${_w1}`)(((_w0) => `/${_w0}&b`)($walks$2), ((_w0) => `${_w0}<p>route</p>`)($template$2)) });
var route_play_default = _template_patch("__tests__/tags/route-play.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_serialize_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 0) << 3 | _mask_group($scope0_reason, 1) << 5 | _mask_group($scope0_reason, 2) << 7);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	level_watch_default({
		projection: input.projection,
		baseXp: input.baseXp,
		playerId: input.playerId
	});
	_html("<p>route</p>");
	$scope0_page && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/route-play.marko", 0);
}, 0, () => [level_watch_default]);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks$1);
const $Route_withLoadAssets = withLoadAssets(route_play_default, "ready:__tests__/tags/route-play.marko", void 0, 1);
_shells({ "__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko;${_w0};${_w1}`)(((_w0) => `b%b/${_w0}&b`)($walks$1), ((_w0) => `<!><!>${_w0}<!>`)($template$1)) });
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_serialize_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 2) << 5);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/1", $childScope);
	$Route_withLoadAssets({
		projection: input.projection,
		baseXp: input.baseXp,
		playerId: input.playerId
	});
	$scope0_page && _scope($scope0_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1, () => [$Route_withLoadAssets]);
