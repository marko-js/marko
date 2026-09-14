// tags/code-block.marko
const $highlight = ($scope) => function(text) {
	return text.replace($scope.d.test, (m) => `<b>${$scope.d.content((s) => s)}</b>`);
};
_resume("b0", $highlight);

// template.marko
function $cursor(h) {
	return h("cursor");
}
_resume("a0", $cursor);
