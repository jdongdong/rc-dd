export function checkPlateNum(plateNum) {
  if (!(/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/.test(plateNum))) {
    return false;
  }
  return true;
}

const checkIDCard = (card) => {
  // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
  const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  return reg.test(card);
};

const checkNumberAndLetter = (c) => {
  const reg = /^[0-9a-zA-Z]*$/g;
  return reg.test(c);
};

export function checkPhone(phone) {
  if (!(/^1[34578]\d{9}$/.test(phone))) {
    return false;
  }
  return true;
}

/**
 * 固定电话验证
 * 不带区号就是7位或者8位数字的长度，而区号就是3位或者4位数字和一横
 * @export
 * @param {any} telephone
 * @returns
 */
export function checkTelephone(telephone) {
  if (!/^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/.test(telephone)) {
    return false;
  }
  return true;
}

export function checkIP(ip) {
  const ipRegExp = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
  if (ipRegExp.exec(ip)) {
    return true;
  }
  return false;
}

/* eslint-disable */
// 验证是否包含特殊字符（true为包含）
export function hasSpecialChar(s) {
  const containSpecial = RegExp(/[(\ )(\~)(\!)(\@)(\#)(\$)(\%)(\^)(\&)(\*)(\()(\))(\-)(\_)(\+)(\=)(\[)(\])(\{)(\})(\|)(\\)(\;)(\:)(\')(\")(\,)(\.)(\/)(\<)(\>)(\?)(\)]+/)
  return (containSpecial.test(s));
}
/* eslint-enable */

/**
 * validation
 * 非空验证
 * @export
 * @param {any} errMsg
 * @returns
 */
export function validRequired(errMsg) {
  return {
    required: true,
    message: errMsg || '必填项不能为空',
  };
}


/**
 * validation
 * 验证空格
 * @export
 * @param {any} errMsg
 * @returns
 */
export function validWhitespace(errMsg) {
  return {
    whitespace: true,
    message: errMsg || '不能输入空格',
  };
}

/**
 * validation
 * 最大长度验证
 * @export
 * @param {any} max
 * @param {any} errMsg
 * @returns
 */
export function validMax(max, errMsg) {
  return {
    max,
    message: errMsg || `最大长度为${max}`,
  };
}

/**
 * validation
 * 邮箱验证
 * @export
 * @param {any} max
 * @param {any} errMsg
 * @returns
 */
export function validEmail(errMsg) {
  return {
    type: 'email',
    message: errMsg || '邮箱格式错误',
  };
}

/**
 * validation
 * 手机号验证
 * @export
 * @param {any} cb
 * @returns
 */
export function validPhone(cb) {
  return {
    validator(rule, value, callback) {
      if (!value || value === '') {
        callback();
      } else if (checkPhone(value)) {
        callback();
        cb && cb('success');
      } else {
        callback('手机号格式错误');
        cb && cb('error');
      }
    },
  };
}

export function validNumber(cb) {
  return {
    validator(rule, value, callback) {
      if (!value || value === '') {
        callback();
      } else if (/^(0|[1-9]\d*)$/.test(value)) {
        callback();
        cb && cb('success');
      } else {
        callback('此项必须为正整数');
        cb && cb('error');
      }
    },
  };
}

/**
 * validation
 * IP验证
 * @export
 * @param {any} cb
 * @returns
 */
export function validIP(cb) {
  return {
    validator(rule, value, callback) {
      if (!value || value === '') {
        callback();
      } else if (checkIP(value)) {
        callback();
        cb && cb('success');
      } else {
        callback('IP格式错误');
        cb && cb('error');
      }
    },
  };
}

/**
 * validation
 * 密码强度验证
 * @export
 * @param {any} cb
 * @returns
 */
export function validPwd() {
  return {
    validator(rule, value, callback) {
      callback();
    },
  };
}

/**
 * validation
 * 密码确认验证
 * @export
 * @param {any} cb
 * @returns
 */
export function validConfirmPwd(password, cb) {
  return {
    validator(rule, value, callback) {
      if (!value || value === '') {
        callback();
      } else if (password === value) {
        callback();
        cb && cb('success');
      } else {
        callback('两次输入密码不一致');
        cb && cb('error');
      }
    },
  };
}

/**
 * validation
 * 身份证验证
 * @export
 * @param {any} cb
 * @returns
 */
export function validIDCard(cb) {
  return {
    validator(rule, value, callback) {
      if (!value || value === '') {
        callback();
      } else if (checkIDCard(value)) {
        callback();
        cb && cb('success');
      } else {
        callback('身份证格式错误');
        cb && cb('error');
      }
    },
  };
}

/**
 * validation
 * 车牌号验证
 * @export
 * @param {any} cb
 * @returns
 */
export function validPlateNum(cb) {
  return {
    validator(rule, value, callback) {
      if (!value || value === '') {
        callback();
      } else if (checkPlateNum(value)) {
        callback();
        cb && cb('success');
      } else {
        callback('车牌号格式错误');
        cb && cb('error');
      }
    },
  };
}

export function validSpecialChar(cb) {
  return {
    validator(rule, value, callback) {
      if (!value || value === '') {
        callback();
      } else if (!hasSpecialChar(value)) {
        callback();
        cb && cb('success');
      } else {
        callback('不能包含特殊字符或空格');
        cb && cb('error');
      }
    },
  };
}

export function validNumAndLetter(cb) {
  return {
    validator(rule, value, callback) {
      if (!value || value === '') {
        callback();
      } else if (checkNumberAndLetter(value)) {
        callback();
        cb && cb('success');
      } else {
        callback('只能录入数字或字母');
        cb && cb('error');
      }
    },
  };
}

export function validUrl(errMsg) {
  return {
    type: 'url',
    message: errMsg || 'URL格式错误',
  };
}

export function validTelephone(cb) {
  return {
    validator(rule, value, callback) {
      if (!value || value === '') {
        callback();
      } else if (checkTelephone(value)) {
        callback();
        cb && cb('success');
      } else {
        callback('固定电话格式错误');
        cb && cb('error');
      }
    },
  };
}

export function validRange(min, max, errMsg) {
  if (!errMsg) {
    if (min === undefined) {
      errMsg = `值必须小于等于${max}`;
    } else if (max === undefined) {
      errMsg = `值必须大于等于${min}`;
    } else {
      errMsg = `值必须在${min}至${max}之间`;
    }
  }
  return {
    type: 'number',
    min,
    max,
    message: errMsg,
  };
}
