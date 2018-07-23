import React from 'react';
// import { Form, Select } from 'antd';
import Form from 'antd/lib/form';
import 'antd/lib/form/style/css';
import Select from 'antd/lib/select';
import 'antd/lib/select/style/css';
import find from 'lodash/find';
import { validation } from '../utils';
import Label from '../label';

const FormItem = Form.Item;
const FormSelect = ({
  id,
  init,
  options,
  optionValue,
  onChange,
  optionLabel,
  showRequired,
  required,
  editable,
  labelCol,
  wrapperCol,
  label,
  extra,
  form,
  help,
  ...selectPorps
}) => {
  const newOptions = options || [];
  const getLabel = (option) => {
    if (typeof optionLabel === 'function') {
      return optionLabel(option);
    }
    return option[optionLabel || 'label'];
  };

  if (editable === false) {
    // let obj = find(options, o => o[optionValue || 'value'] === init)
    let obj = null;
    if (selectPorps.labelInValue) {
      obj = find(newOptions, o => o[optionValue || 'value'] === init.key);
    } else {
      obj = find(newOptions, o => o[optionValue || 'value'] === init);
    }
    return (
      <FormItem
        label={label}
        labelCol={labelCol}
        wrapperCol={wrapperCol}
        help={help}
        required={required && showRequired}
      >
        <Label>
          {obj ? getLabel(obj) : init}
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
    <FormItem
      label={label}
      labelCol={labelCol}
      wrapperCol={wrapperCol}
      required={required && showRequired}
      extra={extra}
    >
      {
        getFieldDecorator(id, {
          initialValue: init,
          rules,
          onChange,
        })(
          <Select {...selectPorps}>
            {newOptions.map(option => (<Select.Option key={option[optionValue || 'value'].toString()} value={option[optionValue || 'value'].toString()}>{getLabel(option)}</Select.Option>))}
          </Select>
          )
      }
    </FormItem>
  );
};

export default FormSelect;
