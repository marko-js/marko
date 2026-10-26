// tags/counter-box/index.marko
const $template = "<span>box <!></span>";
const $walks = "Db%l";
function read(reads) {
	reads.count++;
}
const $setup$1 = [[], []];
_shells({ b: "b !;Db%;<span>box <!></span>" });
_stateful_return("b");
var counter_box_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = input.start;
	_html(`<span>box ${_text_resume($scope0_id, "a", count, 2)}</span>`);
	const $return = count;
	const $valueChange2 = _patch_bind($scope0_id, "wU", read(input.reads) || _resume(function(v) {
		count = v;
	}, "b0", $scope0_id) || void 0, $scope0_reason, 1);
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb1", count, 1);
	$scope0_page ? _scope($scope0_id, {
		e: input.reads,
		U: $valueChange2
	}) : _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.reads, !_server_guard($scope0_reason, 1));
	return $return;
});

// template.marko
const $setup = _shell_setup([[], ["a1"]], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `D0${_w0}&D l l`)($walks)};${((_w0) => `<main>${_w0}<p> </p><button>+</button></main>`)($template)}`)() });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const reads = { count: 0 };
	_html("<main>");
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "a", 1);
	let count = counter_box_default({
		start: 1,
		reads
	});
	_var($scope0_id, "b", $childScope, "a0");
	_html(`<p>${_patch_text($scope0_id, "c", reads.count, void 0, 0, 0)}</p><button>+</button>${_el_resume($scope0_id, "d")}</main>`);
	_script($scope0_id, "a1");
	$scope0_page && _scope($scope0_id, {
		g: count,
		a: _existing_scope($childScope)
	});
}, 1);
