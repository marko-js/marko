// template.marko
const $template = "<main><h1> </h1><section><!></section><footer><!></footer><button>Count <!></button></main>";
const $walks = "E lD%lD%l Db%m";
_shells({
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content;D ;<span> </span>",
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;D ;<em> </em>",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content,loading",
	"__tests__/template.marko_1_#text#0/await": "__tests__/template.marko_1_#text#0/await;D ;<em> </em>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%;<!><!><!>",
	"__tests__/template.marko_0_#text#2/await": "__tests__/template.marko_0_#text#2/await;D ;<span> </span>",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;E lD%lD%l Db%;<main><h1> </h1><section><!></section><footer><!></footer><button>Count <!></button></main>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_related__closures = new Set();
	const $input_slow__closures = new Set();
	let count = 0;
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", input.title, $scope0_owned, 4)}${_el_resume($scope0_id, "#text/0")}</h1><section>`);
	_try($scope0_id, "#text/1", _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _persisted_reason();
		_await($scope1_id, "#text/0", resolveAfter(input.related, input.slow ? 1 : 0), (related) => {
			const $scope3_id = _scope_id();
			_html(`<em>${_patch_text($scope3_id, "#text/0", related, $scope0_owned, 0)}${_el_resume($scope3_id, "#text/0")}</em>`);
			writeScope($scope3_id, {}, "__tests__/template.marko", "9:8");
		}, void 0, "__tests__/template.marko_1_#text#0/await", 1);
		$scope0_reason && _subscribe(_source_if($scope0_reason, 6) && $input_slow__closures, _subscribe(_source_if($scope0_reason, 5) && $input_related__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "7:6")));
		_resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_record("__tests__/template.marko_2*content", $scope0_id) }) }, 1);
	_html("</section><footer>");
	_await($scope0_id, "#text/2", resolveAfter(input.note, input.slow ? 2 : 0), (note) => {
		const $scope4_id = _scope_id();
		_html(`<span>${_patch_text($scope4_id, "#text/0", note, $scope0_owned, 2)}${_el_resume($scope4_id, "#text/0")}</span>`);
		writeScope($scope4_id, {}, "__tests__/template.marko", "15:6");
	}, void 0, "__tests__/template.marko_0_#text#2/await", 1);
	_html(`</footer><button>Count <!>${_escape(count)}${_el_resume($scope0_id, "#text/4")}</button>${_el_resume($scope0_id, "#button/3")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && writeScope($scope0_id, {
		input_related: input.related,
		input_slow: input.slow,
		input_note: input.note,
		count,
		"ClosureScopes:input_related": $input_related__closures,
		"ClosureScopes:input_slow": $input_slow__closures
	}, "__tests__/template.marko", 0, {
		input_related: ["input.related"],
		input_slow: ["input.slow"],
		input_note: ["input.note"],
		count: "3:6"
	});
	_resume_branch($scope0_id);
}, 1, 0);
