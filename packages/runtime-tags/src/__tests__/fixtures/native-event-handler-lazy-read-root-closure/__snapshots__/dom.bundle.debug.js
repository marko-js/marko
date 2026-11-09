// template.marko
const $template = "<button class=whole>whole</button><button class=clear>clear</button><button class=copy>copy</button><button class=shown>shown</button><!><div class=log> </div>";
const $walks = " b b b b%bD l";
const $for_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$log($scope._, `${$scope._.log}[${$scope._.todo?.id}:${$scope._.nick}:${$scope._.name}:${$scope._.name}]`);
}));
const $for_content__setup = $for_content__setup__script;
const $todo = /*@__PURE__*/ _let("todo/6");
const $user = /*@__PURE__*/ _let("user/7", ($scope) => {
	$nick($scope, $scope.user.nick);
	$name($scope, $scope.user.name);
});
const $log = /*@__PURE__*/ _let("log/10", ($scope) => _text($scope["#text/5"], $scope.log));
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/4", "<button class=item>item</button>", " ", $for_content__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$log($scope, `${$scope.log}${JSON.stringify($scope.todo)}`);
	});
	_on($scope["#button/1"], "click", function() {
		$todo($scope, null);
	});
	_on($scope["#button/2"], "click", function() {
		$user($scope, { ...$scope.user });
	});
	_on($scope["#button/3"], "click", function() {
		$log($scope, `${$scope.log}(${$scope.name})`);
	});
});
function $setup($scope) {
	$todo($scope, { id: 1 });
	$user($scope, {
		nick: "n",
		name: "u"
	});
	$log($scope, "");
	$for($scope, [[1]]);
	$setup__script($scope);
}
const $nick__OR__shown__script = _script("__tests__/template.marko_0_nick#8_shown#6", ($scope) => console.log(`${$scope.nick} ${$scope.name}`));
const $nick__OR__shown = /*@__PURE__*/ _or(11, $nick__OR__shown__script);
const $nick = /*@__PURE__*/ _const("nick", $nick__OR__shown);
const $name = /*@__PURE__*/ _const("name", $nick__OR__shown);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
