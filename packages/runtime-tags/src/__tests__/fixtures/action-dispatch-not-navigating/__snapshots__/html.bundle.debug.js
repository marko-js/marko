// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const prevented = _action($scope0_id, "__tests__/template.marko_0_prevented#12/action");
	const modified = _action($scope0_id, "__tests__/template.marko_0_modified#15/action");
	const blank = _action($scope0_id, "__tests__/template.marko_0_blank#18/action");
	const download = _action($scope0_id, "__tests__/template.marko_0_download#21/action");
	const fragment = _action($scope0_id, "__tests__/template.marko_0_fragment#24/action");
	const button = _action($scope0_id, "__tests__/template.marko_0_button#27/action");
	_html(`<form><button>prevented ${_text_resume($scope0_id, "#text/1", prevented.pending, 2)}</button></form>${_el_resume($scope0_id, "#form/0")}<a href=/a>modified ${_text_resume($scope0_id, "#text/3", modified.pending, 2)}</a>${_el_resume($scope0_id, "#a/2")}<a href=/a target=_blank>blank ${_text_resume($scope0_id, "#text/5", blank.pending, 2)}</a>${_el_resume($scope0_id, "#a/4")}<a href=/a download>download ${_text_resume($scope0_id, "#text/7", download.pending, 2)}</a>${_el_resume($scope0_id, "#a/6")}<a href=#top>fragment ${_text_resume($scope0_id, "#text/9", fragment.pending, 2)}</a>${_el_resume($scope0_id, "#a/8")}<button>button ${_text_resume($scope0_id, "#text/11", button.pending, 2)}</button>${_el_resume($scope0_id, "#button/10")}`);
	_script($scope0_id, "__tests__/template.marko_0_button#27");
	_script($scope0_id, "__tests__/template.marko_0_fragment#24");
	_script($scope0_id, "__tests__/template.marko_0_download#21");
	_script($scope0_id, "__tests__/template.marko_0_blank#18");
	_script($scope0_id, "__tests__/template.marko_0_modified#15");
	_script($scope0_id, "__tests__/template.marko_0_prevented#12");
	_scope($scope0_id, {
		prevented,
		modified,
		blank,
		download,
		fragment,
		button,
		"TagVariableChange:prevented": _resume(function(ev) {
			ev.preventDefault();
		}, "__tests__/template.marko_0/prevented") || void 0,
		"TagVariableChange:modified": void 0 || void 0,
		"TagVariableChange:blank": void 0 || void 0,
		"TagVariableChange:download": void 0 || void 0,
		"TagVariableChange:fragment": void 0 || void 0,
		"TagVariableChange:button": void 0 || void 0
	}, "__tests__/template.marko", 0, {
		prevented: "1:9",
		modified: "2:9",
		blank: "3:9",
		download: "4:9",
		fragment: "5:9",
		button: "6:9",
		"TagVariableChange:prevented": ["preventedFn", "1:9"],
		"TagVariableChange:modified": ["modifiedFn", "2:9"],
		"TagVariableChange:blank": ["blankFn", "3:9"],
		"TagVariableChange:download": ["downloadFn", "4:9"],
		"TagVariableChange:fragment": ["fragmentFn", "5:9"],
		"TagVariableChange:button": ["buttonFn", "6:9"]
	});
}, 1);
