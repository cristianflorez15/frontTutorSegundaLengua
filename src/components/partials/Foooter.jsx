import {
    Typography
  } from "@material-tailwind/react";

export default function Footer(params) {
    return(
        <footer className="bottom-0 w-full bg-white p-3 py-0 pt-2">
            {/* <hr className="my-3 border-blue-gray-900" /> */}
            <Typography color="blue-gray" className="text-center font-normal">
                &copy; Tutor
            </Typography>
        </footer>
    )
}