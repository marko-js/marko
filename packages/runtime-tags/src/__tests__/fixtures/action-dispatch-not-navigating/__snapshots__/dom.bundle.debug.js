// template.marko
const $template = "<form><button>prevented <!></button></form><a href=/a>modified <!></a><a href=/a target=_blank>blank <!></a><a href=/a download>download <!></a><a href=#top>fragment <!></a><button>button <!></button>";
const $walks = " Eb%m Db%l Db%l Db%l Db%l Db%l";
const $prevented2__script = _script("__tests__/template.marko_0_prevented#12", ($scope) => _on($scope["#form/0"], "submit", $scope.prevented));
const $prevented2 = _action("prevented/12", "__tests__/template.marko_0_prevented#12/action", ($scope) => {
	$prevented_pending($scope, $scope.prevented?.pending);
	$prevented2__script($scope);
});
const $prevented_pending = /*@__PURE__*/ _const("prevented_pending", ($scope) => _text($scope["#text/1"], $scope.prevented_pending));
const $modified__script = _script("__tests__/template.marko_0_modified#15", ($scope) => _on($scope["#a/2"], "click", $scope.modified));
const $modified = _action("modified/15", "__tests__/template.marko_0_modified#15/action", ($scope) => {
	$modified_pending($scope, $scope.modified?.pending);
	$modified__script($scope);
});
const $blank__script = _script("__tests__/template.marko_0_blank#18", ($scope) => _on($scope["#a/4"], "click", $scope.blank));
const $blank = _action("blank/18", "__tests__/template.marko_0_blank#18/action", ($scope) => {
	$blank_pending($scope, $scope.blank?.pending);
	$blank__script($scope);
});
const $download__script = _script("__tests__/template.marko_0_download#21", ($scope) => _on($scope["#a/6"], "click", $scope.download));
const $download = _action("download/21", "__tests__/template.marko_0_download#21/action", ($scope) => {
	$download_pending($scope, $scope.download?.pending);
	$download__script($scope);
});
const $fragment__script = _script("__tests__/template.marko_0_fragment#24", ($scope) => _on($scope["#a/8"], "click", $scope.fragment));
const $fragment = _action("fragment/24", "__tests__/template.marko_0_fragment#24/action", ($scope) => {
	$fragment_pending($scope, $scope.fragment?.pending);
	$fragment__script($scope);
});
const $button__script = _script("__tests__/template.marko_0_button#27", ($scope) => _on($scope["#button/10"], "click", $scope.button));
const $button = _action("button/27", "__tests__/template.marko_0_button#27/action", ($scope) => {
	$button_pending($scope, $scope.button?.pending);
	$button__script($scope);
});
function $setup($scope) {
	$prevented2($scope, $prevented);
	$modified($scope, void 0);
	$blank($scope, void 0);
	$download($scope, void 0);
	$fragment($scope, void 0);
	$button($scope, void 0);
}
const $modified_pending = /*@__PURE__*/ _const("modified_pending", ($scope) => _text($scope["#text/3"], $scope.modified_pending));
const $blank_pending = /*@__PURE__*/ _const("blank_pending", ($scope) => _text($scope["#text/5"], $scope.blank_pending));
const $download_pending = /*@__PURE__*/ _const("download_pending", ($scope) => _text($scope["#text/7"], $scope.download_pending));
const $fragment_pending = /*@__PURE__*/ _const("fragment_pending", ($scope) => _text($scope["#text/9"], $scope.fragment_pending));
const $button_pending = /*@__PURE__*/ _const("button_pending", ($scope) => _text($scope["#text/11"], $scope.button_pending));
function $prevented(ev) {
	ev.preventDefault();
}
_resumed["__tests__/template.marko_0/prevented"] = $prevented;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
