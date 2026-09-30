// tags/file-store.marko
const $files$1 = /*@__PURE__*/ _fill_let("d2", 3, ($scope) => _return($scope, $scope.d));
const $input_value__script = _script("d1", ($scope) => $files$1($scope, $scope.c));
const $valueChange = ($scope) => (_new_files) => {
	$files$1($scope, _new_files);
};
_resumed.d0 = $valueChange;

// tags/file-tabs.marko
const $tabs = /*@__PURE__*/ _fill_let_change("e0", 7, ($scope) => _text($scope.a, $scope.h.map((tab) => tab.path).join()));
const $input_files__OR__input_filesChange = /*@__PURE__*/ _init_or("e2", 6, ($scope) => $tabs($scope, $scope.e, $scope.f));
const $input_files$1 = /*@__PURE__*/ _const(4, $input_files__OR__input_filesChange);
const $setup__script = _script("e1", ($scope) => _on($scope.b, "click", function() {
	$tabs($scope, [...$scope.h, { path: "b" }]);
}));

// tags/file-host.marko
const $first_content__input_files = /*@__PURE__*/ _subscribe_closure_get("b1", 5, ($scope) => $input_files$1($scope.a, $scope._.d), 0, "b5");
const $input_files__closure = /*@__PURE__*/ _closure($first_content__input_files);
const $input_files = /*@__PURE__*/ _const(3, $input_files__closure);

// tags/route-pg.marko
const $files = _var_resume("f1", ($scope, files) => $input_files($scope.c, files));
const $filesChange = ($scope) => (_new_files) => {
	_var_change($scope.a, _new_files);
};
_resumed.f0 = $filesChange;
