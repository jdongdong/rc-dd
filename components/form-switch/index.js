import React from 'react';
// import { Form, Switch } from 'antd';
import Form from 'antd/lib/form';
import 'antd/lib/form/style/css';
import Switch from 'antd/lib/switch';
import 'antd/lib/switch/style/css';
import Label from '../label';
import { validation } from '../utils';

const FormItem = Form.Item;
const FormSwitch = ({
  id,
  init,
  required,
  showRequired,
  labelCol,
  wrapperCol,
  editable,
  label,
  form,
  ...switchPorps
}) => {
  if (editable === false) {
    return (
      <FormItem label={label} labelCol={labelCol} wrapperCol={wrapperCol}>
        <Label>
          {init ? switchPorps.checkedChildren : switchPorps.unCheckedChildren}
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
        })(<Switch {...switchPorps} />)
      }
    </FormItem>
  );
};

export default FormSwitch;
