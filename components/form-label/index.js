import React from 'react';
// import { Form } from 'antd';
import Form from 'antd/lib/form';
import 'antd/lib/form/style/css';
import DDLabel from '../label';

const FormItem = Form.Item;
const FormLabel = ({ init, labelCol, wrapperCol, label, ...labelPorps }) => {
  return (
    <FormItem label={label} labelCol={labelCol} wrapperCol={wrapperCol}>
      <DDLabel {...labelPorps}>
        {init}
      </DDLabel>
    </FormItem>
  );
};

export default FormLabel;
