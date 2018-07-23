import React from 'react';
// import { Form, DatePicker } from 'antd';
import Form from 'antd/lib/form';
import 'antd/lib/form/style/css';
import DatePicker from 'antd/lib/date-picker';
import 'antd/lib/date-picker/style/css';
import { validation } from '../utils';
import Label from '../label';

const FormItem = Form.Item;
const FormDatePicker = ({
  id,
  init,
  rules,
  required,
  validateStatus,
  help,
  showRequired,
  labelCol,
  wrapperCol,
  editable,
  label,
  form,
  ...datePickerPorps
}) => {
  if (editable === false) {
    return (
      <FormItem label={label} labelCol={labelCol} wrapperCol={wrapperCol}>
        <Label>
          {init ? init.format(datePickerPorps.format || 'YYYY-MM-DD') : null}
        </Label>
      </FormItem>
    );
  }
  rules = rules || [];
  if (required) {
    rules.push(validation.validRequired());
  }
  const { getFieldDecorator } = form;
  return (
    <FormItem
      label={label}
      labelCol={labelCol}
      wrapperCol={wrapperCol}
      required={showRequired}
      validateStatus={validateStatus}
      help={help}
    >
      {
        getFieldDecorator(id, {
          initialValue: init,
          rules,
        })(<DatePicker {...datePickerPorps} />)
      }
    </FormItem>
  );
};

export default FormDatePicker;
