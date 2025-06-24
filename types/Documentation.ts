import { PortableTextBlock } from "sanity"

export type Documentation = {
    _id: string;

    _createdAt: Date;

    title: string;

    project: string;

    banner: string

    content: PortableTextBlock[];

}