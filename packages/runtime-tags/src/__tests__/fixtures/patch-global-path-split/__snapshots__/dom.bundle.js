// template.marko
const $setup__$global_o_x = _fill_global_path_script("a0", ($scope) => $scope.a.append($scope.$.o.x), "o", "x");
const $setup__$global_o = _fill_global_script("a1", ($scope) => $scope.b.textContent = JSON.stringify($scope.$.o), "o");
const $setup__$global_o__OR__$global_o_x = _fill_global_script("a2", ($scope) => $scope.c.textContent = $scope.$.o.x + JSON.stringify($scope.$.o), "o");
