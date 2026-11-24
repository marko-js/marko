// tags/child.marko
const $value = /*@__PURE__*/ _let(0, ($scope) => _return($scope, {
	value: $scope.a,
	valueChange: $_return($scope)
}));
function $setup$1($scope) {
	$value($scope, "v");
}
const $_return = ($scope) => function(next) {
	$value($scope, next);
};
_resumed.b0 = $_return;

// tags/runner/index.marko
const $template = "<button>run</button>";
const $setup__script$1 = _script("c0", ($scope) => _on($scope.a, "click", function() {
	$scope.c.run();
}));
const $setup = $setup__script$1;
const $input = /*@__PURE__*/ _const(2, ($scope) => _attr_class($scope.a, $scope.c.class));

// template.marko
const $if_content2__$pattern = _var_resume("a1", ($scope, $pattern2) => {
	$if_content2__valueChange($scope, $pattern2.valueChange);
	$if_content2__value($scope, $pattern2.value);
});
const $if_content2__valueChange = /*@__PURE__*/ _const(6, ($scope, valueChange) => {
	$input($scope.c, {
		class: "last",
		run: [2].map((n) => () => {
			$scope.g("last" + n);
		})[0]
	});
	_text($scope.e, typeof valueChange);
});
const $if_content2__value = ($scope, value) => _text($scope.d, value);
const $if_content2__setup = ($scope) => {
	$setup$1($scope.a);
	$setup($scope.c);
	_var($scope, 0, $if_content2__$pattern);
};
const $if_content__$pattern = _var_resume("a0", ($scope, $pattern) => {
	$if_content__value($scope, $pattern.value);
	$if_content__valueChange($scope, $pattern.valueChange);
});
const $if_content__value = ($scope, value) => _text($scope.d, value);
const $if_content__valueChange = /*@__PURE__*/ _const(7, ($scope, valueChange) => {
	$input($scope.c, {
		class: "first",
		run: [1].map((n) => () => {
			$scope.h("first" + n);
		})[0]
	});
	_text($scope.e, typeof valueChange);
});
const $if_content__setup = ($scope) => {
	$setup$1($scope.a);
	$setup($scope.c);
	_var($scope, 0, $if_content__$pattern);
};
const $if = /*@__PURE__*/ _if(1, /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}<span><!> <!></span>`)("", $template), /*@__PURE__*/ ((_w0, _w1) => `0${_w0}&/${_w1}&D%c%l`)("", " b"), $if_content__setup);
const $if2 = /*@__PURE__*/ _if(2, /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}<span><!> <!></span>`)("", $template), /*@__PURE__*/ ((_w0, _w1) => `0${_w0}&/${_w1}&D%c%l`)("", " b"), $if_content2__setup);
const $show = /*@__PURE__*/ _let(3, ($scope) => {
	$if($scope, $scope.d ? 0 : 1);
	$if2($scope, $scope.d ? 0 : 1);
});
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$show($scope, true);
}));
