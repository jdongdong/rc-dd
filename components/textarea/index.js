import React, { PureComponent } from 'react';
// import { Input } from 'antd';
import Input from 'antd/lib/input';
import 'antd/lib/input/style/css';
import Label from '../label';

const { TextArea } = Input;
class DDTextarea extends PureComponent {
  render() {
    const { editable = true, autosize = true, ...inputPorps } = this.props;
    if (!editable) {
      return (
        <Label>
          {inputPorps.value}
        </Label>
      );
    }
    return (
      <TextArea autosize={autosize} {...inputPorps} autoComplete="off" />
    );
  }
}

export default DDTextarea;
