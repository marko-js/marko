// tags/card/index.marko
const $template$2 = "<section class=card><!></section>";
const $walks$2 = "D%l";
_shells({ "__tests__/tags/card/index.marko": "__tests__/tags/card/index.marko;D%;<section class=card><!></section>" });
var card_default = _template_persisted("__tests__/tags/card/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<section class=card>");
	_patch_dynamic_tag($scope0_id, "#text/0", input.content, $scope0_owned, 0);
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, _source_guard($scope0_reason, 0), 1);
	_html("</section>");
	$scope0_reason && _scope($scope0_id, {}, "__tests__/tags/card/index.marko", 0);
}, 0, 0);

// tags/box/index.marko
const $template$1 = "<div class=box><!></div>";
const $walks$1 = "D%l";
_shells({ "__tests__/tags/box/index.marko": "__tests__/tags/box/index.marko;D%;<div class=box><!></div>" });
var box_default = _template_persisted("__tests__/tags/box/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<div class=box>");
	_patch_dynamic_tag($scope0_id, "#text/0", input.content, $scope0_owned, 0);
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, _source_guard($scope0_reason, 0), 1);
	_html("</div>");
	$scope0_reason && _scope($scope0_id, {}, "__tests__/tags/box/index.marko", 0);
}, 0, 0);

// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;D ;<p> </p>",
	"__tests__/template.marko_2*content": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_2*content;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $template$2),
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>+</button></main>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_title__closures = new Set();
	let open = false;
	_html("<main>");
	if ($scope0_reason) _if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_set_serialize_reason(1);
			const $childScope2 = _peek_scope_id();
			box_default({ content: _content_elide("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _persisted_reason();
				const $scope2_id = _scope_id();
				_set_serialize_reason(1);
				const $childScope = _peek_scope_id();
				card_default({ content: _content_elide("__tests__/template.marko_3*content", () => {
					const $scope3_reason = _persisted_reason();
					const $scope3_id = _scope_id();
					_html(`<p>${_text_resume($scope3_id, "#text/0", "t:" + input.title)}</p>`);
					_subscribe(_source_if($scope0_reason, 0) && $input_title__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "5:8"));
					_resume_branch($scope3_id);
				}, $scope2_id) });
				_scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					"#childScope/0": _existing_scope($childScope)
				}, "__tests__/template.marko", "4:6");
			}, $scope1_id) });
			_scope($scope1_id, { "#childScope/0": _existing_scope($childScope2) }, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 1, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? _scope($scope0_id, {
		input_title: input.title,
		open,
		"ClosureScopes:input_title": $input_title__closures
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		open: "1:6"
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.title);
	_resume_branch($scope0_id);
}, 1, () => [card_default, box_default]);
