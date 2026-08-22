// tags/wrap/index.marko
const $template$1 = "<div><!></div>";
const $walks$1 = "D%l";
_shells({ "__tests__/tags/wrap/index.marko": "__tests__/tags/wrap/index.marko;D%;<div><!></div>" });
var wrap_default = _template_persisted("__tests__/tags/wrap/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html$1("<div>");
	_patch_dynamic_tag($scope0_id, "#text/0", input.content, $scope0_owned, 0);
	_dynamic_tag$1($scope0_id, "#text/0", input.content, {}, 0, 0, _source_guard($scope0_reason, 0), 1);
	_html$1("</div>");
	$scope0_reason && writeScope($scope0_id, {}, "__tests__/tags/wrap/index.marko", 0);
}, 0, 0);

// template.marko
const $template = "<button>inc</button><!><!>";
const $walks = " b%c";
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D ;<span> </span>",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b%;<button>inc</button><!><!>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_msg__closures = new Set();
	const $count__closures = new Set();
	let count = 0;
	_html$1(`<button>inc</button>${_el_resume($scope0_id, "#button/0")}`);
	if ($scope0_reason) _if$1(() => {
		if (count < 2) {
			const $scope1_id = _scope_id();
			_set_serialize_reason(1);
			const $childScope = _peek_scope_id();
			wrap_default({ content: _content_elide("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _persisted_reason();
				const $scope2_id = _scope_id();
				_html$1(`<span>${_escape(input.msg + ":" + count)}${_el_resume($scope2_id, "#text/0")}</span>`);
				_subscribe($count__closures, _subscribe(_source_if($scope0_reason, 0) && $input_msg__closures, writeScope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "4:4")));
				_resume_branch($scope2_id);
			}, $scope1_id) });
			writeScope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, 1, 1, 0, 1);
	_script$1($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? writeScope($scope0_id, {
		input_msg: input.msg,
		count,
		"ClosureScopes:input_msg": $input_msg__closures,
		"ClosureScopes:count": $count__closures
	}, "__tests__/template.marko", 0, {
		input_msg: ["input.msg"],
		count: "1:6"
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.msg);
	_resume_branch($scope0_id);
}, 1, () => [wrap_default]);
