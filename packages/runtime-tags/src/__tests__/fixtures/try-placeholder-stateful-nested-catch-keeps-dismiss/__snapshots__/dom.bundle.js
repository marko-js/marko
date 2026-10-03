// tags/note.marko
const $template = "<span> </span>";
const $input_label__script = _script("b0", ($scope) => _lifecycle($scope, {
	onMount: function() {
		console.log("mounted", $scope.d);
	},
	onDestroy: function() {
		console.log("destroyed", $scope.d);
	}
}));
const $input_label = /*@__PURE__*/ _const(3, ($scope) => {
	_text($scope.a, $scope.d);
	$input_label__script($scope);
});

// template.marko
const $catch_content__err_message = ($scope, err_message) => _text($scope.a, err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("a0", "<b> </b>", "D ", 0, $catch_content__$params);
const $placeholder_content__setup = ($scope) => $input_label($scope.a, "placeholder");
const $placeholder_content = _content("a1", $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l"), $placeholder_content__setup);
