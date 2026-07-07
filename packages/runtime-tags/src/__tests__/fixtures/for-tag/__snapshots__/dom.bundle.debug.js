// template.marko
const $template = "<!><!><!><div>to 3: <!></div><div>until 3: <!></div><div>from 1 to 3: <!></div><div>from 1 until 3: <!></div><div>from 1 to 5 step 2: <!></div><div>from 1 until 5 step 2: <!></div><div>from 4 to 2 step -0.6: <!></div><div>from 4 until 2 step -0.6: <!></div>";
const $walks = "b%b%bDb%lDb%lDb%lDb%lDb%lDb%lDb%lDb%l";
const $for_content10__setup = ($scope) => _text($scope["#text/0"], $scope["#LoopKey"]);
const $for_content9__setup = ($scope) => _text($scope["#text/0"], $scope["#LoopKey"]);
const $for_content8__setup = ($scope) => _text($scope["#text/0"], $scope["#LoopKey"]);
const $for_content7__setup = ($scope) => _text($scope["#text/0"], $scope["#LoopKey"]);
const $for_content6__setup = ($scope) => _text($scope["#text/0"], $scope["#LoopKey"]);
const $for_content5__setup = ($scope) => _text($scope["#text/0"], $scope["#LoopKey"]);
const $for_content4__setup = ($scope) => _text($scope["#text/0"], $scope["#LoopKey"]);
const $for_content3__setup = ($scope) => _text($scope["#text/0"], $scope["#LoopKey"]);
const $for_content2__setup = ($scope) => _text($scope["#text/0"], $scope["#LoopKey"]);
const $for_content2__val = ($scope, val) => _text($scope["#text/1"], val);
const $for_content2__$params = ($scope, $params3) => $for_content2__val($scope, $params3[1]);
const $for_content__setup = ($scope) => _text($scope["#text/0"], $scope["#LoopKey"]);
const $for_content__val = ($scope, val) => _text($scope["#text/1"], val);
const $for_content__$params = ($scope, $params2) => $for_content__val($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of("#text/0", "<div><!>: <!></div><div></div><div></div>", "D%c%lc", $for_content__setup, $for_content__$params);
const $arr = ($scope, arr) => $for($scope, [arr]);
const $for2 = /*@__PURE__*/ _for_in("#text/1", "<div><!>: <!></div><div></div><div></div>", "D%c%lc", $for_content2__setup, $for_content2__$params);
const $obj = ($scope, obj) => $for2($scope, [obj]);
const $for3 = /*@__PURE__*/ _for_to("#text/2", " ", " b", $for_content3__setup);
const $for4 = /*@__PURE__*/ _for_until("#text/3", " ", " b", $for_content4__setup);
const $for5 = /*@__PURE__*/ _for_to("#text/4", " ", " b", $for_content5__setup);
const $for6 = /*@__PURE__*/ _for_until("#text/5", " ", " b", $for_content6__setup);
const $for7 = /*@__PURE__*/ _for_to("#text/6", " ", " b", $for_content7__setup);
const $for8 = /*@__PURE__*/ _for_until("#text/7", " ", " b", $for_content8__setup);
const $for9 = /*@__PURE__*/ _for_to("#text/8", "<!> ", "%c", $for_content9__setup);
const $for10 = /*@__PURE__*/ _for_until("#text/9", "<!> ", "%c", $for_content10__setup);
function $setup($scope) {
	$arr($scope, [
		1,
		2,
		3
	]);
	$obj($scope, {
		a: 1,
		b: 1,
		c: 1
	});
	$for3($scope, [
		3,
		0,
		1
	]);
	$for4($scope, [
		3,
		0,
		1
	]);
	$for5($scope, [
		3,
		1,
		1
	]);
	$for6($scope, [
		3,
		1,
		1
	]);
	$for7($scope, [
		5,
		1,
		2
	]);
	$for8($scope, [
		5,
		1,
		2
	]);
	$for9($scope, [
		2,
		4,
		-.6
	]);
	$for10($scope, [
		2,
		4,
		-.6
	]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
