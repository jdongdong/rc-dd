import React from 'react';
// import { Form, Checkbox } from 'antd';
import Form from 'antd/lib/form';
import 'antd/lib/form/style/css';
import Checkbox from 'antd/lib/checkbox';
import 'antd/lib/checkbox/style/css';
import Label from '../label';
import { validation } from '../utils';

const FormItem = Form.Item;
const FormCheckBox = ({
  id,
  init,
  required,
  showRequired,
  onChange,
  labelCol,
  wrapperCol,
  editable,
  label,
  form,
  ...checkBoxPorps
}) => {
  if (editable === false) {
    return (
      <FormItem label={label} labelCol={labelCol} wrapperCol={wrapperCol}>
        <Label>
          {init ? '是' : '否'}
        </Label>
      </FormItem>
    );
  }
  const rules = [];
  if (required) {
    rules.push(validation.validRequired());
  }
  const { getFieldDecorator } = form;
  return (
    <FormItem label={label} labelCol={labelCol} wrapperCol={wrapperCol} required={showRequired}>
      {
        getFieldDecorator(id, {
          initialValue: init,
          valuePropName: 'checked',
          rules,
          onChange,
        })(<Checkbox {...checkBoxPorps} />)
      }
    </FormItem>
  );
};

export default FormCheckBox;
