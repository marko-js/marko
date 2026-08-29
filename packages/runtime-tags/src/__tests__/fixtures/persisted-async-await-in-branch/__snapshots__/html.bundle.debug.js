// template.marko
const $template = "<main><h1> </h1><!><button>Count <!></button></main>";
const $walks = "E l%b Db%m";
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;D ;<em> </em>",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;E l%b Db%;<main><h1> </h1><!><button>Count <!></button></main>",
	"__tests__/template.marko_1_#text#0/await": "__tests__/template.marko_1_#text#0/await;D ;<em> </em>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;b%;<!><!><!>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell,<em>closed</em>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", input.title, void 0, $scope0_owned, 1)}</h1>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "#text/0", input.promise, (value) => {
				const $scope3_id = _scope_id();
				_html(`<em>${_patch_text($scope3_id, "#text/0", value, void 0, $scope0_owned, 3)}</em>`);
				_scope($scope3_id, {}, "__tests__/template.marko", "5:6");
			}, void 0, "__tests__/template.marko_1_#text#0/await");
			$scope0_reason && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:4");
			return 0;
		} else {
			const $scope2_id = _scope_id();
			_html("<em>closed</em>");
			$scope0_reason && _scope($scope2_id, {}, "__tests__/template.marko", "9:4");
			return 1;
		}
	}, $scope0_id, "#text/1", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell", "__tests__/template.marko_2*shell"]);
	_html(`<button>Count ${_text_resume($scope0_id, "#text/3", count, 2)}</button>${_el_resume($scope0_id, "#button/2")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && _scope($scope0_id, {
		input_promise: input.promise,
		count
	}, "__tests__/template.marko", 0, {
		input_promise: ["input.promise"],
		count: "1:6"
	});
	_resume_branch($scope0_id);
}, 1, 0);
