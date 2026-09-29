// template.marko
const $await_content3__setup = _script("a2", ($scope) => _on($scope.b, "click", function() {
	document.querySelector("button").textContent = "After";
}));
const $catch_content3 = _content("a3", "Rejected C");
const $catch_content2 = _content("a1", "Rejected B");
const $catch_content = _content("a0", "Rejected A");
