// template.marko.persisted.mjs
const $else_content__walks = "D%lD%l", $else_content__template = "<section><!></section><footer><!></footer>", $try_content__walks = "b%c", $try_content__template = "<!><!><!>", $await_content__walks = "b%c", $await_content__template = "<!><!><!>", $if_content__walks = "b", $if_content__template = "<p>gone</p>", $try_content2__walks = "b%c", $try_content2__template = "<!><!><!>", $await_content2__walks = "b", $await_content2__template = "<p><strong>deals never change</strong></p>";
const $template = "<h1> </h1><button>clicked <!></button><!><!>";
const $walks = "D l Db%l%c";
_enable_catch();
const $count = _var_resume("a22", /*@__PURE__*/ _let_persisted(8, ($scope) => _text($scope.c, $scope.i)));
const $setup__script = _script_shared(($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.i + 1);
}));
_static_shells({
	"a4": [$await_content2__template, $await_content2__walks],
	"a18": [$await_content2__template, $await_content2__walks],
	"a7": [$try_content2__template, $try_content2__walks],
	"a6": [$try_content2__template, $try_content2__walks],
	"a15": [$if_content__template, $if_content__walks],
	"a19": [$if_content__template, $if_content__walks],
	"a10": [$await_content__template, $await_content__walks],
	"a20": [$await_content__template, $await_content__walks],
	"a13": [$try_content__template, $try_content__walks],
	"a12": [$try_content__template, $try_content__walks],
	"a14": [$else_content__template, $else_content__walks],
	"a21": [$else_content__template, $else_content__walks],
	"a3": [$template, $walks],
	"a": [$template, $walks]
});
const $count_seed = _update_signal("a22");
const $_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $try_content2__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", 0, "a4");
};
const $await_content__update = ($patch, $live) => {
	if ("Da" in $patch) _update_region("a")($patch, $live);
};
const $try_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", $await_content__update, "a10");
};
const $else_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", $try_content2__update, "a7", "a5");
	if ("Ab" in $patch) _update_branch($patch, $live, "b", $try_content__update, "a13", "a11");
};
const $construct = ($scope) => {
	_text($scope.a, $scope.g);
	_text($scope.c, $scope.i);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("i" in $patch) _update_seed($live, $count_seed, $patch["i"]);
	if ("g" in $patch) $live["g"] = $patch["g"];
	$_holes($patch, $live);
	if ("Dd" in $patch) _update_if($patch, $live, "Dd", "Ad", [0, $else_content__update], ["a15", "a14"]);
};
_construct("a3", $construct);
const $noop_update = () => {};
_update_content("a11", $noop_update);
_update_content("a4", $noop_update);
_update_content("a5", $noop_update);
_update_content("a7", $try_content2__update);
_update_content("a15", $noop_update);
_update_content("a23", $noop_update);
_update_content("a10", $await_content__update);
_update_content("a13", $try_content__update);
_update_content("a14", $else_content__update);
const $merge = _resume("a3", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
_enable_catch();
const $placeholder_content2 = _content_resume("a11", "loading reviews…");
const $placeholder_content = _content_resume("a5", "loading deals…");
const $count = /*@__PURE__*/ _let_persisted(8, ($scope) => _text($scope.c, $scope.i));
const $setup__script = _script_update("a17", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.i + 1);
}));
