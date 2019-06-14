/**
 * 获取url地址
 * @param name
 */

const getQueryString = function (name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    let r = window.location.search.substr(1).match(reg);
    if (r !== null) return unescape(r[2]);
    return null;
};

/**
 * 获取url地址--NEW ,如果该方法获取不到会重新用上面的方法获取
 * @param _that
 * @param name
 * @returns {*}
 */

 export const localQuery = function (_that, name) {
    let value = '';
    if (!isEmpty(_that) &&
        !isEmpty(_that.props) &&
        !isEmpty(_that.props.location) &&
        !isEmpty(_that.props.location.query)) {
        value = _that.props.location.query[name];
    }
    if (isEmpty(value)) {
        value = getQueryString(name);
    }
    return value;
};
/**
 * 判断是不是空的或者undefined
 * @param obj
 * @returns {boolean}
 */

const isNull = function (obj) {
    return obj === null || typeof obj === 'undefined' || obj === undefined;
};

/**
 * 判断是不是空的字符串
 * @param obj
 * @returns {boolean}
 */

const isEmpty = function (obj) {
    return isNull(obj) || obj === '';
};