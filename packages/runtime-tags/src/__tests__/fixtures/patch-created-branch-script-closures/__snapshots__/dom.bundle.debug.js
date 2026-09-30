// template.marko
const $template = "<!><!><!>";
const $walks = "b%/&c";
let $load_Route_setup = /*@__PURE__*/ _load_setup(() => import("./v:route-play.marko.setup.mjs"));
let $load_Route_tag_input_projection = /*@__PURE__*/ _load_signal_patch(() => import("./v:route-play.marko.input_projection.mjs"), "ready:__tests__/tags/route-play.marko");
let $load_Route_tag_input_baseXp = /*@__PURE__*/ _load_signal_patch(() => import("./v:route-play.marko.input_baseXp.mjs"), "ready:__tests__/tags/route-play.marko");
let $load_Route_tag_input_playerId = /*@__PURE__*/ _load_signal_patch(() => import("./v:route-play.marko.input_playerId.mjs"), "ready:__tests__/tags/route-play.marko");
function $setup($scope) {
	$load_Route_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
}
const $input_projection = ($scope, input_projection) => $load_Route_tag_input_projection($scope["#childScope/1"], input_projection);
const $input_baseXp = ($scope, input_baseXp) => $load_Route_tag_input_baseXp($scope["#childScope/1"], input_baseXp);
const $input_playerId = ($scope, input_playerId) => $load_Route_tag_input_playerId($scope["#childScope/1"], input_playerId);
const $input = ($scope, input) => {
	$input_projection($scope, input.projection);
	$input_baseXp($scope, input.baseXp);
	$input_playerId($scope, input.playerId);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// tags/level-watch.marko
const $template$1 = "<button> </button><!><!>";
const $walks$1 = " D l%c";
const $if_content__input_projection_skill__OR__input_baseXp__OR__input_playerId__OR__shown__script = _script("__tests__/tags/level-watch.marko_1_input_projection_skill#0:6_input_baseXp#0:7_input_playerId#0:8_shown#0:9", ($scope) => document.body.dataset.watch = $scope._.input_projection_skill + ":" + $scope._.input_baseXp + ":" + ($scope._.input_playerId ?? "anon") + ":" + $scope._.shown);
const $if_content__input_projection_skill__OR__input_baseXp__OR__input_playerId__OR__shown = /*@__PURE__*/ _fill_join_if("__tests__/tags/level-watch.marko_fill0", "shown", /*@__PURE__*/ _or(0, $if_content__input_projection_skill__OR__input_baseXp__OR__input_playerId__OR__shown__script, 3), 0, "#text/2", 0);
const $if_content__input_projection_skill = _init_if_closure("__tests__/tags/level-watch.marko_1_input_projection_skill#0:6/init", "#text/2", 0, $if_content__input_projection_skill__OR__input_baseXp__OR__input_playerId__OR__shown);
const $if_content__setup = ($scope) => {
	$if_content__input_projection_skill._($scope);
	$if_content__input_baseXp._($scope);
	$if_content__input_playerId._($scope);
	$if_content__shown._($scope);
};
const $if_content__input_baseXp = _init_if_closure("__tests__/tags/level-watch.marko_1_input_baseXp#0:7/init", "#text/2", 0, $if_content__input_projection_skill__OR__input_baseXp__OR__input_playerId__OR__shown);
const $if_content__input_playerId = _init_if_closure("__tests__/tags/level-watch.marko_1_input_playerId#0:8/init", "#text/2", 0, $if_content__input_projection_skill__OR__input_baseXp__OR__input_playerId__OR__shown);
const $if_content__shown = _init_if_closure("__tests__/tags/level-watch.marko_1_shown#0:9/init", "#text/2", 0, $if_content__input_projection_skill__OR__input_baseXp__OR__input_playerId__OR__shown);
const $shown = /*@__PURE__*/ _fill_let("__tests__/tags/level-watch.marko_fill0", "shown/9", ($scope) => {
	_text($scope["#text/1"], $scope.shown);
	$if_content__shown($scope);
});
const $setup__script = _script("__tests__/tags/level-watch.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$shown($scope, +$scope.shown + 1);
}));
function $setup$1($scope) {
	$setup__script($scope);
	$shown($scope, 0);
}
const $if = /*@__PURE__*/ _if("#text/2", 0, 0, $if_content__setup);
const $input_projection$1 = ($scope, input_projection) => {
	$input_projection_skill($scope, input_projection?.skill);
	$if($scope, input_projection ? 0 : 1);
};
const $input$1 = ($scope, input) => {
	$input_projection$1($scope, input.projection);
	$input_baseXp$1($scope, input.baseXp);
	$input_playerId$1($scope, input.playerId);
};
const $input_projection_skill = /*@__PURE__*/ _const("input_projection_skill", $if_content__input_projection_skill);
const $input_baseXp$1 = /*@__PURE__*/ _const("input_baseXp", $if_content__input_baseXp);
const $input_playerId$1 = /*@__PURE__*/ _const("input_playerId", $if_content__input_playerId);
var level_watch_default = /*@__PURE__*/ _template("__tests__/tags/level-watch.marko", $template$1, $walks$1, $setup$1, $input$1);

// tags/route-play.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<p>route</p>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
}
const $input_projection = ($scope, input_projection) => $input_projection$1($scope["#childScope/0"], input_projection);
const $input_baseXp = ($scope, input_baseXp) => $input_baseXp$1($scope["#childScope/0"], input_baseXp);
const $input_playerId = ($scope, input_playerId) => $input_playerId$1($scope["#childScope/0"], input_playerId);
const $input = ($scope, input) => {
	$input_projection($scope, input.projection);
	$input_baseXp($scope, input.baseXp);
	$input_playerId($scope, input.playerId);
};
var route_play_default = /*@__PURE__*/ _template("__tests__/tags/route-play.marko", $template, $walks, $setup, $input);

// tags/v:route-play.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
