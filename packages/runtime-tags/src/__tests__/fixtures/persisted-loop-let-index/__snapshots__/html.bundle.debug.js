// template.marko
const $template = "<ul></ul>";
const $walks = " b";
_shells({
	"__tests__/template.marko": "__tests__/template.marko; ;<ul></ul>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell !__tests__/template.marko_1;D bD l ;<li> <span> </span><button>+</button></li>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_labels = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<ul>");
	_for_of(input.labels, (label) => {
		const $scope1_id = _scope_id();
		let picks = 0;
		_html(`<li>${_patch_text($scope1_id, "#text/0", label, $scope0_owned, 0)}${_el_resume($scope1_id, "#text/0")}<span>${_escape(picks)}${_el_resume($scope1_id, "#text/1")}</span><button>+</button>${_el_resume($scope1_id, "#button/2")}</li>`);
		_script($scope1_id, "__tests__/template.marko_1");
		_patch_value($scope1_id, "__tests__/template.marko0", picks, 1);
		writeScope($scope1_id, { picks }, "__tests__/template.marko", "2:4", { picks: "5:12" });
	}, 0, $scope0_id, "#ul/0", 1, $sg__input_labels, $sg__input_labels, void 0, void 0, "__tests__/template.marko_1*shell");
	_html(`</ul>${_el_resume($scope0_id, "#ul/0", $sg__input_labels)}`);
	$scope0_reason && writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1, 0);
