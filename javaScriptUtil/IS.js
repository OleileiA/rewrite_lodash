
// 判断是否是数组
function arr(a) {
    return Array.isArray(a);
}
// 另外的一个写法
function arr1(a) {
    return Object.prototype.toString.call(a) === '[object Array]';
}

// 判断是否是一个普通对象
// [object Object]
function obj(a) {
    return Object.prototype.toString.call(a).indexOf("Object") > -1;
}

// 判断是否是SVG节点
function svg(a) {
    return a instanceof SVGAElement;
}

// 判断是否是一个inputdom节点
function inp(a) {
    return a instanceof HTMLInputElement;
}

// 判断是否是一个dom节点
function dom(a) {
    return  a.nodeType || is.svg(a);
}
// 是否是一个字符串
function str(a) {
    return typeof a === 'string';
}
// 是否是一个函数
function fnc(a) {
    return typeof a === 'function';
}
// 是否是undefined
function und(a) {
    return typeof a === 'undefined';
}
function und1(a) {
    return a === void 0;
}


let is = {
    arr,
    arr1,
    obj,
    svg,
    inp,
    dom,
    str,
    fnc,
    und,
    und1
}
