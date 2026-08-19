// tags/card/index.marko
const $template$1 = "<section><header><!></header><footer><!></footer></section>";
const $walks$1 = "E%lD%m";
var card_default = _template_persisted("__tests__/tags/card/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html$1("<section><header>");
	_patch_dynamic_tag($scope0_id, "#text/0", input.header, $scope0_owned, 1);
	_dynamic_tag$1($scope0_id, "#text/0", input.header, {}, 0, 0, _source_guard($scope0_reason, 1), 1);
	_html$1("</header><footer>");
	_patch_dynamic_tag($scope0_id, "#text/1", input.footer, $scope0_owned, 2);
	_dynamic_tag$1($scope0_id, "#text/1", input.footer, {}, 0, 0, _source_guard($scope0_reason, 2), 1);
	_html$1("</footer></section>");
	$scope0_reason && writeScope($scope0_id, {}, "__tests__/tags/card/index.marko", 0);
}, 0, 0);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)($walks$1);
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content,static",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;D ;<b> </b>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_h__closures = new Set();
	_html$1("<main>");
	_set_serialize_reason(0);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	card_default({
		header: attrTag({ content: _content_elide("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _persisted_reason();
			const $scope1_id = _scope_id();
			_html$1(`<b>${_patch_text($scope1_id, "#text/0", input.h, $scope0_owned, 0)}${_el_resume($scope1_id, "#text/0")}</b>`);
			_subscribe(_source_if($scope0_reason, 0) && $input_h__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:6"));
			_resume_branch($scope1_id);
		}, $scope0_id) }),
		footer: attrTag({ content: _content_elide("__tests__/template.marko_2*content", () => {
			const $scope2_reason = _persisted_reason();
			const $scope2_id = _scope_id();
			_html$1("static");
		}, $scope0_id) })
	});
	_html$1("</main>");
	$scope0_reason && writeScope($scope0_id, {
		"ClosureScopes:input_h": $input_h__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0);
}, 1, () => [card_default]);
