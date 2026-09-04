// template.marko
const shout = (s) => s.toUpperCase() + "!";
const stamp = "srv";
var flag;
const $template = "<main><p><!> <!></p><!><button>+</button></main>";
const $walks = "E%c%l%b l";
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;E%c%l%b ;<main><p><!> <!></p><!><button>+</button></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell __tests__/template.marko_1_input_title#6/init __tests__/template.marko_1_count#8/init;D ;<span> </span>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<main><p>${_patch_text($scope0_id, "#text/0", shout(input.title), void 0, $scope0_owned, 0)} ${_patch_text($scope0_id, "#text/1", stamp, 2)}</p>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<span>${_text_resume($scope1_id, "#text/0", shout(input.title) + " #" + count)}</span>`);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "7:4");
			return 0;
		}
	}, $scope0_id, "#text/2", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_owned, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/3")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? _scope($scope0_id, {
		input_title: input.title,
		count
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		count: "4:6"
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.title);
}, 1, 0);
