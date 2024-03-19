'use client'
import { useRouter } from 'next/navigation';
import { useForm } from "react-hook-form";
import { Card, Input, Checkbox, Button, Typography, } from "@material-tailwind/react";
   
export default function Registrarse() {
    const router = useRouter();
    const { register, handleSubmit, getValues, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        router.push("/login")
    }
    
    return (
        <div className="items-center flex py-8 bg-white">
            <Card color="transparent" className="mx-auto" shadow={false}>
                <Typography variant="h4" color="blue-gray" className="text-center">
                Registrarme
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                Completa el siguiente formulario para crear tu cuenta
                </Typography>
                <form className="mt-8 mb-2 max-w-screen-lg" onSubmit={handleSubmit(onSubmit)}>
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
                    {...register("nombre", { required: true })}
                    />
                    {errors.nombre&& (
                        <p className="text-red-500">Requerido</p>
                    )}
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
                    id="password"
                    size="lg"
                    placeholder="********"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                        className: "before:content-none after:content-none",
                    }}
                    {...register("password", { required: true })} 
                    />
                    {errors.password&& (
                        <p className="text-red-500">Requerido</p>
                    )}
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Confirmar contraseña
                    </Typography>
                    <Input
                    type="password"
                    size="lg"
                    placeholder="********"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                        className: "before:content-none after:content-none",
                    }}
                    {...register("confirmpassword", { required: true, validate: (match) => {
                        const password = getValues("password")
                        return match === password || "Las contraseñas no coinciden"
                        }}
                    )} 
                    />
                    {errors.confirmpassword?.type === 'required' && (
                        <p className="text-red-500">Requerido</p>
                    )}
                    {(errors.confirmpassword?.message) && <p className="text-red-500">Las contraseñas no coinciden</p>}
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Fecha de nacimiento
                    </Typography>
                    <Input
                    type="date"
                    size="lg"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                        className: "before:content-none after:content-none",
                    }}
                    {...register("fecha", { required: true })}
                    />
                    {errors.fecha&& (
                        <p className="text-red-500">Requerido</p>
                    )}
                </div>
                <Checkbox
                    color="red"
                    label={
                    <Typography
                        variant="small"
                        color="gray"
                        className="flex items-center font-normal"
                    >
                        Aceptar
                        <a
                        href="#"
                        className="font-medium transition-colors hover:text-gray-900"
                        >
                        &nbsp;Términos y condiciones
                        </a>
                    </Typography>
                    }
                    containerProps={{ className: "-ml-2.5" }}
                {...register("tyt", { required: true })}
                />
                {errors.tyt&& (
                    <p className="text-red-500">Debes aceptar los términos y condiciones</p>
                )}
                <Button color="red" type='submit' className="mt-6" fullWidth>
                    Registrarme
                </Button>
                <Typography color="gray" className="mt-4 text-center font-normal">
                    Ya tienes una cuenta?{" "}
                    <a href="/login" className="font-medium text-red-900">
                    Ingresar
                    </a>
                </Typography>
                </form>
            </Card>
        </div>
    );
}