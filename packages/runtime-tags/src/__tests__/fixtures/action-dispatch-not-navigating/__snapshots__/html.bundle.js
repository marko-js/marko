// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const prevented = _action($scope0_id, "a1");
	const modified = _action($scope0_id, "a2");
	const blank = _action($scope0_id, "a3");
	const download = _action($scope0_id, "a4");
	const fragment = _action($scope0_id, "a5");
	const button = _action($scope0_id, "a6");
	_html(`<form><button>prevented ${_text_resume($scope0_id, "b", prevented.pending, 2)}</button></form>${_el_resume($scope0_id, "a")}<a href=/a>modified ${_text_resume($scope0_id, "d", modified.pending, 2)}</a>${_el_resume($scope0_id, "c")}<a href=/a target=_blank>blank ${_text_resume($scope0_id, "f", blank.pending, 2)}</a>${_el_resume($scope0_id, "e")}<a href=/a download>download ${_text_resume($scope0_id, "h", download.pending, 2)}</a>${_el_resume($scope0_id, "g")}<a href=#top>fragment ${_text_resume($scope0_id, "j", fragment.pending, 2)}</a>${_el_resume($scope0_id, "i")}<button>button ${_text_resume($scope0_id, "l", button.pending, 2)}</button>${_el_resume($scope0_id, "k")}`);
	_script($scope0_id, "a7");
	_script($scope0_id, "a8");
	_script($scope0_id, "a9");
	_script($scope0_id, "a10");
	_script($scope0_id, "a11");
	_script($scope0_id, "a12");
	_scope($scope0_id, {
		m: prevented,
		p: modified,
		s: blank,
		v: download,
		y: fragment,
		a1: button,
		n: _resume(function(ev) {
			ev.preventDefault();
		}, "a0") || void 0,
		q: void 0,
		t: void 0,
		w: void 0,
		z: void 0,
		a2: void 0
	});
}, 1);
