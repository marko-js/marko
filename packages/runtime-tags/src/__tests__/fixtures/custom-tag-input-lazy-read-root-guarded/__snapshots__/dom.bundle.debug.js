// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}`)($template$1, $template$2);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}&`)($walks$1, $walks$2);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_show($scope["#childScope/0"], false);
	$input_todo($scope["#childScope/0"], { id: 1 });
	$setup$2($scope["#childScope/1"]);
	$input_open($scope["#childScope/1"], false);
	$input_todo$1($scope["#childScope/1"], { id: 2 });
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// tags/todo-view.marko
const $template$1 = "<!><!><button class=view>view</button><div class=view-log> </div>";
const $walks$1 = "b%b bD l";
const $if_content__input_todo$1 = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], JSON.stringify($scope._.input_todo)));
const $if_content__setup$1 = $if_content__input_todo$1;
const $log$1 = /*@__PURE__*/ _let("log/8", ($scope) => _text($scope["#text/2"], $scope.log));
const $setup__script$1 = _script("__tests__/tags/todo-view.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$log$1($scope, `${$scope.log}[${$scope.input_todo_id}]`);
}));
function $setup$1($scope) {
	$log$1($scope, "");
	$setup__script$1($scope);
}
const $if = /*@__PURE__*/ _if("#text/0", "<div class=all> </div>", "D ", $if_content__setup$1);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_show($scope, input.show);
	$input_todo$1($scope, input.todo);
};
const $input_todo$1 = /*@__PURE__*/ _const("input_todo", ($scope) => {
	$input_todo_id$1($scope, $scope.input_todo?.id);
	$if_content__input_todo$1($scope);
});
const $input_todo_id$1 = /*@__PURE__*/ _const("input_todo_id");
var todo_view_default = /*@__PURE__*/ _template("__tests__/tags/todo-view.marko", $template$1, $walks$1, $setup$1, $input$1);

// tags/todo-box.marko
const $Box_content__walks = "b%c";
const $Box_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button class=box>box</button><div class=box-log> </div>`)($Box_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& bD l`)($Box_content__walks);
const $if_content__input_todo = /*@__PURE__*/ _closure_get("input_todo/9", ($scope) => _text($scope["#text/0"], JSON.stringify($scope._._.input_todo)), ($scope) => $scope._._, "__tests__/tags/todo-box.marko_2_input_todo#0:5/subscribe");
const $if_content__setup = $if_content__input_todo;
const $Box_content__if = /*@__PURE__*/ _if("#text/0", "<div class=all> </div>", "D ", $if_content__setup);
const $Box_content__open = ($scope, open) => $Box_content__if($scope, open ? 0 : 1);
const $Box_content__$params = ($scope, $params2) => $Box_content__$temp($scope, $params2[0]);
const $Box_content__$temp = ($scope, $temp) => $Box_content__open($scope, $temp.open);
const $log = /*@__PURE__*/ _let("log/8", ($scope) => _text($scope["#text/2"], $scope.log));
const $setup__script = _script("__tests__/tags/todo-box.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$log($scope, `${$scope.log}[${$scope.input_todo_id}]`);
}));
function $setup($scope) {
	$scope["#childScope/0"]._ = $scope;
	$log($scope, "");
	$setup__script($scope);
}
const $input_open = ($scope, input_open) => $Box_content__open($scope["#childScope/0"], input_open);
const $input = ($scope, input) => {
	$input_todo($scope, input.todo);
	$input_open($scope, input.open);
};
const $input_todo__closure = /*@__PURE__*/ _closure($if_content__input_todo);
const $input_todo = /*@__PURE__*/ _const("input_todo", ($scope) => {
	$input_todo_id($scope, $scope.input_todo?.id);
	$input_todo__closure($scope);
});
const $input_todo_id = /*@__PURE__*/ _const("input_todo_id");
var todo_box_default = /*@__PURE__*/ _template("__tests__/tags/todo-box.marko", $template, $walks, $setup, $input);
