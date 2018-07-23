import React from 'react';
// import { Form, Switch } from 'antd';
import Form from 'antd/lib/form';
import 'antd/lib/form/style/css';
import Slider from 'antd/lib/slider';
import 'antd/lib/slider/style/css';
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
  ...sliderPorps
}) => {
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
          rules,
        })(<Slider {...sliderPorps} disabled={editable === false} />)
      }
    </FormItem>
  );
};

export default FormSwitch;
