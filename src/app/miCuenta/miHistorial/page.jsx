'use client'
import { Button } from "@material-tailwind/react";
import { useRouter } from 'next/navigation';

export default function MiHistorial(params) {
    const router = useRouter();

    return(
        <div>
            <div className="text-center">
                <Button color="red" className="my-auto mx-4" onClick={()=>router.push("/chat")} >
                    Nuevo chat
                </Button>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 m-4">
                <div className="rounded-xl bg-white text-gray-700 shadow-md p-8">
                    <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                    Inglés
                    </h6>
                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Tema de conversación que puede ser medio largo
                    </h4>
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
                    <a href="#" className="inline-block"><button
                        className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                        type="button">
                        Continuar conversación<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        strokeWidth="2" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                        </svg></button>
                    </a>
                </div>  
                <div className="rounded-xl bg-white text-gray-700 shadow-md p-8 h-fit">
                    <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                    Inglés
                    </h6>
                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Tema de conversación
                    </h4>
                    <div className="bg-blue-gray-500 flex h-fit w-4/6 mr-2 ml-auto my-2 p-2 border-solid border-2 rounded-lg">
                        <p className="text-white">
                            Mensaje Usuario
                        </p>
                    </div>
                    <div className="bg-red-500 flex h-fit w-4/6 ml-2 mr-auto my-2 p-2 border-solid border-2 rounded-lg">
                        <p className="text-white">
                            Mensaje del Tutor
                        </p>
                    </div>
                    <div className="bg-blue-gray-500 flex h-fit w-4/6 mr-2 ml-auto my-2 p-2 border-solid border-2 rounded-lg">
                        <p className="text-white">
                            Mensaje Usuario
                        </p>
                    </div>
                    <div className="bg-red-500 flex h-fit w-4/6 ml-2 mr-auto my-2 p-2 border-solid border-2 rounded-lg">
                        <p className="text-white">
                            Mensaje del Tutor
                        </p>
                    </div>
                    <a href="#" className="inline-block"><button
                        className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                        type="button">
                        Continuar conversación<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        strokeWidth="2" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                        </svg></button>
                    </a>
                </div>  
                <div className="rounded-xl bg-white text-gray-700 shadow-md p-8">
                    <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                    Inglés
                    </h6>
                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Tema de conversación que puede ser medio largo
                    </h4>
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
                    <a href="#" className="inline-block"><button
                        className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                        type="button">
                        Continuar conversación<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        strokeWidth="2" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                        </svg></button>
                    </a>
                </div>  
                <div className="rounded-xl bg-white text-gray-700 shadow-md p-8 h-fit">
                    <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                    Inglés
                    </h6>
                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Tema de conversación
                    </h4>
                    <div className="bg-blue-gray-500 flex h-fit w-4/6 mr-2 ml-auto my-2 p-2 border-solid border-2 rounded-lg">
                        <p className="text-white">
                            Mensaje Usuario
                        </p>
                    </div>
                    <div className="bg-red-500 flex h-fit w-4/6 ml-2 mr-auto my-2 p-2 border-solid border-2 rounded-lg">
                        <p className="text-white">
                            Mensaje del Tutor
                        </p>
                    </div>
                    <div className="bg-blue-gray-500 flex h-fit w-4/6 mr-2 ml-auto my-2 p-2 border-solid border-2 rounded-lg">
                        <p className="text-white">
                            Mensaje Usuario
                        </p>
                    </div>
                    <div className="bg-red-500 flex h-fit w-4/6 ml-2 mr-auto my-2 p-2 border-solid border-2 rounded-lg">
                        <p className="text-white">
                            Mensaje del Tutor
                        </p>
                    </div>
                    <a href="#" className="inline-block"><button
                        className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                        type="button">
                        Continuar conversación<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        strokeWidth="2" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                        </svg></button>
                    </a>
                </div>
                <div className="rounded-xl bg-white text-gray-700 shadow-md p-8">
                    <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                    Inglés
                    </h6>
                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Tema de conversación que puede ser medio largo
                    </h4>
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
                    <a href="#" className="inline-block"><button
                        className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                        type="button">
                        Continuar conversación<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        strokeWidth="2" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                        </svg></button>
                    </a>
                </div>  
                <div className="rounded-xl bg-white text-gray-700 shadow-md p-8 h-fit">
                    <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                    Inglés
                    </h6>
                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Tema de conversación
                    </h4>
                    <div className="bg-blue-gray-500 flex h-fit w-4/6 mr-2 ml-auto my-2 p-2 border-solid border-2 rounded-lg">
                        <p className="text-white">
                            Mensaje Usuario
                        </p>
                    </div>
                    <div className="bg-red-500 flex h-fit w-4/6 ml-2 mr-auto my-2 p-2 border-solid border-2 rounded-lg">
                        <p className="text-white">
                            Mensaje del Tutor
                        </p>
                    </div>
                    <div className="bg-blue-gray-500 flex h-fit w-4/6 mr-2 ml-auto my-2 p-2 border-solid border-2 rounded-lg">
                        <p className="text-white">
                            Mensaje Usuario
                        </p>
                    </div>
                    <div className="bg-red-500 flex h-fit w-4/6 ml-2 mr-auto my-2 p-2 border-solid border-2 rounded-lg">
                        <p className="text-white">
                            Mensaje del Tutor
                        </p>
                    </div>
                    <a href="#" className="inline-block"><button
                        className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                        type="button">
                        Continuar conversación<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        strokeWidth="2" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                        </svg></button>
                    </a>
                </div>
            </div>
        </div>
        
    )
}