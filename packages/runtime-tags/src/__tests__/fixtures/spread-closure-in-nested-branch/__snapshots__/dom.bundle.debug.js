// template.marko
const $template = "<button>toggle</button><!><!><!>";
const $walks = " b%b%c";
const $if_content2__attrs__script = _script("__tests__/template.marko_3_attrs#4", ($scope) => _attrs_script($scope, "#span/0"));
const $if_content2__attrs = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => {
	_attrs_content($scope, "#span/0", $scope._.attrs);
	$if_content2__attrs__script($scope);
});
const $if_content2__setup = $if_content2__attrs;
const $if_content__item__script = _script("__tests__/template.marko_2_item#2", ($scope) => _attrs_script($scope, "#div/0"));
const $if_content__item = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => {
	_attrs_content($scope, "#div/0", $scope._.item);
	$if_content__item__script($scope);
});
const $if_content__setup = $if_content__item;
const $for_content__if = /*@__PURE__*/ _if("#text/0", "<div></div>", " ", $if_content__setup);
const $for_content__show = /*@__PURE__*/ _for_closure("#text/1", ($scope) => $for_content__if($scope, $scope._.show ? 0 : 1));
const $for_content__setup = $for_content__show;
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for_content__item = /*@__PURE__*/ _const("item");
const $if = /*@__PURE__*/ _if("#text/2", "<span></span>", " ", $if_content2__setup);
const $show = /*@__PURE__*/ _let("show/3", ($scope) => {
	$if($scope, $scope.show ? 0 : 1);
	$for_content__show($scope);
});
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/1", "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $attrs = /*@__PURE__*/ _const("attrs");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, true);
	$for($scope, [[{
		id: "a",
		class: "x"
	}, {
		id: "b",
		title: "y"
	}]]);
	$attrs($scope, { class: "z" });
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
