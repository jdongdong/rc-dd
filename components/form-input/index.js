import React from 'react';
// import { Form } from 'antd';
import Form from 'antd/lib/form';
import 'antd/lib/form/style/css';
import Input from 'antd/lib/input';
import 'antd/lib/input/style/css';
import Label from '../label';
import { validation } from '../utils';

const FormItem = Form.Item;
const FormInput = ({
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
  numberAndLetter,
  email,
  specialChar,
  ip,
  labelCol,
  wrapperCol,
  label,
  form,
  editable,
  help,
  ...inputPorps
}) => {
  if (editable === false) {
    return (
      <FormItem label={label} labelCol={labelCol} wrapperCol={wrapperCol}>
        <Label>
          {init}
        </Label>
      </FormItem>
    );
  }
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
  if (telephone) {
    rules.push(validation.validTelephone());
  }
  if (idCard) {
    rules.push(validation.validIDCard());
  }
  if (email) {
    rules.push(validation.validEmail());
  }
  if (numberAndLetter) {
    rules.push(validation.validNumAndLetter());
  }
  if (url) {
    rules.push(validation.validUrl());
  }
  if (ip) {
    rules.push(validation.validIP());
  }
  // getFieldDecorator不能装饰纯函数组件
  const { getFieldDecorator } = form;
  return (
    <FormItem
      label={label}
      labelCol={labelCol}
      wrapperCol={wrapperCol}
      help={help}
      required={inputPorps.editable && required && showRequired}
    >
      {
        getFieldDecorator(id, {
          initialValue: init,
          rules,
        })(<Input autoComplete="off" {...inputPorps} />)
      }
    </FormItem>
  );
};

export default FormInput;
