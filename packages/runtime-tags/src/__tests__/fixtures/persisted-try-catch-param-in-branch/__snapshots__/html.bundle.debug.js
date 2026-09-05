// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
_shells({
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content,done",
	"__tests__/template.marko_3_#text#0/await": "__tests__/template.marko_3_#text#0/await,done",
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D l%;<button> </button><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;b%;<!><!><!>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_title__closures = new Set();
	const $input_promise__closures = new Set();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", count)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_try($scope1_id, "#text/0", _content_resume("__tests__/template.marko_3*content", () => {
				const $scope3_id = _scope_id();
				const $scope3_reason = _persisted_reason();
				_await($scope3_id, "#text/0", input.promise, () => {
					const $scope4_id = _scope_id();
					_html("done");
				}, 1, "__tests__/template.marko_3_#text#0/await");
				$scope0_reason && _subscribe(_source_if($scope0_reason, 3) && $input_promise__closures, _scope($scope3_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "4:4"));
				$scope0_reason && _resume_branch($scope3_id);
			}, $scope1_id), { catch: attrTag({ content: _content_resume("__tests__/template.marko_2*content", (err) => {
				const $scope2_reason = _persisted_reason();
				const $scope2_id = _scope_id();
				_html(`<em>${_text_resume($scope2_id, "#text/0", err.message)} ${_text_resume($scope2_id, "#text/1", input.title, 2)}</em>`);
				_subscribe(_source_if($scope0_reason, 2) && $input_title__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "6:6"));
			}, $scope1_id) }) });
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/2", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_owned, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? _scope($scope0_id, {
		input_title: input.title,
		input_promise: input.promise,
		count,
		"ClosureScopes:input_title": $input_title__closures,
		"ClosureScopes:input_promise": $input_promise__closures
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		input_promise: ["input.promise"],
		count: "1:6"
	}) : _owned_guard($scope0_owned, 2) && _patch_value($scope0_id, "__tests__/template.marko0", input.title);
}, 1, 0);
