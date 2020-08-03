import { is } from './is';

// 一维化数组
function flattenArray(arr) {
    return arr.reduce((a, b) => {
        return a.concat(is.arr(b) ? flattenArray(b) : b);
    }, []);
}

// 数组去重
function dupRemove(arr) {
    return arr.reduce((a, b) => {
        if (a.indexOf(b) < 0) a.push(b);
        return a;
    }, []);
}
