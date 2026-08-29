// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
_shells({
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content;Db%;<p>A:<!></p>",
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content,caught-a",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content,<em>wait</em>",
	"__tests__/template.marko_1_#text#0/await": "__tests__/template.marko_1_#text#0/await;Db%;<p>A:<!></p>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D l%;<button> </button><!><!>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_a__closures = new Set();
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", n)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_try($scope0_id, "#text/2", _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _persisted_reason();
		_await($scope1_id, "#text/0", input.a, (v) => {
			const $scope4_id = _scope_id();
			_html(`<p>A:${_patch_text($scope4_id, "#text/0", v, 2, $scope0_owned, 0)}</p>`);
			_scope($scope4_id, {}, "__tests__/template.marko", "4:4");
		}, 1, "__tests__/template.marko_1_#text#0/await", 1);
		$scope0_reason && _subscribe($input_a__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2"));
		_resume_branch($scope1_id);
	}, $scope0_id), {
		placeholder: attrTag({ content: _content_record("__tests__/template.marko_2*content", $scope0_id) }),
		catch: attrTag({ content: _content_record("__tests__/template.marko_3*content", $scope0_id) })
	}, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && _scope($scope0_id, {
		n,
		"ClosureScopes:input_a": $input_a__closures
	}, "__tests__/template.marko", 0, { n: "1:6" });
	_resume_branch($scope0_id);
}, 1, 0);
