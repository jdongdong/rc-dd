import React from 'react';
// import { Form, Radio } from 'antd';
import Form from 'antd/lib/form';
import 'antd/lib/form/style/css';
import Radio from 'antd/lib/radio';
import 'antd/lib/radio/style/css';
import find from 'lodash/find';
import { validation } from '../utils';
import Label from '../label';

const FormItem = Form.Item;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const FormRadioButton = ({
  id,
  init,
  options,
  showRequired,
  required,
  editable,
  labelCol,
  wrapperCol,
  label,
  onChange,
  form,
  ...radioPorps
}) => {
  if (editable === false) {
    const obj = find(options, o => o.value === init);
    return (
      <FormItem
        label={label}
        labelCol={labelCol}
        wrapperCol={wrapperCol}
        required={required && showRequired}
      >
        <Label>
          {obj ? obj.label : init}
        </Label>
      </FormItem>
    );
  }
  options = options || [];
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
    >
      {
        getFieldDecorator(id, {
          initialValue: init,
          rules,
          onChange,
        })(
          <RadioGroup {...radioPorps}>
            {
              options.map((option, index) =>
                (
                  <RadioButton
                    key={index}
                    value={option.value}
                  >
                    {option.label}
                  </RadioButton>
                ))
            }
          </RadioGroup>
        )
      }
    </FormItem>
  );
};

export default FormRadioButton;
