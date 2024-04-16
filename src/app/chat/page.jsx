'use client'
import { useEffect, useState, useRef } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { BsFillSendFill } from "react-icons/bs";
import { MdChat } from "react-icons/md";
import { useForm } from 'react-hook-form';
import ApiController from '@/controllers/api.controller';

export default function Chat(params) {

    const [chatActual, setChatActual] = useState(null);
    const [ chats, setChats ] = useState([]);
    const { register, handleSubmit, formState: { errors}, reset} = useForm();
    const apiController = new ApiController();
    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(()=>{
        if(chats.length<=0){
            apiController.get('/chat/').then(rta => {
                setChats(rta.data)
            })
        }
        scrollToBottom()
    }, [chatActual])

    let enviarMensaje = async(data) => {
        let mensaje = data.mensaje;
        reset({
            mensaje:''
        })
        if(chatActual == null){
            setChatActual({mensajes: [{parts:[{text: mensaje}], role: 'user'}]})
            await apiController.post({mensajes: [{parts:[{text: mensaje}], role: 'user'}]}, '/chat').then(rta => {
                setChatActual(rta.data);
            })
        }else{
            setChatActual(prevChat => {return {...prevChat, mensajes: [...prevChat.mensajes, {parts:[{text: mensaje}], role: 'user'}]}})
            await apiController.patch({mensajes: [...chatActual.mensajes, {parts:[{text: mensaje}], role: 'user'}], _id:chatActual._id}, '/chat').then(rta => {
                setChatActual(rta.data);
            })
        }
    }

    const elegirChat = (chat) => {
        setChatActual(chat);
        scrollToBottom()
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSubmit(enviarMensaje)()
        }
    }

    return(
        <div className="m-0 p-0 w-100">
            <Row xs={1} md={2} lg={3} className="w-100 g-0">
                <Col lg={3} className="bg-secondary d-none d-lg-block">
                    <div className="d-flex justify-content-between text-white">
                        <h5 className="p-3 pb-2 m-0 mx-2">Mis chats</h5>
                        <MdChat className='fs-2 mt-auto mb-1 mx-3'/>
                    </div>
                    <div className="mx-2 mb-3 bg-white border rounded-5 overflow-hidden d-flex">
                        <div className="w-100">
                            <Form.Control placeholder="Buscar" className="lh-1 border-0 my-auto form-control-chat"/>
                        </div>
                    </div>
                    <div className="overflow-auto h-history-box">
                        {chats?.map((chat,i)=>{
                            return(
                                <div key={i} className="bg-white border" role="button" onClick={()=>{elegirChat(chat)}}>
                                    <p>{new Date(chat.updatedAt).toLocaleString()}</p>
                                    <p>Inglés</p>
                                    <p>{chat.mensajes[chat.mensajes?.length-1]?.role?.replace(/\b\w/g, l => l.toUpperCase())}: {chat.mensajes[chat.mensajes?.length-1]?.parts[0]?.text}</p>
                                </div>
                            )
                        })}
                    </div>
                </Col>
                <Col xs={12} md={8} lg={6} className="bg-white justify-content-between d-flex flex-column h-chat">
                    <div className="border-bottom">
                        <h5 className="p-3 m-0">Título</h5>
                    </div>
                    <div>
                        <div className="d-flex flex-column overflow-auto h-chat-box" id="chat-box">
                            {chatActual?.mensajes?.map((mensaje,i)=>{
                                return(
                                    <div key={i} className={mensaje.role=='user'?"bg-secondary m-3 py-2 px-3 ms-auto rounded-3 message-box":"bg-primary m-3 py-2 px-3 me-auto rounded-3 message-box"}>
                                        {mensaje.parts[0]?.text}
                                    </div>
                                )
                            })}
                            <div ref={messagesEndRef} />
                        </div>
                        <div className="m-4 border border-2 rounded-5 overflow-hidden d-flex">
                            <div className="w-100">
                            <Form.Control as='textarea' rows={1} placeholder="Mensaje" className="pb-0 pt-2 mt-1 lh-1 border-0 my-auto form-control-chat"
                                onKeyDown={handleKeyDown}
                                {...register('mensaje', {required: true})}
                            />
                            </div>
                            <BsFillSendFill className="fs-3 mx-3 my-auto" role="button" onClick={handleSubmit(enviarMensaje)}/>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={4} lg={3} className="bg-secondary">
                    {/* <div className="text-white text-center">
                        <h5 className="p-3 m-0">Progreso</h5>
                        <div className="bg-white mx-2 rounded-3 text-dark">
                            Correcciones: 00
                        </div>
                    </div> */}
                    <div className="text-white text-center">
                        <h5 className="p-3 m-0">Diccionario</h5>
                        <div className="bg-white mx-2 rounded-3 text-dark">
                            Palabra: Significado
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}