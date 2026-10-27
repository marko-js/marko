// template.marko
const $template = "<main><p>last <!></p><!></main>";
const $walks = "Eb%l%l";
const reads = new WeakSet();
function read($global, handler) {
	if (reads.has($global)) {
		throw new Error("A `valueChange` was read twice in one render.");
	}
	reads.add($global);
	queueMicrotask(() => reads.delete($global));
	return handler;
}
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !;Eb%l%;<main><p>last <!></p><!></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell !__tests__/template.marko_1; D ;<button> </button>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let last = 0;
	const onCount = _resume((next) => {
		last = next;
	}, "__tests__/template.marko_0/onCount", $scope0_id);
	_html(`<main><p>last ${_text_resume($scope0_id, "#text/0", last, 2)}</p>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let count = input.start;
			_html(`<button>${_text_resume($scope1_id, "#text/1", count)}</button>${_el_resume($scope1_id, "#button/0")}`);
			_fill_global_subscribe("__tests__/template.marko_1_input_start#0:5_onCount#0:7_$global#0:9", $scope1_id);
			_script($scope1_id, "__tests__/template.marko_1");
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/template.marko_1_input_start#0:5_onCount#0:7/init");
			const $countChange = read($global$1, onCount) || void 0;
			_patch_let_change($scope1_id, "PatchFill:__tests__/template.marko_fill1", count, "PatchWrite:TagVariableChange:count", $countChange, (2 | _mask_group($scope0_reason, 2)) << 1, 0);
			_scope($scope1_id, {
				count,
				_: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id),
				"TagVariableChange:count": $countChange
			}, "__tests__/template.marko", "15:4", {
				count: "16:10",
				"TagVariableChange:count": ["countChange", "16:10"]
			});
			return 0;
		}
	}, $scope0_id, "#text/1", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_html("</main>");
	_scope($scope0_id, {
		input_start: _unfilled_if($scope0_reason, 0) && input.start,
		onCount: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && onCount
	}, "__tests__/template.marko", 0, {
		input_start: ["input.start"],
		onCount: "12:8"
	}) || _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.start, !_server_guard($scope0_reason, 2));
}, 1);
