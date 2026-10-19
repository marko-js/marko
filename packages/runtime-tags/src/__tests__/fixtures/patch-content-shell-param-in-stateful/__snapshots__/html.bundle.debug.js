// tags/note.marko
const $template$2 = "<i>note</i>";
const $walks$2 = "b";
_shells({ "__tests__/tags/note.marko": "__tests__/tags/note.marko,<i>note</i>" });
var note_default = _template("__tests__/tags/note.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<i>note</i>");
});

// tags/wrap.marko
const $template$1 = "<section><!></section>";
const $walks$1 = "D%l";
_shells({ "__tests__/tags/wrap.marko": "__tests__/tags/wrap.marko !;D%;<section><!></section>" });
var wrap_default = _template("__tests__/tags/wrap.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content__OR__input_label = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "#text/0", input.content, { label: input.label }, 0, 0, $wg__input_content__OR__input_label, void 0, 1, $scope0_reason, 0);
	_html("</section>");
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "__tests__/tags/wrap.marko_0_input_content#3_input_label#4/init");
	$scope0_page ? _scope($scope0_id, {
		input_content: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.content,
		input_label: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.label
	}, "__tests__/tags/wrap.marko", 0, {
		input_content: ["input.content"],
		input_label: ["input.label"]
	}) : (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "PatchValue:__tests__/tags/wrap.marko_fill0", input.content, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "PatchValue:__tests__/tags/wrap.marko_fill1", input.label, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content !__tests__/template.marko_2,",
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_1*shell;${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l")};${_w0}`)($template$1)
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 5);
			const $childScope2 = _patch_child($scope1_id, "#childScope/0");
			wrap_default({
				label: input.label,
				content: attrTag({ content: _content_resume("__tests__/template.marko_2*content", ({ label }) => {
					const $scope2_reason = _scope_reason(), $wg__label = _write_guard($scope2_reason, 0);
					const $scope2_id = _scope_id();
					_patch_value($scope2_id, "PatchValue:__tests__/template.marko_fill1", label);
					let open = true;
					if ($scope0_page) _if(() => {
						if (open) {
							const $scope3_id = _scope_id();
							_html(`<p>${_text_resume($scope3_id, "#text/0", label, $wg__label)}</p>`);
							_scope($scope3_id, {}, "__tests__/template.marko", "5:8");
							return 0;
						}
					}, $scope2_id, "#text/0", 1, 1, 0, 0, 1);
					_html(`<button>toggle</button>${_el_resume($scope2_id, "#button/1")}`);
					const $childScope = _patch_child($scope2_id, "#childScope/2");
					note_default({});
					_script($scope2_id, "__tests__/template.marko_2");
					_patch_value($scope2_id, "PatchValue:__tests__/template.marko_fill2", open, 1);
					_scope($scope2_id, {
						label,
						open,
						"#childScope/2": _existing_scope($childScope)
					}, "__tests__/template.marko", "3:6", {
						label: "3:17",
						open: "4:12"
					});
				}, $scope1_id) })
			});
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope2)
			}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	$scope0_page ? _scope($scope0_id, { input_label: _unfilled_if($scope0_reason, 0) && input.label }, "__tests__/template.marko", 0, { input_label: ["input.label"] }) : _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 1));
}, 1);
