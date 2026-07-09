// template.marko
_enable_catch();
const $await_content3__setup = _script("a6", ($scope) => _on($scope.b, "click", function() {
	document.querySelector("button").textContent = "After";
}));
const $catch_content3 = _content_resume("a5", "Rejected C", "b");
const $catch_content2 = _content_resume("a3", "Rejected B", "b");
const $catch_content = _content_resume("a1", "Rejected A", "b");
