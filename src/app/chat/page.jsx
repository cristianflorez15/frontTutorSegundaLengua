'use client'
import { Textarea, Button, IconButton } from "@material-tailwind/react";
import { BsFillSendFill } from "react-icons/bs";

export default function Chat(params) {
    return(
        <div className="md:flex">
            <div className="bg-white w-full md:w-2/3 p-8">
                <div className="border-solid border-2 border-blue-gray-100 rounded-lg w-full">
                <div className="bg-blue-gray-500 flex h-fit w-4/6 mr-2 ml-auto my-2 p-2 border-solid border-2 rounded-lg">
                        <p className="text-white">
                            Mensaje Usuario
                        </p>
                    </div>
                    <div className="bg-red-500 flex h-fit w-4/6 ml-2 mr-auto my-2 p-2 border-solid border-2 rounded-lg">
                        <p className="text-white">
                            Mensaje del TutorMensaje del TutorMensaje del TutorMensaje del Tutor
                        </p>
                    </div>
                    <div className="bg-blue-gray-500 flex h-fit w-4/6 mr-2 ml-auto my-2 p-2 border-solid border-2 rounded-lg">
                        <p className="text-white">
                            Mensaje Usuario Mensaje UsuarioMensaje UsuarioMensaje Usuario
                        </p>
                    </div>
                    <div className="bg-red-500 flex h-fit w-4/6 ml-2 mr-auto my-2 p-2 border-solid border-2 rounded-lg">
                        <p className="text-white">
                            Mensaje del Tutor
                        </p>
                    </div>
                </div>
                <div className="bg-white my-4 w-full flex border-solid border-2 border-blue-gray-100 rounded-lg">
                    <Textarea variant="standard" color="gray" className="py-4 mx-8 border-none"/>
                    <Button color="red" className="my-auto mx-4">
                        <BsFillSendFill className="text-3xl my-auto"/>
                    </Button>
                </div>
            </div>
            <div className="w-full md:w-1/3 h-full p-8 h-4/5 bg-white">
                <div className="flex">
                    <div className="w-full text-center w-1/2">
                        <p className="text-red-500 font-semibold text-lg">Idioma</p>
                        <p className="text-lg">Inglés</p>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-full text-center w-1/2">
                        <p className="text-red-500 font-semibold text-lg">Tema</p>
                        <p className="text-lg">Tema de conversación</p>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-full text-center w-1/2">
                        <p className="text-red-500 font-semibold text-lg">Fecha de inicio</p>
                        <p className="text-lg">jueves 23 del 2020</p>
                    </div>
                </div>
                <div className="text-center">
                    <Button color="blue-gray" className="my-auto mx-4">
                        Nuevo chat
                    </Button>
                </div>
            </div>
        </div>
    )
}