// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content,<em>loading</em>",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D%;<div id=done><!> done</div>",
	"__tests__/template.marko_1_#text#0/await": "__tests__/template.marko_1_#text#0/await;D%;<div id=done><!> done</div>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D l%;<button> </button><!><!>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_msg__closures = new Set();
	const $input_promise__closures = new Set();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", count)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_try($scope0_id, "#text/2", _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _persisted_reason();
		_await($scope1_id, "#text/0", input.promise, () => {
			const $scope2_id = _scope_id();
			_script($scope2_id, "__tests__/template.marko_2_input_msg#6/pending");
			_html(`<div id=done>${_patch_text($scope2_id, "#text/0", input.msg, void 0, $scope0_owned, 2)} done</div>`);
			_scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "4:4");
			_resume_branch($scope2_id);
		}, 1, "__tests__/template.marko_1_#text#0/await", 1);
		$scope0_reason && _subscribe(_source_if($scope0_reason, 1) && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2"));
		_resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_record("__tests__/template.marko_3*content", $scope0_id) }) }, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && _scope($scope0_id, {
		input_msg: input.msg,
		count,
		"ClosureScopes:input_msg": $input_msg__closures,
		"ClosureScopes:input_promise": $input_promise__closures
	}, "__tests__/template.marko", 0, {
		input_msg: ["input.msg"],
		count: "1:6"
	});
	_resume_branch($scope0_id);
}, 1, 0);
