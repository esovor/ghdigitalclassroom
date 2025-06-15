import {StaticImageData} from "next/image";


export interface Subject {
    subURL: string;
    subImg: string | StaticImageData;
    subLabel: string;
}