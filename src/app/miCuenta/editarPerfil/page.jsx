'use client'
import { useRouter } from 'next/navigation';
import { useForm } from "react-hook-form";
import { Card, Input, Button, Typography, } from "@material-tailwind/react";
   
export default function EditarPerfil() {
    const router = useRouter();
    const { register, handleSubmit,  formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        router.push("/miCuenta/miHistorial")
    }
    
    return (
        <div className="items-center flex py-8 bg-white">
            <Card color="transparent" className="mx-auto w-50" shadow={false}>
                <Typography variant="h4" color="blue-gray" className="text-center">
                Editar perfil
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-1 flex flex-col gap-6">
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Nombre
                    </Typography>
                    <Input
                    size="lg"
                    placeholder="name@mail.com"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                        className: "before:content-none after:content-none",
                    }}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Contraseña
                    </Typography>
                    <Input
                    type="password"
                    size="lg"
                    placeholder="********"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                        className: "before:content-none after:content-none",
                    }}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Nueva contraseña
                    </Typography>
                    <Input
                    type="password"
                    size="lg"
                    placeholder="********"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                        className: "before:content-none after:content-none",
                    }}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Confirmar nueva contraseña
                    </Typography>
                    <Input
                    type="password"
                    size="lg"
                    placeholder="********"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                        className: "before:content-none after:content-none",
                    }}
                    />
                </div>
                <Button color="red" className="mt-6" fullWidth>
                    Guardar cambios
                </Button>
                </form>
            </Card>
        </div>
    );
}