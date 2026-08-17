// template.marko
const $template = "<main><h1> </h1><!><button>Next</button></main>";
const $walks = "E l%b l";
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $n__closures = new Set();
	let n = 0;
	_html$1(`<main><h1>${_patch_text($scope0_id, "#text/0", input.title, $scope0_owned, 0)}${_el_resume($scope0_id, "#text/0")}</h1>`);
	_try$1($scope0_id, "#text/1", _content_resume$1("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _persisted_reason();
		_await($scope1_id, "#text/0", resolveAfter("v" + n, n), (value) => {
			const $scope3_id = _scope_id();
			_html$1(`<em>${_escape(value)}${_el_resume($scope3_id, "#text/0")}</em>`);
			writeScope($scope3_id, {}, "__tests__/template.marko", "8:6");
		}, void 0, 0);
		_subscribe($n__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "6:4"));
		_resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume$1("__tests__/template.marko_2*content", () => {
		const $scope2_reason = _persisted_reason();
		const $scope2_id = _scope_id();
		_html$1("loading");
	}, $scope0_id) }) });
	_html$1(`<button>Next</button>${_el_resume($scope0_id, "#button/2")}</main>`);
	_script$1($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && writeScope($scope0_id, {
		n,
		"ClosureScopes:n": $n__closures
	}, "__tests__/template.marko", 0, { n: "3:6" });
	_resume_branch($scope0_id);
}, 1, 0);
