// size: 810 (min) 370 (brotli)
function $setup$1($scope) {
  _._return($scope, $_return($scope));
}
function $_return($scope) {
  return () => (html) => ($scope.a.innerHTML = html);
}
_._resume(`a0`, $_return);
var child_default = _._template(`a`, `<div></div>`, ` b`, $setup$1);
const $dynamicTag = _._dynamic_tag(0),
  $dynamicTag2 = _._dynamic_tag(1),
  $input_content = ($scope, input_content) => {
    ($dynamicTag($scope, input_content), $dynamicTag2($scope, input_content));
  },
  $setHtml3_getter = _._hoist(2, `B4`),
  $inputshowsectionnull_content__dynamicTag = _._dynamic_tag(
    0,
    0,
    () => $inputshowsectionnull_content__setHtml,
  ),
  $inputshowsectionnull_content__setHtml = _._var_resume(`c0`, _._const(2));
_._content_resume(
  `c1`,
  `<!><!><!>`,
  `b1c`,
  ($scope) => $inputshowsectionnull_content__dynamicTag($scope, child_default),
  0,
  `B4`,
);
const $setHtml2_getter = _._hoist(2, `B3`, `B2`),
  $thing_content2__dynamicTag = _._dynamic_tag(
    0,
    0,
    () => $thing_content2__setHtml,
  ),
  $thing_content2__setHtml = _._var_resume(`c2`, _._const(2)),
  $thing_content2 = _._content(
    `c3`,
    `<!><!><!>`,
    `b1c`,
    ($scope) => $thing_content2__dynamicTag($scope, child_default),
    0,
    `B3`,
  );
_._content_resume(
  `c4`,
  ((_w0) => `<!>${_w0}<!>`)(`<!><!><!><!>`),
  ((_w0) => `b/${_w0}&b`)(`b%b%c`),
  ($scope) => {
    ($scope.a, $input_content($scope.a, $thing_content2($scope)));
  },
  0,
  `B2`,
);
const $setHtml_getter = _._hoist_resume(`c5`, 2, `B1`);
(_._var_resume(`c6`, _._const(2)),
  _._script(`c8`, ($scope) => {
    for (let fn of $setHtml_getter($scope)) fn(`Hoist from custom tag`);
    ($setHtml2_getter($scope)()(`Hoist from dynamic tag`),
      $setHtml3_getter($scope)()(`Hoist from dynamic tag`));
  }),
  init());
