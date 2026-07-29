// tags/layout.marko.persisted.mjs
const $template$1 = "<section class=shell><!></section>";
const $walks$1 = "D%l";
const $setup = () => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $input_content = $dynamicTag;
_static_shells({
	"b1": [$template$1, "D%l"],
	"b": [$template$1, "D%l"]
});
const $update2$1 = ($patch, $live) => {
	if ("Da" in $patch || "Aa" in $patch) _update_dynamic($patch, $live, "Da", "Aa");
};
const $merge$1 = _resume("b1", $update2$1);
_update_content("b", $merge$1);

// template.marko.persisted.mjs
const $Panel_content__walks = " bD l", $Panel_content__template = "<div class=box>panel</div><span class=note> </span>", $if_content__walks = /*@__PURE__*/ ((_w0) => `/${_w0}&%b`)("D%l"), $if_content__template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $template = "<button class=count>clicked <!></button><!><!>";
const $walks = " Db%l%c";
const $if_content__Panel__OR__About = /*@__PURE__*/ _or(2, ($scope) => $input_content($scope.a, $scope.$.view === "panel" ? $scope._.f : $scope._.g));
const $if_content__Panel = /*@__PURE__*/ _if_closure(2, 0, $if_content__Panel__OR__About);
const $if_content__setup = ($scope) => {
	$if_content__Panel._($scope);
	$if_content__About._($scope);
	/* @__PURE__ */ $setup($scope.a);
};
const $if_content__About = /*@__PURE__*/ _if_closure(2, 0, $if_content__Panel__OR__About);
const $Panel_content__setup__script = _script_shared(($scope) => {
	$scope.a;
	document.body.dataset.panelRuns = String(+(document.body.dataset.panelRuns || 0) + 1);
});
const $count = _var_resume("a8", /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d)));
const $if = /*@__PURE__*/ _if(2, $if_content__template, $if_content__walks, $if_content__setup);
const $veto = _var_resume("a9", /*@__PURE__*/ _let_persisted(4, ($scope) => $if($scope, !$scope.e ? 0 : 1)));
const $setup__script = _script_shared(($scope) => {
	_on($scope.a, "click", function() {
		$count($scope, $scope.d + 1);
	});
	if ($scope.$.veto) $veto($scope, true);
});
_static_shells({
	"a4": [$if_content__template, $if_content__walks],
	"a6": [$if_content__template, $if_content__walks],
	"a7": [$Panel_content__template, $Panel_content__walks],
	"a1": [$Panel_content__template, $Panel_content__walks],
	"a0": [$template, $walks],
	"a": [$template, $walks]
});
const $Panel_content_holes = /*@__PURE__*/ _update_scopes({ "Qb": /*@__PURE__*/ _update_text("b") });
const $count_seed = _update_signal("a8");
const $veto_seed = _update_signal("a9");
const $if_content__construct = ($scope) => {
	_construct_child($scope, "a", "b1");
};
const $if_content__update = ($patch, $live) => {
	if ("a" in $patch) $merge$1($patch["a"], $live["a"]);
};
const $Panel_content__construct = ($scope) => {
	_construct_effect($scope, $Panel_content__setup__script);
};
const $Panel_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	$Panel_content_holes($patch, $live);
};
const $construct = ($scope) => {
	_text($scope.b, $scope.d);
	_construct_effect($scope, $setup__script);
	if ("Dc" in $scope) _update_if($scope, $scope, "Dc", "Ac", [$if_content__update], ["a4"]);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("d" in $patch) _update_seed($live, $count_seed, $patch["d"]);
	if ("e" in $patch) _update_seed($live, $veto_seed, $patch["e"]);
	if ("f" in $patch) {
		$live["f"] = $patch["f"];
		$if_content__Panel($live);
	}
	if ("g" in $patch) {
		$live["g"] = $patch["g"];
		$if_content__About($live);
	}
	if ("Ac" in $patch) _update_if_state($patch, $live, "Dc", "Ac", [$if_content__update]);
};
_construct("a4", $if_content__construct);
_construct("a7", $Panel_content__construct);
_construct("a0", $construct);
const $noop_update = () => {};
_update_content("a3", $noop_update);
_update_content("a4", $if_content__update);
_update_content("a1", $Panel_content__update, $Panel_content__construct);
const $merge = _resume("a0", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// tags/layout.marko
const $template = "<section class=shell><!></section>";
const $setup = () => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $input_content = $dynamicTag;

// template.marko
const $About_content = _content_resume("a3", "<p class=about>about</p>");
const $if_content__Panel__OR__About = /*@__PURE__*/ _or(2, ($scope) => $input_content($scope.a, $scope.$.view === "panel" ? $scope._.f : $scope._.g));
const $if_content__Panel = /*@__PURE__*/ _if_closure(2, 0, $if_content__Panel__OR__About);
const $if_content__setup = ($scope) => {
	$if_content__Panel._($scope);
	$if_content__About._($scope);
	/* @__PURE__ */ $setup($scope.a);
};
const $if_content__About = /*@__PURE__*/ _if_closure(2, 0, $if_content__Panel__OR__About);
const $Panel_content__setup__script = _script_update("a2", ($scope) => {
	$scope.a;
	document.body.dataset.panelRuns = String(+(document.body.dataset.panelRuns || 0) + 1);
});
const $Panel_content__setup = ($scope) => {
	_text($scope.b, getNote?.());
	$Panel_content__setup__script($scope);
};
const $Panel_content = _content_resume("a1", "<div class=box>panel</div><span class=note> </span>", " bD ", $Panel_content__setup);
const $count = /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d));
const $if = /*@__PURE__*/ _if(2, /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template), /*@__PURE__*/ ((_w0) => `/${_w0}&%b`)("D%l"), $if_content__setup);
const $veto = /*@__PURE__*/ _let_persisted(4, ($scope) => $if($scope, !$scope.e ? 0 : 1));
const $setup__script = _script_refresh("a5", ($scope) => {
	_on($scope.a, "click", function() {
		$count($scope, $scope.d + 1);
	});
	if ($scope.$.veto) $veto($scope, true);
});

// data.js
const getNote = typeof window === "undefined" ? () => "fresh" : void 0;
