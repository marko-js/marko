// template.marko
const $format_getter = _hoist_resume("a2", 1);
const $show2__script = _script("a3", ($scope) => _lifecycle($scope, { onMount: function() {
	$scope.a();
} }));
const $show = ($scope) => () => {
	console.log("show", typeof $format_getter($scope));
};
function $format() {
	return "formatted";
}
_resumed.a0 = $show;
_resumed.a1 = $format;
