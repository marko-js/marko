// template.marko
const $template = "<main><h1> </h1><!><button>Count <!></button></main>";
const $walks = "E l%b Db%m";
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;D ;<em> </em>",
	"__tests__/template.marko_0_#text#1/await": "__tests__/template.marko_0_#text#1/await;D ;<em> </em>",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;E l%b Db%;<main><h1> </h1><!><button>Count <!></button></main>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", input.title, void 0, $scope0_owned, 0)}</h1>`);
	_await($scope0_id, "#text/1", input.promise, (value) => {
		const $scope1_id = _scope_id();
		_html(`<em>${_patch_text($scope1_id, "#text/0", value, void 0, $scope0_owned, 1)}</em>`);
		_scope($scope1_id, {}, "__tests__/template.marko", "4:4");
	}, 1, "__tests__/template.marko_0_#text#1/await", 1);
	_html(`<button>Count ${_text_resume($scope0_id, "#text/3", count, 2)}</button>${_el_resume($scope0_id, "#button/2")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && _scope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "1:6" });
}, 1, 0);
