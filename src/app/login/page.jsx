'use client'
import { useRouter } from 'next/navigation';
import { useForm } from "react-hook-form";
import { Card, Input, Button, Typography, } from "@material-tailwind/react";
   
export default function Login() {
    const router = useRouter();
    const { register, handleSubmit,  formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        router.push("/miCuenta/miHistorial")
    }

    return (
        <div className="items-center flex bg-white py-8">
            <Card color="transparent" className="mx-auto w-50" shadow={false}>
                <Typography variant="h4" color="blue-gray" className="text-center">
                Ingresar
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-1 flex flex-col gap-6">
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Correo
                    </Typography>
                    <Input
                        size="lg"
                        placeholder="name@mail.com"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        {...register("correo", { required: true, pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          } })}
                    />
                    {errors.correo && (
                        <p className="text-red-500">Debe ingresar un correo válido</p>
                    )}
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
                        {...register("password", { required: true })}
                        
                    />
                    {errors.password&& (
                        <p className="text-red-500">Bebe ingresar una contraseña</p>
                    )}
                </div>
                
                <Button color="red" type='submit' className="mt-16" fullWidth >
                    Ingresar
                </Button>
                <Typography color="gray" className="mt-4 text-center font-normal">
                    <a href="#" className="font-medium text-red-900">
                        Olvidé mi contraseña
                    </a>
                </Typography>
                </form>
            </Card>
        </div>
    );
}