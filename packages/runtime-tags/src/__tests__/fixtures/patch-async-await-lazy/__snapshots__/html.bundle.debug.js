// template.marko
const $template = "<main><h1> </h1><section><!></section><footer><!></footer><button>Count <!></button></main>";
const $walks = "E lD%lD%l Db%m";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content;D ;<span> </span>",
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;D ;<em> </em>",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content",
	"__tests__/template.marko_1_#text#0/await": "__tests__/template.marko_1_#text#0/await;D ;<em> </em>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%;<!><!><!>",
	"__tests__/template.marko_0_#text#2/await": "__tests__/template.marko_0_#text#2/await;D ;<span> </span>",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;E lD%lD%l Db%;<main><h1> </h1><section><!></section><footer><!></footer><button>Count <!></button></main>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_related__OR__input_slow = _write_if($scope0_reason, 0), $cg__input_slow = _client_guard($scope0_reason, 5), $cg__input_related = _client_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_related__closures = new Set();
	const $input_slow__closures = new Set();
	let count = 0;
	_html(`<main><h1>${_text_resume($scope0_id, "#text/0", input.title, 1, $scope0_reason, 3)}</h1><section>`);
	_try($scope0_id, "#text/1", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", resolveAfter(input.related, input.slow ? 1 : 0), (related) => {
			const $scope3_id = _scope_id();
			_html(`<em>${_text_resume($scope3_id, "#text/0", related, 1, $scope0_reason, 0)}</em>`);
			_scope($scope3_id, {}, "__tests__/template.marko", "9:8");
		}, 1, "__tests__/template.marko_3*content", _unfilled_if($scope0_reason, 0) && 2, 1);
		(_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 0)) && _patch_init($scope1_id, "__tests__/template.marko_1_input_related#0:8/subscribe");
		(_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 0)) && _patch_init($scope1_id, "__tests__/template.marko_1_input_slow#0:9/subscribe");
		_patch_join_init($scope1_id, "__tests__/template.marko_1_input_related#0:8_input_slow#0:9/init", $scope0_reason, 0, _filled_guard($scope0_reason, 4) && ">input_related", _filled_guard($scope0_reason, 5) && ">input_slow");
		$wi__input_related__OR__input_slow && _subscribe(_unfilled_if($scope0_reason, 5) && $input_slow__closures, _subscribe(_unfilled_if($scope0_reason, 4) && $input_related__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "7:6"), $cg__input_related && "__tests__/template.marko_1_input_related#0:8/subscribe", 0), $cg__input_slow && "__tests__/template.marko_1_input_slow#0:9/subscribe", 0);
		$wi__input_related__OR__input_slow && _resume_branch($scope1_id);
	}, () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html("loading");
	}, void 0, "__tests__/template.marko_2*content", void 0, "__tests__/template.marko_1*content", 1, 0, 2);
	_html("</section><footer>");
	_await($scope0_id, "#text/2", resolveAfter(input.note, input.slow ? 2 : 0), (note) => {
		const $scope4_id = _scope_id();
		_html(`<span>${_text_resume($scope4_id, "#text/0", note, 1, $scope0_reason, 2)}</span>`);
		_scope($scope4_id, {}, "__tests__/template.marko", "15:6");
	}, 1, "__tests__/template.marko_4*content", _unfilled_if($scope0_reason, 2) && 2, 1);
	_html(`</footer><button>Count ${_text_resume($scope0_id, "#text/4", count, 2)}</button>${_el_resume($scope0_id, "#button/3")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_filled_guard($scope0_reason, 4) && $cg__input_slow && _patch_write($scope0_id, "PatchMarkedWrite:input_related", input.related);
	_filled_guard($scope0_reason, 5) && ($cg__input_related || _client_guard($scope0_reason, 6)) && _patch_write($scope0_id, "PatchMarkedWrite:input_slow", input.slow);
	_filled_guard($scope0_reason, 6) && $cg__input_slow && _patch_write($scope0_id, "PatchMarkedWrite:input_note", input.note);
	_patch_join_init($scope0_id, "__tests__/template.marko_0_input_slow#9_input_note#10/init", $scope0_reason, 2, _filled_guard($scope0_reason, 5) && "input_slow", _filled_guard($scope0_reason, 6) && "input_note");
	_scope($scope0_id, {
		input_related: (_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 0)) && input.related,
		input_slow: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.slow,
		input_note: (_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 2)) && input.note,
		count,
		"ClosureScopes:input_related/13": _write_if($scope0_reason, 4) && (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 0)) && $input_related__closures,
		"ClosureScopes:input_slow/14": _write_if($scope0_reason, 5) && (_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && $input_slow__closures
	}, "__tests__/template.marko", 0, {
		input_related: ["input.related"],
		input_slow: ["input.slow"],
		input_note: ["input.note"],
		count: "3:6"
	});
}, 1);
