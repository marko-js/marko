// template.marko
const $template = "<ul></ul><ol></ol><!><!>";
const $walks = " b b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko; b b%;<ul></ul><ol></ol><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;D%c%;<li><!>:<!></li>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell; ;<div></div>",
	"__tests__/template.marko_3*shell": "__tests__/template.marko_3*shell;D%c%;<p><!>:<!></p>",
	"__tests__/template.marko_4*shell": "__tests__/template.marko_4*shell;D ;<li> </li>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_note = _write_if($scope0_reason, 1), $cg__input_note = _client_guard($scope0_reason, 1), $wi__input_note__OR__input_show = _write_if($scope0_reason, 0), $ui__input_show = _unfilled_if($scope0_reason, 2), $ui__input_note = _unfilled_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	_html("<ul>");
	_for_of([1, 2], (x) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_text_mark($scope1_id, "#text/0", x, 1, 0, 0)}:${_text_mark($scope1_id, "#text/1", input.note, 2, $scope0_reason, 1)}</li>`);
		$cg__input_note && _patch_render($scope1_id, "__tests__/template.marko_1_input_note#0:5/setup");
		_scope($scope1_id, { _: $wi__input_note && _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4");
	}, 0, $scope0_id, "#ul/0", 1, 1, 1, 0, 0, "__tests__/template.marko_1*shell", 0, 0);
	_html(`</ul>${_el_mark($scope0_id, "#ul/0")}<ol>`);
	_for_of([1, 2], (x) => {
		const $scope4_id = _scope_id();
		_html(`<li>${_text_mark($scope4_id, "#text/0", x, 1, 0, 0)}</li>`);
		_scope($scope4_id, {}, "__tests__/template.marko", "7:4");
	}, 0, $scope0_id, "#ol/1", 1, 1, 1, 0, 0, "__tests__/template.marko_4*shell", 0, 0);
	_html(`</ol>${_el_mark($scope0_id, "#ol/1")}`);
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			_html("<div>");
			_for_of([1, 2], (x) => {
				const $scope3_id = _scope_id();
				_html(`<p>${_text_mark($scope3_id, "#text/0", x, 1, 0, 0)}:${_text_mark($scope3_id, "#text/1", input.note, 2, $scope0_reason, 1)}</p>`);
				_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope3_id, "__tests__/template.marko_3_input_note#0:5/subscribe", $cg__input_note);
				_subscribe(_unfilled_if($scope0_reason, 1) && $input_note__closures, _scope($scope3_id, { _: $wi__input_note__OR__input_show && _scope_with_id($scope2_id) }, "__tests__/template.marko", "13:6"), $cg__input_note && "__tests__/template.marko_3_input_note#0:5/subscribe");
			}, 0, $scope2_id, "#div/0", 1, 1, 1, 0, 0, "__tests__/template.marko_3*shell", 0, 0);
			_html(`</div>${_el_mark($scope2_id, "#div/0")}`);
			_scope($scope2_id, { _: $wi__input_note__OR__input_show && _scope_with_id($scope0_id) }, "__tests__/template.marko", "11:2");
			return 0;
		}
	}, $scope0_id, "#text/2", 1, _write_guard($scope0_reason, 2), 1, 0, 0, ["__tests__/template.marko_2*shell"], $scope0_reason, 2);
	_scope($scope0_id, {
		input_note: _write_if($scope0_reason, 2) && ($ui__input_show || $ui__input_note) && input.note,
		"ClosureScopes:input_note/7": $wi__input_note && $wi__input_note && ($ui__input_note || $ui__input_show) && $input_note__closures
	}, "__tests__/template.marko", 0, { input_note: ["input.note"] }) || _filled_guard($scope0_reason, 1) && $ui__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_note", input.note, !_server_guard($scope0_reason, 1)) && _client_guard($scope0_reason, 2) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_note#5/subscribers", "input_note");
}, 1);
