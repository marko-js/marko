// template.marko
const $template = "<div><h1> </h1><button class=root>+</button><!></div>";
const $walks = "E l b%l";
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;E l b%;<div><h1> </h1><button class=root>+</button><!></div>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell !__tests__/template.marko_1;Db%l ;<p>Seen <!></p><button class=inner>+</button>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<div><h1>${_text_resume($scope0_id, "#text/0", input.title + " #" + count)}</h1><button class=root>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let n = 0;
			_html(`<p>Seen ${_text_resume($scope1_id, "#text/0", n, 2)}</p><button class=inner>+</button>${_el_resume($scope1_id, "#button/1")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			_patch_value($scope1_id, "__tests__/template.marko1", n, 1);
			_scope($scope1_id, { n }, "__tests__/template.marko", "5:4", { n: "6:10" });
			return 0;
		}
	}, $scope0_id, "#text/2", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_owned, 1);
	_html("</div>");
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? _scope($scope0_id, {
		input_title: input.title,
		count
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		count: "1:6"
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.title);
	_resume_branch($scope0_id);
}, 1, 0);
