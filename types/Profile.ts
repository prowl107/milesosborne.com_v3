import { PortableTextBlock } from "sanity"

export type Profile = {
    _id: string;

    _createdAt: Date;

    profileTag: string;

    picture: string;

    bio: PortableTextBlock[];
}