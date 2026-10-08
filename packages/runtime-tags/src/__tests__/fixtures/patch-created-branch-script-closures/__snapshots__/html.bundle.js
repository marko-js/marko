// tags/level-watch.marko
const $template$1 = "<button> </button><!><!>";
const $walks$1 = " D l%c";
_shells({
	b: "b !b2; D l%;<button> </button><!><!>",
	b0: "b0 b5 b6 b7 b8,"
});
var level_watch_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let shown = 0;
	_html(`<button>${_text_resume($scope0_id, "b", shown)}</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (input.projection) {
			const $scope1_id = _scope_id();
			_script($scope1_id, "b1", 0);
			_patch_effect($scope1_id, "b1", "1 g h i");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "c", 1, _source_guard($scope0_reason, 0), void 0, void 0, void 0, ["b0"], $scope0_reason, 0);
	_script($scope0_id, "b2");
	_patch_value($scope0_id, "b3", shown, 1);
	$scope0_page ? _scope($scope0_id, {
		g: input.projection?.skill,
		h: input.baseXp,
		i: input.playerId,
		j: shown
	}) : (_filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "g", input.projection?.skill), _filled_guard($scope0_reason, 2) && _patch_write($scope0_id, "h", input.baseXp), _filled_guard($scope0_reason, 3) && _patch_write($scope0_id, "i", input.playerId));
});

// tags/route-play.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<p>route</p>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1);
_shells({ c: /*@__PURE__*/ (() => `c;${((_w0) => `/${_w0}&b`)($walks$1)};${((_w0) => `${_w0}<p>route</p>`)($template$1)}`)() });
var route_play_default = _template_patch("c", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 0) << 3 | _mask_group($scope0_reason, 1) << 5 | _mask_group($scope0_reason, 2) << 7);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	level_watch_default({
		projection: input.projection,
		baseXp: input.baseXp,
		playerId: input.playerId
	});
	_html("<p>route</p>");
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope) });
});

// template.marko
const $Route_withLoadAssets = withLoadAssets(route_play_default, flush, "_c");
_shells({ a: /*@__PURE__*/ (() => `a;${((_w0) => `b%b/${_w0}&b`)($walks)};${((_w0) => `<!><!>${_w0}<!>`)($template)}`)() });
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 2) << 5);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "b", $childScope);
	$Route_withLoadAssets({
		projection: input.projection,
		baseXp: input.baseXp,
		playerId: input.playerId
	});
	$scope0_page && _scope($scope0_id, { b: _existing_scope($childScope) });
}, 1);
