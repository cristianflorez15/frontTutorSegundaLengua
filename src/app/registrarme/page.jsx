'use client'

import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
   
  export default function Registrarse() {
    return (
        <div className="items-center flex py-8 bg-white">
            <Card color="transparent" className="mx-auto" shadow={false}>
                <Typography variant="h4" color="blue-gray" className="text-center">
                Registrarme
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                Completa el siguiente formulario para crear tu cuenta
                </Typography>
                <form className="mt-8 mb-2 max-w-screen-lg">
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
                        Correo
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
                    />
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
                    />
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
                />
                <Button color="red" className="mt-6" fullWidth>
                    Registrarme
                </Button>
                <Typography color="gray" className="mt-4 text-center font-normal">
                    Ya tienes una cuenta?{" "}
                    <a href="#" className="font-medium text-red-900">
                    Ingresar
                    </a>
                </Typography>
                </form>
            </Card>
        </div>
    );
  }