// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
_shells({
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content;D ;<em> </em>",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content,loading",
	"__tests__/template.marko_1_#text#0/await": "__tests__/template.marko_1_#text#0/await;D ;<em> </em>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%;<!><!><!>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_promise__closures = new Set();
	_html("<main>");
	_try($scope0_id, "#text/0", _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _persisted_reason();
		_await($scope1_id, "#text/0", input.promise, (value) => {
			const $scope4_id = _scope_id();
			_html(`<em>${_patch_text($scope4_id, "#text/0", value, $scope0_owned, 0)}${_el_resume($scope4_id, "#text/0")}</em>`);
			writeScope($scope4_id, {}, "__tests__/template.marko", "4:6");
		}, void 0, "__tests__/template.marko_1_#text#0/await");
		$scope0_reason && _subscribe($input_promise__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4"));
		_resume_branch($scope1_id);
	}, $scope0_id), {
		placeholder: attrTag({ content: _content_record("__tests__/template.marko_2*content", $scope0_id) }),
		catch: attrTag({ content: _content_elide("__tests__/template.marko_3*content", (err) => {
			const $scope3_reason = _persisted_reason();
			const $scope3_id = _scope_id();
			_html(`<em>${_escape(err.message)}${_el_resume($scope3_id, "#text/0")}</em>`);
			writeScope($scope3_id, {}, "__tests__/template.marko", "7:6");
		}, $scope0_id) })
	});
	_html("</main>");
	$scope0_reason && writeScope($scope0_id, { "ClosureScopes:input_promise": $input_promise__closures }, "__tests__/template.marko", 0);
}, 1, 0);
