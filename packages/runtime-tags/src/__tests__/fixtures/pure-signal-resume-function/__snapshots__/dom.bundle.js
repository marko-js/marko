// total: 6178 (min) 2551 (brotli)
// tags/my-button.marko: 38 (min) 42 (brotli)
const $input__script = _script("b0", ($scope) => _attrs_script($scope, "a"));

// template.marko: 100 (min) 79 (brotli)
const $mybutton_content = _content_resume("a1", "Click", "b");
function $onClick($scope) {
	return function() {
		console.log($scope.b);
	};
}
_resume("a0", $onClick);
