// template.marko
const $template = "<ul></ul><ol></ol><!><!>";
const $walks = " b b%c";
_shells({
	"__tests__/template.marko": "__tests__/template.marko; b b%;<ul></ul><ol></ol><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;D%c%;<li><!>:<!></li>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell; ;<div></div>",
	"__tests__/template.marko_3*shell": "__tests__/template.marko_3*shell;D%c%;<p><!>:<!></p>",
	"__tests__/template.marko_4*shell": "__tests__/template.marko_4*shell;D ;<li> </li>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_note = _source_guard($scope0_reason, 1), $sg__input_show = _source_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	_html("<ul>");
	_for_of([1, 2], (x) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_patch_text($scope1_id, "#text/0", x)}:${_patch_text($scope1_id, "#text/1", input.note, 2, $scope0_owned, 1)}</li>`);
		_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4");
	}, 0, $scope0_id, "#ul/0", 1, $sg__input_note, 0, void 0, void 0, "__tests__/template.marko_1*shell", 0, 0);
	_html(`</ul>${_el_resume($scope0_id, "#ul/0", $sg__input_note)}<ol>`);
	_for_of([1, 2], (x) => {
		const $scope4_id = _scope_id();
		_html(`<li>${_patch_text($scope4_id, "#text/0", x)}</li>`);
		_scope($scope4_id, {}, "__tests__/template.marko", "7:4");
	}, 0, $scope0_id, "#ol/1", 1, 1, 0, void 0, void 0, "__tests__/template.marko_4*shell", 0, 0);
	_html(`</ol>${_el_resume($scope0_id, "#ol/1")}`);
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			_html("<div>");
			_for_of([1, 2], (x) => {
				const $scope3_id = _scope_id();
				_html(`<p>${_patch_text($scope3_id, "#text/0", x)}:${_patch_text($scope3_id, "#text/1", input.note, 2, $scope0_owned, 1)}</p>`);
				_subscribe(_source_if($scope0_reason, 1) && $input_note__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "13:6"));
			}, 0, $scope2_id, "#div/0", 1, 1, 0, void 0, void 0, "__tests__/template.marko_3*shell", 0, 0);
			_html(`</div>${_el_resume($scope2_id, "#div/0")}`);
			$scope0_reason && _scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "11:2");
			return 0;
		}
	}, $scope0_id, "#text/2", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_2*shell"], $scope0_owned, 2);
	$scope0_reason && _scope($scope0_id, {
		input_note: input.note,
		"ClosureScopes:input_note": $input_note__closures
	}, "__tests__/template.marko", 0, { input_note: ["input.note"] });
}, 1, 0);
