import React from 'react';
// import { Form } from 'antd';
import Form from 'antd/lib/form';
import 'antd/lib/form/style/css';
import InputNumber from 'antd/lib/input-number';
import 'antd/lib/input-number/style/css';
import Label from '../label';
import { validation } from '../utils';

const FormItem = Form.Item;
const FormInputNumber = ({
  id,
  init,
  required,
  showRequired,
  maxLength,
  specialChar,
  labelCol,
  wrapperCol,
  label,
  editable,
  form,
  help,
  minValue,
  maxValue,
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
  const rules = [];
  if (required) {
    rules.push(validation.validRequired());
  }
  if (maxLength > 0) {
    rules.push(validation.validMax(maxLength));
  }
  if (specialChar) {
    rules.push(validation.validSpecialChar());
  }
  if (minValue !== undefined && maxValue === undefined) {
    rules.push(validation.validRange(minValue));
  }
  if (maxValue !== undefined && minValue === undefined) {
    rules.push(validation.validRange(undefined, maxValue));
  }
  if (maxValue !== undefined && minValue !== undefined) {
    rules.push(validation.validRange(minValue, maxValue));
  }
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
        })(<InputNumber {...inputPorps} />)
      }
    </FormItem>
  );
};

export default FormInputNumber;
