import Layout from "../components/layout";
import FeedbackForm from "../components/feedBack";
import { useState } from "react";
import { Formik, Form, Field, useField } from 'formik';
import * as Yup from 'yup';
import { ChatCircleDots } from "@phosphor-icons/react";

const faleConosco = Yup.object().shape({
    name: Yup.string()
        .min(3, "Muito curto.")
        .required("Esse campo precisa ser preenchido corretamente."),
    email: Yup.string()
        .required('Esse campo precisa ser preenchido corretamente.'),
    message: Yup.string()
        .required('Esse campo precisa ser preenchido corretamente.'),
})

const MyTextArea = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <>
            <label htmlFor={props.id || props.name} className="block mb-2 text-lg font-medium tracking-tight text-blue-dark">{label}</label>
            <textarea className={` text-zinc-700 border border-gray-40 rounded-sm p-2 w-full max-h-[270px] h-[170px] peer`} {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="peer-invalid:visible mt-2 text-red text-sm font-medium">{meta.error}</div>
            ) : null}
        </>
    );
};

export default function contactUs() {
    const [feedBack, setFeedBack] = useState(false)

    return (
        <Layout>
            <article className="bg-white w-[400px] h-full flex flex-col items-center m-auto p-5">
                <div className="w-full flex justify-between items-center mb-2 text-xl font-medium tracking-tight text-blue-dark">
                    Fale Conosco <ChatCircleDots size={32} />
                </div>

                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        message: '',
                    }}
                    validationSchema={faleConosco}
                    onSubmit={(values, { resetForm }) => {
                        console.log(values);
                        setFeedBack(true)
                        resetForm();
                    }}
                >
                    {({ errors, touched }) => (
                        <Form className="flex flex-col w-[350px]">
                            <div className="mb-4">
                                <label htmlFor="name" className="block mb-2 text-lg font-medium tracking-tight text-blue-dark">
                                    Nome
                                </label>
                                <Field
                                    type="text"
                                    name="name"
                                    placeholder="Digite seu nome"
                                    className={` text-zinc-700 border border-gray-40 rounded-sm p-2 w-full h-[40px] peer `}
                                />
                                {touched.name && errors.name &&
                                    <div className="peer-invalid:visible mt-2 text-red text-sm font-medium">
                                        {errors.name}
                                    </div>
                                }
                            </div>

                            <div className="mb-4">
                                <label htmlFor="e-mail" className="block mb-2 text-lg font-medium tracking-tight text-blue-dark">
                                    E-mail
                                </label>
                                <Field
                                    type="email"
                                    name="email"
                                    placeholder="Digite seu e-mail"
                                    className={` text-zinc-700 border border-gray-40 rounded-sm p-2 w-full h-[40px] peer `}
                                />
                                {touched.email && errors.email &&
                                    <div className="peer-invalid:visible mt-2 text-red text-sm font-medium">
                                        {errors.email}
                                    </div>
                                }
                            </div>

                            <div className="mb-4">

                                <MyTextArea
                                    label='Mensagem'
                                    name="message"
                                    rows="6"
                                    placeholder="Digite sua mensagem"
                                />
                            </div>

                            <div>
                                <p className="text-cinza">*Todos os campos são obrigatórios</p>
                            </div>

                            <div className="flex justify-center pt-8">
                                <button
                                    type="submit"
                                    className="bg-red text-white text-md w-full h-[50px] rounded-md"
                                >
                                    Enviar
                                </button>
                            </div>
                        </Form>)}
                </Formik>
            <FeedbackForm
                visible={feedBack}
                hidden={() => setFeedBack(false)}
                error={false}
                message={'Mensagem enviada <br/> com sucesso!'}
                button={'Fechar'}
            />
            </article>
        </Layout>
    )
}