import React, { PureComponent } from 'react';
// import { Input } from 'antd';
import Input from 'antd/lib/input';
import 'antd/lib/input/style/css';
import Label from '../label';

class DDInput extends PureComponent {
  render() {
    const { editable = true, ...inputPorps } = this.props;
    if (!editable) {
      return (
        <Label>
          {inputPorps.value}
        </Label>
      );
    }
    return (
      <Input {...inputPorps} autoComplete="off" />
    );
  }
}

export default DDInput;
