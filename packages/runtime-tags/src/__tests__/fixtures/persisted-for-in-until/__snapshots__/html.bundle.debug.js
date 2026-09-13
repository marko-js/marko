// template.marko
const $template = "<ul><!><!></ul><button>+</button>";
const $walks = "D%b%l b";
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b%l ;<ul><!><!></ul><button>+</button>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell;D ;<li> </li>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<ul>");
	if ($scope0_reason) _for_in({
		a: input.label,
		b: count
	}, (k, v) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_text_resume($scope1_id, "#text/0", k)}=${_text_resume($scope1_id, "#text/1", v, 2)}</li>`);
		_scope($scope1_id, {}, "__tests__/template.marko", "3:4");
	}, 0, $scope0_id, "#text/0", 1, 1, 1, 0, 1);
	_for_until(input.on ? 2 : 1, 0, 1, (i) => {
		const $scope2_id = _scope_id();
		_html(`<li>${_patch_text($scope2_id, "#text/0", i, void 0, 0, 0)}</li>`);
		_scope($scope2_id, {}, "__tests__/template.marko", "4:4");
	}, 0, $scope0_id, "#text/1", 1, _source_guard($scope0_reason, 1), void 0, void 0, void 0, "__tests__/template.marko_2*shell", $scope0_owned, 1);
	_html(`</ul><button>+</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? _scope($scope0_id, {
		input_label: input.label,
		count
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		count: "1:6"
	}) : _filled_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.label);
}, 1, 0);
