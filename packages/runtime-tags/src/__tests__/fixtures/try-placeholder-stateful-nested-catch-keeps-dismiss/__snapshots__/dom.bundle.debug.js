// tags/note.marko
const $template$1 = "<span> </span>";
const $walks$1 = "D l";
const $setup$1 = () => {};
const $input_label__script = _script("__tests__/tags/note.marko_0_input_label#3", ($scope) => _lifecycle($scope, {
	onMount: function() {
		console.log("mounted", $scope.input_label);
	},
	onDestroy: function() {
		console.log("destroyed", $scope.input_label);
	}
}));
const $input_label = /*@__PURE__*/ _const("input_label", ($scope) => {
	_text($scope["#text/0"], $scope.input_label);
	$input_label__script($scope);
});
const $input = ($scope, input) => $input_label($scope, input.label);
var note_default = /*@__PURE__*/ _template("__tests__/tags/note.marko", $template$1, "D l", 0, $input);

// template.marko
const $template = "<!><!><!><!>";
const $walks = "b%b%c";
const $await_content3__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content3__$params = ($scope, $params5) => $await_content3__v($scope, $params5[0]);
const $await_content2__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content2__$params = ($scope, $params4) => $await_content2__v($scope, $params4[0]);
const $await_content__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content__$params = ($scope, $params3) => $await_content__v($scope, $params3[0]);
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/template.marko_4*content", "<b> </b>", "D ", 0, $catch_content__$params);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p> </p>", "D ");
const $try_content2__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $await_content2 = /*@__PURE__*/ _await_content("#text/1", " ", " ");
const $try_content2__await_promise2 = /*@__PURE__*/ _await_promise("#text/1", $await_content2__$params);
const $try_content2__setup = ($scope) => {
	$await_content($scope);
	$await_content2($scope);
	$try_content2__await_promise($scope, resolveAfter("a", 1));
	$try_content2__await_promise2($scope, rejectAfter(new Error("nope"), 2));
};
const $placeholder_content__setup = ($scope) => $input_label($scope["#childScope/0"], "placeholder");
const $placeholder_content = _content("__tests__/template.marko_2*content", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l"), $placeholder_content__setup);
const $try_content__try = /*@__PURE__*/ _try("#text/0", "<!><!><!><!>", "b%b%", $try_content2__setup, 0, $catch_content);
const $try_content__setup = ($scope) => $try_content__try($scope);
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup, $placeholder_content);
const $await_content3 = /*@__PURE__*/ _await_content("#text/1", "<p> </p>", "D ");
const $await_promise = /*@__PURE__*/ _await_promise("#text/1", $await_content3__$params);
function $setup($scope) {
	$await_content3($scope);
	$try($scope);
	$await_promise($scope, resolveAfter("after", 3));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
