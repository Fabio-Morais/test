import * as React from "react";
import { Button, Avatar, Wrap, WrapItem, useDisclosure } from "@chakra-ui/react";
import { DataTable } from "./table/DataTable";
import { PreviewModal } from "./table/PreviewModal";
import { memo, useState } from "react";
import useModalStore from "../useModalStore";
import {Avatarr} from "./table/Avatarr";

// @ts-ignore
export default function Table({ onOpen2 }) {
    const onOpen = useModalStore(state => state.onOpen);

    console.log("table");
    const [image, setImage] = useState("https://bit.ly/dan-abramov");

    // Create Avatar components using Wrap and WrapItem
    const avatars = [
        "https://bit.ly/dan-abramov",
        "https://bit.ly/tioluwani-kolawole",
        "https://bit.ly/kent-c-dodds",
        "https://bit.ly/ryan-florence",
        "https://bit.ly/prosper-baba",
        "https://bit.ly/code-beast",
        "https://bit.ly/sage-adebayo"
    ].map((src, index) => (
            <Avatarr name={`Avatar ${index}`} src={src} />

    ));

    return (
        <>
            <div>table</div>
            <Wrap>{avatars}</Wrap>

            <Button onClick={onOpen2}>Open</Button>
            <Button onClick={onOpen}>Open Modal</Button>

            <DataTable />
            <PreviewModal />
        </>
    );
}

