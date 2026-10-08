// template.marko
const $template = "<!><!><!>";
const $walks = "b%/&c";
let $load_Shop_setup = /*@__PURE__*/ _load_setup(() => import("./v:shop.marko.setup.mjs"));
function $setup($scope) {
	$load_Shop_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// shop.marko
const $template = "<button> </button><button>drop</button><!><!>";
const $walks = " D l b%c";
function bankCount(p, id) {
	return p.bank[id];
}
function withDrops(base, drops, id) {
	return base + (drops[id] ?? 0);
}
const UPGRADES = [{
	id: "a",
	parts: ["x", "y"]
}, {
	id: "b",
	parts: ["y"]
}];
const $for_content2__live = ($scope, live) => _attr_class_item($scope["#span/0"], "short", live < 2);
const $for_content2__proj__OR__now__OR__have = _fill_join("__tests__/shop.marko_fill1", "proj", /*@__PURE__*/ _shell_join("__tests__/shop.marko_3_proj#0:10/init", /*@__PURE__*/ _or(7, ($scope) => $for_content2__live($scope, $scope.have + $scope._._._.now * $scope._._._.proj), 2)), 0, ($join) => /*@__PURE__*/ _for_closure("#text/3", /*@__PURE__*/ _if_closure("#text/0", 0, /*@__PURE__*/ _for_closure("#text/0", $join))));
const $for_content2__have = /*@__PURE__*/ _const("have", ($scope) => {
	_text($scope["#text/2"], $scope.have);
	$for_content2__proj__OR__now__OR__have($scope);
});
const $for_content2__p__OR__drops__OR__part = _fill_join("__tests__/shop.marko_fill4", "part", /*@__PURE__*/ _fill_join("__tests__/shop.marko_fill0", "p", /*@__PURE__*/ _shell_join("__tests__/shop.marko_3_p#0:4/init", /*@__PURE__*/ _or(5, ($scope) => $for_content2__have($scope, withDrops(bankCount($scope._._._.p, $scope.part), $scope._._._.drops, $scope.part)), 2)), 0, ($join2) => /*@__PURE__*/ _for_closure("#text/3", /*@__PURE__*/ _if_closure("#text/0", 0, /*@__PURE__*/ _for_closure("#text/0", $join2)))));
const $for_content2__p = /*@__PURE__*/ _closure_get("p/13", $for_content2__p__OR__drops__OR__part, ($scope) => $scope._._._);
const $for_content2__setup = ($scope) => {
	$for_content2__p($scope);
	$for_content2__proj($scope);
	$for_content2__now($scope);
	$for_content2__drops($scope);
};
const $for_content2__proj = /*@__PURE__*/ _closure_get("proj/15", $for_content2__proj__OR__now__OR__have, ($scope) => $scope._._._);
const $for_content2__now = _shell_closure_get("__tests__/shop.marko_3_now#0:11/init", "now/16", $for_content2__proj__OR__now__OR__have, ($scope) => $scope._._._, "__tests__/shop.marko_3_now#0:11/subscribe");
const $for_content2__drops = _shell_closure_get("__tests__/shop.marko_3_drops#0:12/init", "drops/17", $for_content2__p__OR__drops__OR__part, ($scope) => $scope._._._, "__tests__/shop.marko_3_drops#0:12/subscribe");
const $for_content2__part = /*@__PURE__*/ _fill_const("__tests__/shop.marko_fill4", "part", ($scope) => {
	$for_content2__p__OR__drops__OR__part($scope);
	_text($scope["#text/1"], $scope.part);
}, $for_content2__p__OR__drops__OR__part);
const $for_content2__$params = ($scope, $params3) => $for_content2__part($scope, $params3[0]);
const $if_content__for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<span><!> <!></span>", " D%c%", $for_content2__setup, $for_content2__$params);
const $if_content__u_parts = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__for($scope, [$scope._.u_parts]));
const $if_content__setup = $if_content__u_parts;
const $for_content__if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $for_content__u_parts__OR__owned = /*@__PURE__*/ _or(7, ($scope) => $for_content__if($scope, $scope.u_parts && !$scope.owned ? 0 : 1));
const $for_content__owned = /*@__PURE__*/ _const("owned", $for_content__u_parts__OR__owned);
const $for_content__p_owned__OR__u_id = /*@__PURE__*/ _or(4, ($scope) => $for_content__owned($scope, $scope._.p_owned.includes($scope.u_id)));
const $for_content__p_owned = /*@__PURE__*/ _for_closure("#text/3", $for_content__p_owned__OR__u_id);
const $for_content__setup = $for_content__p_owned;
const $for_content__u_id = /*@__PURE__*/ _const("u_id", $for_content__p_owned__OR__u_id);
const $for_content__u_parts = /*@__PURE__*/ _const("u_parts", $for_content__u_parts__OR__owned);
const $for_content__$params = ($scope, $params2) => {
	$for_content__u_id($scope, $params2[0]?.id);
	$for_content__u_parts($scope, $params2[0]?.parts);
};
const $proj__closure = /*@__PURE__*/ _closure($for_content2__proj);
const $proj = /*@__PURE__*/ _fill_const("__tests__/shop.marko_fill1", "proj", $proj__closure);
const $p_rate = $proj;
const $p_owned = /*@__PURE__*/ _const("p_owned", $for_content__p_owned);
const $p__closure = /*@__PURE__*/ _closure($for_content2__p);
const $p = /*@__PURE__*/ _fill_const("__tests__/shop.marko_fill0", "p", ($scope) => {
	$p__closure($scope);
	$p_rate($scope, $scope.p?.rate);
	$p_owned($scope, $scope.p?.owned);
}, $p__closure);
const $global_data_player = /*@__PURE__*/ _fill_global_join("data", "__tests__/shop.marko_0_$global_data_player#9/global", ($scope) => {
	$p($scope, $scope.$global.data?.player);
});
const $now__closure = /*@__PURE__*/ _closure($for_content2__now);
const $now = /*@__PURE__*/ _fill_let("__tests__/shop.marko_fill2", "now/11", ($scope) => {
	_text($scope["#text/1"], $scope.now);
	$now__closure($scope);
});
const $drops__closure = /*@__PURE__*/ _closure($for_content2__drops);
const $drops = /*@__PURE__*/ _fill_let("__tests__/shop.marko_fill3", "drops/12", $drops__closure);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/3", "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $setup__script = _script("__tests__/shop.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$now($scope, +$scope.now + 1);
	});
	_on($scope["#button/2"], "click", function() {
		$drops($scope, { x: 1 });
	});
});
function $setup($scope) {
	$setup__script($scope);
	$now($scope, 0);
	$drops($scope, {});
	$for($scope, [UPGRADES]);
	$global_data_player($scope);
}
var shop_default = /*@__PURE__*/ _template("__tests__/shop.marko", $template, $walks, $setup);

// v:shop.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
