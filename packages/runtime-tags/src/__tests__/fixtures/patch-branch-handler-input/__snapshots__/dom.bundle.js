// template.marko
const $if_content__setup = _script("a1", ($scope) => _on($scope.a, "click", function(ev) {
	ev.target.dataset.seen = $scope._.g;
}));
