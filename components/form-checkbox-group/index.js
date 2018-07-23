import React from 'react';
import { Form, Checkbox } from 'antd';
import find from 'lodash/find';
import { validation } from '../utils';
import Label from '../label';

const FormItem = Form.Item;
const { Group } = Checkbox;
const FormCheckboxGroup = ({
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
  form,
}) => {
  const newOptions = options || [];
  const rules = [];
  if (required) {
    rules.push(validation.validRequired());
  }

  const getLabel = (option) => {
    if (typeof optionLabel === 'function') {
      return optionLabel(option);
    }
    return option[optionLabel || 'label'];
  };

  if (editable === false) {
    // let obj = find(options, o => o[optionValue || 'value'] === init)
    const objs = [];
    for (let i = 0; i < init.length; i++) {
      const obj = find(newOptions, o => o[optionValue || 'value'] === init[i]);
      if (obj) {
        objs.push(getLabel(obj));
      }
    }
    return (
      <FormItem
        label={label}
        labelCol={labelCol}
        wrapperCol={wrapperCol}
        required={required && showRequired}
      >
        <Label>
          {objs.join(',') || init}
        </Label>
      </FormItem>
    );
  }
  const groupOptions = [];
  for (let i = 0; i < newOptions.length; i++) {
    groupOptions.push({
      value: newOptions[i][optionValue || 'value'],
      label: getLabel(newOptions[i]),
    });
  }
  const { getFieldDecorator } = form;
  return (
    <FormItem
      label={label}
      labelCol={labelCol}
      wrapperCol={wrapperCol}
      required={required && showRequired}
    >
      {
        getFieldDecorator(id, {
          initialValue: init,
          rules,
          onChange,
        })(<Group options={groupOptions} />)
      }
    </FormItem>
  );
};

export default FormCheckboxGroup;
