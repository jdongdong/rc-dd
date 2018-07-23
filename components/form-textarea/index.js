import React from 'react';
// import { Form } from 'antd';
import Form from 'antd/lib/form';
import 'antd/lib/form/style/css';
import Textarea from '../textarea';
import { validation } from '../utils';

const FormItem = Form.Item;
const FormTextarea = ({
  id,
  init,
  required,
  showRequired,
  rules,
  url,
  idCard,
  max,
  phone,
  telephone,
  email,
  specialChar,
  labelCol,
  wrapperCol,
  label,
  form: { getFieldDecorator },
  ...inputPorps
}) => {
  rules = rules || [];
  if (required) {
    rules.push(validation.validRequired());
  }
  if (max > 0) {
    rules.push(validation.validMax(max));
  }
  if (specialChar) {
    rules.push(validation.validSpecialChar());
  }
  if (phone) {
    rules.push(validation.validPhone());
  }
  if (idCard) {
    rules.push(validation.validIDCard());
  }
  if (email) {
    rules.push(validation.validEmail());
  }
  if (url) {
    rules.push(validation.validUrl());
  }
  if (telephone) {
    rules.push(validation.validTelephone());
  }
  // getFieldDecorator不能装饰纯函数组件
  return (
    <FormItem
      label={label}
      labelCol={labelCol}
      wrapperCol={wrapperCol}
      required={inputPorps.editable && required && showRequired}
    >
      {
        getFieldDecorator(id, {
          initialValue: init,
          rules,
        })(<Textarea {...inputPorps} />)
      }
    </FormItem>
  );
};

export default FormTextarea;
