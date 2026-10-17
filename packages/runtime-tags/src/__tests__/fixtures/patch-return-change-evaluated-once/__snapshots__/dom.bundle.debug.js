// tags/counter-box/index.marko
const $template$1 = "<span>box <!></span>";
const $walks$1 = "Db%l";
const $setup$1 = ($_) => {};
function read(reads) {
	reads.count++;
}
const $count$1 = /*@__PURE__*/ _fill_let("__tests__/tags/counter-box/index.marko_fill0", "count/5", ($scope) => {
	_text($scope["#text/0"], $scope.count);
	_return($scope, $scope.count);
});
const $input_start = $count$1;
const $input_reads = /*@__PURE__*/ _const("input_reads", ($scope) => _return_change($scope, read($scope.input_reads) || $valueChange($scope)));
const $input = ($scope, input) => {
	$input_reads($scope, input.reads);
	$input_start($scope, input.start);
};
const $valueChange = ($scope) => function(v) {
	$count$1($scope, v);
};
_resumed["__tests__/tags/counter-box/index.marko_0/valueChange"] = $valueChange;
var counter_box_default = /*@__PURE__*/ _template("__tests__/tags/counter-box/index.marko", $template$1, $walks$1, /*@__PURE__*/ _return_setup($setup$1), $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<p> </p><button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D0${_w0}&D l l`)($walks$1);
const $reads = ($scope, reads) => {
	$input_reads($scope["#childScope/0"], reads);
	$reads_count($scope, reads.count);
};
const $reads_count = ($scope, reads_count) => _text($scope["#text/2"], reads_count);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/3"], "click", function() {
	_var_change($scope["#childScope/0"], +$scope.count + 1, "count");
}));
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$input_start($scope["#childScope/0"], 1);
	_var($scope, "#childScope/0", $count);
	$reads($scope, { count: 0 });
	$setup__script($scope);
}
const $count = _var_resume("__tests__/template.marko_0_count#6/var", /*@__PURE__*/ _const("count"));
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
