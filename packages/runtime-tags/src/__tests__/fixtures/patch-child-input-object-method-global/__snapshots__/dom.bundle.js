// tags/code-block.marko
const $highlight = ($scope) => function(text) {
	return text.replace($scope.d.test, (m) => `<b class=${$scope.$.theme}>${$scope.d.content((s) => s)}</b>`);
};
_resumed.b0 = $highlight;

// template.marko
function $cursor(h) {
	return h("cursor");
}
_resumed.a0 = $cursor;
