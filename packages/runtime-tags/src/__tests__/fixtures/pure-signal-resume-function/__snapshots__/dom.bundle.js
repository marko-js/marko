// tags/my-button.marko
const $input__script = _script("b0", ($scope) => _attrs_script($scope, "a"));

// template.marko
const $mybutton_content = _content_resume("a1", "Click", "b");
function $onClick($scope) {
	return function() {
		console.log($scope.b);
	};
}
_resume("a0", $onClick);
