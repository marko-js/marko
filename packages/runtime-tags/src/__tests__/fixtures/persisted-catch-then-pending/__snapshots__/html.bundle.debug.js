// template.marko
const $template = "<main><!><button> </button></main>";
const $walks = "D%b D m";
_shells({
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content,<span>ok</span>",
	"__tests__/template.marko_3_#text#0/await": "__tests__/template.marko_3_#text#0/await,<span>ok</span>",
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b D ;<main><!><button> </button></main>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_detail = _source_guard($scope0_reason, 0), $si__input_detail = _source_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_detail__closures = new Set();
	const $input_promise__closures = new Set();
	let count = 0;
	_html("<main>");
	_try($scope0_id, "#text/0", _content_resume("__tests__/template.marko_3*content", () => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _persisted_reason();
		_await($scope3_id, "#text/0", input.promise, () => {
			const $scope4_id = _scope_id();
			_html("<span>ok</span>");
		}, 1, "__tests__/template.marko_3_#text#0/await");
		$scope0_reason && _subscribe($input_promise__closures, _scope($scope3_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4"));
		$scope0_reason && _resume_branch($scope3_id);
	}, $scope0_id), { catch: attrTag({ content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _persisted_reason();
		const $scope1_id = _scope_id();
		_if(() => {
			if (input.detail) {
				const $scope2_id = _scope_id();
				_html(`<p>${_text_resume($scope2_id, "#text/0", input.detail)}</p>`);
				_subscribe($si__input_detail && $input_detail__closures, _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					"ClosureSignalIndex:input_detail": 1
				}, "__tests__/template.marko", "8:8"));
				return 0;
			}
		}, $scope1_id, "#text/0", $sg__input_detail, $sg__input_detail, $sg__input_detail, 0, 1);
		_subscribe($si__input_detail && $input_detail__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "7:6"));
		$sg__input_detail || _resume_branch($scope1_id);
	}, $scope0_id) }) }, 1);
	_html(`<button>${_text_resume($scope0_id, "#text/2", count)}</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? _scope($scope0_id, {
		input_detail: input.detail,
		count,
		"ClosureScopes:input_detail": $input_detail__closures,
		"ClosureScopes:input_promise": $input_promise__closures
	}, "__tests__/template.marko", 0, {
		input_detail: ["input.detail"],
		count: "1:6"
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.detail);
}, 1, 0);
