'use client'
import { useEffect, useState, useRef, useContext } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { BsFillSendFill } from "react-icons/bs";
import { MdChat } from "react-icons/md";
import { useForm } from 'react-hook-form';
import ApiController from '@/controllers/api.controller';
import ChatBox from "@/components/chats/ChatBox";
import { Chats_data } from "@/context/context";

export default function Chat(params) {

    const {chatActual, setChatActual} = useContext(Chats_data);
    const { chats, setChats } = useContext(Chats_data);
    const { register, handleSubmit, formState: { errors}, reset} = useForm();
    const apiController = new ApiController();
    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(()=>{

        if(!localStorage.getItem('token')){
            window.location.assign('/login');
        }
        if(chats.length<=0){
            apiController.get('/chat/').then(rta => {
                setChats(rta.data.reverse())
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
                setChats(prev=>[rta.data, ...prev])
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
            <Row xs={1} md={2} lg={2} className="w-100 g-0">
                <Col md={4} lg={4} className="bg-secondary bg-opacity-10 d-none d-md-block h-chat text-center">
                    <div className="d-flex justify-content-between text-white">
                        <h5 className="p-3 pb-2 m-0 mx-2">Mis chats</h5>
                        <MdChat className='fs-2 mt-auto mb-1 mx-3'/>
                    </div>
                    <Button className='mb-3 mx-auto' onClick={()=>{setChatActual(null)}}>Nuevo chat</Button>
                    <div className="mx-2 mb-3 bg-white border rounded-5 overflow-hidden d-flex">
                        <div className="w-100">
                            <Form.Control placeholder="Buscar" className="lh-1 border-0 my-auto form-control-chat"/>
                        </div>
                    </div>
                    <div className="overflow-auto text-start"  style={window.innerHeight>600?{maxHeight: '63vh'}:{maxHeight: '55vh'}}>
                        {chats && chats?.map((chat,i)=>{
                            return( 
                                <div key={i} onClick={()=>{elegirChat(chat)}}>
                                    <ChatBox chat={chat}/>
                                </div>
                            )
                        })}
                    </div>
                </Col>
                <Col xs={12} md={8} lg={8} className="bg-white justify-content-between d-flex flex-column h-chat">
                    <div className="border-bottom">
                        <h5 className="p-3 m-0">Título</h5>
                    </div>
                    <div>
                        <div className="d-flex flex-column overflow-auto" id="chat-box" style={window.innerHeight>600?{maxHeight: '68vh'}:{maxHeight: '60vh'}}>
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
                {/* <Col xs={12} md={4} lg={3} className="bg-secondary">
                    <div className="text-white text-center">
                        <h5 className="p-3 m-0">Diccionario</h5>
                        <div className="bg-white mx-2 rounded-3 text-dark">
                            Palabra: Significado
                        </div>
                    </div>
                </Col> */}
            </Row>
        </div>
    )
}