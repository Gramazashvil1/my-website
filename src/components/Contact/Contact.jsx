import "./Contact.scss"
import {Form, Input, Button, notification} from "antd";
import {useState} from "react";
import emailjs from '@emailjs/browser';
import ContactInfo from "../Contact_Info/ContactInfo.jsx";
import {useTranslation} from "react-i18next";
import contactImage from '../../assets/images/contact_img.webp';
const {TextArea} = Input;

function Contact() {

    const [form] = Form.useForm();
    const [api, contextHolder] = notification.useNotification();
    const [loading, setLoading] = useState(false);
    const {t} = useTranslation();

    function onSuccess(type) {
        api[type]({message: t('contactOnSuccess'), closeIcon: false, duration: 3});
    }

    function onError(type) {
        api[type]({message: t('contactOnError'), closeIcon: false, duration: 3});
    }

    async function sendEmail(values) {
        setLoading(true);
        try {
            await emailjs.send(
                import.meta.env.VITE_EMAIL_SERVICE_ID,
                import.meta.env.VITE_EMAIL_TEMPLATE_ID,
                values,
                import.meta.env.VITE_EMAIL_PUBLIC_KEY,
            );
            form.resetFields();
            onSuccess('success');
        } catch (error) {
            console.error(error);
            onError('error')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="contact" id="contact">
            <div className="contact_main">
                <div className="container_left">
                    <div className="contact_img_frame">
                        <img src={contactImage} alt="ContactImage" loading="lazy" width="350" height="280"/>
                        <ContactInfo/>
                    </div>
                </div>

                <div className="container_right_main">
                    <h2 className="contact_title">
                        {t('contactTitle')}
                    </h2>
                    <Form onFinish={sendEmail} form={form}>
                        <div className="container_right_inner_left">
                            <Form.Item name='user_name' rules={[
                                {
                                    required: true,
                                    message: `${t('contactRequired')}`,
                                },
                            ]}>
                                <Input placeholder={t('contactFullName')}/>
                            </Form.Item>
                            <Form.Item name='user_email' rules={[
                                {
                                    required: true,
                                    message: `${t('contactRequired')}`,
                                    type: 'email',
                                },
                            ]}>
                                <Input placeholder={t('contactEmail')}/>
                            </Form.Item>
                            <Form.Item name='subject' rules={[
                                {
                                    required: true,
                                    message: `${t('contactRequired')}`,
                                },
                            ]}>
                                <Input placeholder={t('contactSubject')}/>
                            </Form.Item>
                        </div>

                        <div className="container_right_inner_right">
                            <Form.Item name='message' rules={[
                                {
                                    required: true,
                                    message: `${t('contactRequired')}`,
                                },
                            ]}>
                                <TextArea rows={4} placeholder={t('contactMessage')}/>
                            </Form.Item>

                            <Form.Item>
                                {contextHolder}
                                <Button disabled={loading} loading={loading} className="contact_button"
                                        htmlType="submit">
                                    {t('contactSendBtn')}
                                </Button>
                            </Form.Item>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Contact;