import React from 'react'
import {
    Form,
    Select,
    Input,
    Typography,
    Radio,
    Slider,
    Button,
    Upload,
    Rate,
    Checkbox,
    Row,
    Col,
} from 'antd';


const { Option } = Select;


const { Title } = Typography
const formItemLayout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 14,
    },
};


class TaskForm extends React.Component {

    formRef = React.createRef();

    onFinish = values => {

        const { onSubmit } = this.props

        // const newValue = values
        onSubmit(values);
        this.formRef.current.resetFields();
    }


    render() {

        const {status} = this.props


      
        const { listItem } = this.props

        if (listItem !== null) {
            // console.log(listItem)
            this.formRef.current.setFieldsValue({
                // key: listItem.key,
                username: listItem.username,
                country: listItem.country,
                gender: listItem.gender,
                color: listItem.color,
                hobby: listItem.hobby
            })
        }
         

        

        return (
            <Form
                name="form"
                {...formItemLayout}
                ref={this.formRef}
                onFinish={this.onFinish}

                style={
                    {
                        background: 'white',
                        display: 'block',
                        width: '75%',
                        padding: '30px 0'
                    }
                }
            >
                <Title level={2} style={
                    {
                        textAlign: 'center',
                        marginBottom: '30px'
                    }
                }>To-do-app (Designed by Lỗ Tấn)</Title>
                <Form.Item label="Name" name="username">
                    <Input placeholder="Typing here..." />
                </Form.Item>
                <Form.Item
                    name="country"
                    label="Country"
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please select your country!',
                        },
                    ]}
                >
                    <Select placeholder="Please select a country">
                        <Option value="china">China</Option>
                        <Option value="usa">U.S.A</Option>
                        <Option value="vn">Viet Nam</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="color"
                    label="Color"
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please select your color!',
                        },
                    ]}
                >
                    <Select placeholder="Please select a color">
                        <Option value="green">Green</Option>
                        <Option value="blue">Blue</Option>
                        <Option value="lightblue">Lightblue</Option>
                    </Select>
                </Form.Item>

                <Form.Item name="gender" label="Gender">
                    <Radio.Group>
                        <Radio value="male">Male</Radio>
                        <Radio value="female">Female</Radio>

                    </Radio.Group>
                </Form.Item>



                <Form.Item name="hobby" label="Hobby">
                    <Checkbox.Group>
                        <Row>
                            <Col span={8}>
                                <Checkbox
                                    value="soccer"
                                    style={{
                                        lineHeight: '32px',
                                    }}
                                >
                                    Soccer
              </Checkbox>
                            </Col>
                            <Col span={12}>
                                <Checkbox
                                    value="swimming"
                                    style={{
                                        lineHeight: '32px',
                                    }}
                                    disabled
                                >
                                    Swimming
              </Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox
                                    value="dance"
                                    style={{
                                        lineHeight: '32px',
                                    }}
                                >
                                    Dance
              </Checkbox>
                            </Col>


                        </Row>
                    </Checkbox.Group>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        span: 12,
                        offset: 6,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                       {status===0? "Submit" : "Save"}
        </Button>
                </Form.Item>
            </Form>
        )
    }

}

export default TaskForm

