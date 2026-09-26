// template.marko
const $template = "<main><!><button>interactive</button></main>";
const $walks = "D%b l";
_shells({
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content;D%c%;<em><!>.<!></em>",
	"__tests__/template.marko_3_#text#0/await": "__tests__/template.marko_3_#text#0/await;D%c%;<em><!>.<!></em>",
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>interactive</button></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell; ;<section></section>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell;b%;<!><!><!>"
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $sg__input_groups = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<main>");
	_for_of(input.groups, (group) => {
		const $scope1_id = _scope_id();
		_html("<section>");
		_for_of(group.items, (item) => {
			const $scope2_id = _scope_id();
			const $for_content2__item_promise__closures = new Set();
			_try($scope2_id, "#text/0", _content_resume("__tests__/template.marko_3*content", () => {
				const $scope3_id = _scope_id();
				const $scope3_reason = _scope_reason();
				_await($scope3_id, "#text/0", item.promise, (v) => {
					const $scope4_id = _scope_id();
					_html(`<em>${_patch_text($scope4_id, "#text/0", group.id, void 0, $scope0_reason, 0)}.${_patch_text($scope4_id, "#text/1", v, 2, $scope0_reason, 0)}</em>`);
					_scope($scope4_id, { _: _scope_with_id($scope3_id) }, "__tests__/template.marko", "6:12");
				}, 1, "__tests__/template.marko_4*content");
				$scope0_page && _subscribe(_unfilled_if($scope0_reason, 0) && $for_content2__item_promise__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "5:10"), _client_guard($scope0_reason, 0) && "__tests__/template.marko_3_item_promise#3/subscribe", 0);
				$scope0_page && _resume_branch($scope3_id);
			}, $scope2_id), { catch: attrTag({ content: _content_resume("__tests__/template.marko_5*content", (err) => {
				const $scope5_reason = _scope_reason(), $sg__err_message = _source_guard($scope5_reason, 0);
				const $scope5_id = _scope_id();
				_html(`<b>${_text_resume($scope5_id, "#text/0", err.message, $sg__err_message)}</b>`);
				_source_if($scope5_reason, 0) && _scope($scope5_id, {}, "__tests__/template.marko", "7:12");
			}, $scope2_id) }) });
			$scope0_page && _scope($scope2_id, {
				_: _scope_with_id($scope1_id),
				"ClosureScopes:item_promise": $for_content2__item_promise__closures
			}, "__tests__/template.marko", "4:8");
		}, 0, $scope1_id, "#section/0", 1, 1, $sg__input_groups, void 0, void 0, "__tests__/template.marko_2*shell", $scope0_reason, 0);
		_html(`</section>${_el_resume($scope1_id, "#section/0")}`);
		_scope($scope1_id, {}, "__tests__/template.marko", "2:4");
	}, "id", $scope0_id, "#text/0", 1, 1, $sg__input_groups, void 0, void 0, "__tests__/template.marko_1*shell", $scope0_reason, 0);
	_html(`<button>interactive</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1, 0);
