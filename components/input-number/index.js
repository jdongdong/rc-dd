import React, { PureComponent } from 'react';
// import { InputNumber } from 'antd';
import InputNumber from 'antd/lib/input-number';
import 'antd/lib/input-number/style/css';
import Label from '../label';

class DDInputNumber extends PureComponent {
  render() {
    const { editable = true, ...inputNumberPorps } = this.props;
    if (!editable) {
      return (
        <Label>
          {inputNumberPorps.value}
        </Label>
      );
    }
    return (
      <InputNumber {...inputNumberPorps} autoComplete="off" />
    );
  }
}

export default DDInputNumber;
