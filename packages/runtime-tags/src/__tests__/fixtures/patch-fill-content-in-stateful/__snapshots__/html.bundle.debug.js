// tags/wrap/index.marko
const $template$1 = "<div><!></div>";
const $walks$1 = "D%l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/wrap/index.marko": "__tests__/tags/wrap/index.marko;D%;<div><!></div>" });
var wrap_default = _template("__tests__/tags/wrap/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</div>");
	_scope($scope0_id, {}, "__tests__/tags/wrap/index.marko", 0);
});

// template.marko
const $template = "<button>inc</button><!><!>";
const $walks = " b%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b%;<button>inc</button><!><!>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_msg = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_msg__closures = new Set();
	const $count__closures = new Set();
	let count = 0;
	_html(`<button>inc</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (count < 2) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			_peek_scope_id($scope1_id, "#childScope/0", 0);
			wrap_default({ content: _content("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				_html(`<span>${_text_resume($scope2_id, "#text/0", input.msg + ":" + count)}</span>`);
				_subscribe($count__closures, _subscribe($wi__input_msg && $input_msg__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "4:4"), "__tests__/template.marko_2_input_msg#0:4/subscribe"), "__tests__/template.marko_2_count#0:5/subscribe");
			}, $scope1_id) });
			_patch_child_end();
			_scope($scope1_id, {}, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, 1, 0, 0, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_msg: input.msg,
		count,
		"ClosureScopes:input_msg/6": $wi__input_msg && $input_msg__closures,
		"ClosureScopes:count/7": $count__closures
	}, "__tests__/template.marko", 0, {
		input_msg: ["input.msg"],
		count: "1:6"
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.msg, !_server_guard($scope0_reason, 0));
}, 1);
