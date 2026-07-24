// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let list = [[{ n: 1 }], []];
	let obj = { kept: "k" };
	const [$skipped, ...rest] = list[0];
	const skipped = void 0 !== $skipped ? $skipped : { n: 0 };
	const { ignored: $ignored, kept } = obj;
	const ignored = void 0 !== $ignored ? $ignored : 1;
	const [$temp] = list[1];
	const { b: $b, c: $c } = void 0 !== $temp ? $temp : {};
	const b = void 0 !== $b ? $b : kept;
	const c = void 0 !== $c ? $c : "c";
	_html(`<div id=out>${_escape(rest.length)}${_el_resume($scope0_id, "#text/0")}:<!>${_escape(String(kept))}${_el_resume($scope0_id, "#text/1")}:<!>${_escape(c)}${_el_resume($scope0_id, "#text/2")}</div><button id=update>u</button>${_el_resume($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
