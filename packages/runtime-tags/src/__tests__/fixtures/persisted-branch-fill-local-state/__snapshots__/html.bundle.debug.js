// template.marko
const $template = "<main><!><em> </em><button id=c>+</button></main>";
const $walks = "D%bD l l";
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%bD l ;<main><!><em> </em><button id=c>+</button></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell __tests__/template.marko_1_input_title#6/init!__tests__/template.marko_1;D l ;<p> </p><button id=n>n</button>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let n = 0;
			_html(`<p>${_text_resume($scope1_id, "#text/0", input.title + "@" + n)}</p><button id=n>n</button>${_el_resume($scope1_id, "#button/1")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			_patch_value($scope1_id, "__tests__/template.marko1", n, 1);
			_scope($scope1_id, {
				n,
				_: _scope_with_id($scope0_id)
			}, "__tests__/template.marko", "3:4", { n: "4:10" });
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_owned, 1);
	_html(`<em>${_text_resume($scope0_id, "#text/1", count)}</em><button id=c>+</button>${_el_resume($scope0_id, "#button/2")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? _scope($scope0_id, {
		input_title: input.title,
		count
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		count: "1:6"
	}) : _owned_guard($scope0_owned, 2) && _patch_value($scope0_id, "__tests__/template.marko0", input.title);
	_resume_branch($scope0_id);
}, 1, 0);
