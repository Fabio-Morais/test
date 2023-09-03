import * as React from "react"
import {Avatar} from "@chakra-ui/react";



// @ts-ignore
export const Avatarr = ({src, name}) => {
    console.log("avatar")
    return (
        <>
        <Avatar src={src} name={name}/>
    </>
    )
}
