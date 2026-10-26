// tags/wrapper.marko
const $template = "<div><!></div>";
const $setup$1 = [[], []];
_shells({ b: "b;D%;<div><!></div>" });
var wrapper_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $wg__input_content, void 0, 2, $scope0_reason, 0);
	_html("</div>");
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `/${_w0}&D l`)("D%l")};${((_w0) => `${_w0}<p> </p>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let shown = "";
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "a");
	wrapper_default({ content: _content("a2", () => {
		_scope_reason();
		const $scope1_page = _page_render();
		const $scope1_id = _scope_id();
		const label = input.label;
		_filled_guard($scope0_reason, 0) && _patch_write($scope1_id, "wb", label, !_server_guard($scope0_reason, 0));
		_html(`<button>show</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a0");
		$scope1_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, {
			b: label,
			_: _scope_with_id($scope0_id)
		}), _client_guard($scope0_reason, 0) && "a1");
	}, $scope0_id) });
	_html(`<p>${_text_resume($scope0_id, "b", shown)}</p>`);
	$scope0_page && _scope($scope0_id, {
		g: _write_if($scope0_reason, 0) && _unfilled_if($scope0_reason, 0) && $input_label__closures,
		a: _existing_scope($childScope)
	});
}, 1);
