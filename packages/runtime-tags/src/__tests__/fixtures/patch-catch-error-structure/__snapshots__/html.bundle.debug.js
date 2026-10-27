// template.marko
const $template = "<main><!><button> </button></main>";
const $walks = "D%b D m";
function boom(error) {
	throw error;
}
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content !__tests__/template.marko_2",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;D ;<p> </p>",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b D ;<main><!><button> </button></main>",
	"__tests__/template.marko_3*shell": "__tests__/template.marko_3*shell;Db%;<b>missing <!></b>",
	"__tests__/template.marko_4*shell": "__tests__/template.marko_4*shell,<i>failed</i>",
	"__tests__/template.marko_5*shell": "__tests__/template.marko_5*shell;D ;<span> </span>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_error = _client_guard($scope0_reason, 0), $scope0_page = _page_render(), $wi__input_error = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_error__closures = new Set();
	let count = 0;
	_html("<main>");
	_try($scope0_id, "#text/0", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<p>${_patch_text($scope1_id, "#text/0", input.error ? boom(input.error) : "ok", void 0, $scope0_reason, 0)}</p>`);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, $cg__input_error ? "__tests__/template.marko_1_input_error#0:5/init" : "__tests__/template.marko_1_input_error#0:5/subscribe");
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_error__closures, _scope($scope1_id, { _: $wi__input_error && _scope_with_id($scope0_id) }, "__tests__/template.marko", "6:4"), $cg__input_error && "__tests__/template.marko_1_input_error#0:5/subscribe");
	}, void 0, (err) => {
		const $scope2_reason = _scope_reason(), $scope2_page = _page_render();
		const $scope2_id = _scope_id();
		_if(() => {
			if (err.status === 404) {
				const $scope3_id = _scope_id();
				_html(`<b>missing ${_patch_text($scope3_id, "#text/0", err.message, 2)}</b>`);
				$scope2_page && _scope($scope3_id, { _: _write_if($scope2_reason, 1) && _scope_with_id($scope2_id) }, "__tests__/template.marko", "12:8");
				return 0;
			} else {
				const $scope4_id = _scope_id();
				_html("<i>failed</i>");
				$scope2_page && _write_if($scope2_reason, 0) && _scope($scope4_id, {}, "__tests__/template.marko", "15:8");
				return 1;
			}
		}, $scope2_id, "#text/0", 1, _write_guard($scope2_reason, 0), void 0, void 0, void 0, ["__tests__/template.marko_3*shell", "__tests__/template.marko_4*shell"]);
		_for_of(err.items, (item) => {
			const $scope5_id = _scope_id();
			_html(`<span>${_patch_text($scope5_id, "#text/0", item)}</span>`);
			$scope2_page && _scope($scope5_id, {}, "__tests__/template.marko", "18:8");
		}, 0, $scope2_id, "#text/1", 1, void 0, void 0, void 0, void 0, "__tests__/template.marko_5*shell");
		_script($scope2_id, "__tests__/template.marko_2");
		$scope2_page && _scope($scope2_id, { err_message: _unfilled_if($scope2_reason, 0) && err?.message }, "__tests__/template.marko", "8:6", { err_message: ["err.message", "8:13"] });
	}, void 0, "__tests__/template.marko_2*content", "__tests__/template.marko_1*content", 1, 1, 1);
	_html(`<button>${_text_resume($scope0_id, "#text/2", count)}</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, {
		count,
		"ClosureScopes:input_error/7": $wi__input_error && _unfilled_if($scope0_reason, 0) && $input_error__closures
	}, "__tests__/template.marko", 0, { count: "4:6" });
}, 1);
