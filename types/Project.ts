import { PortableTextBlock } from "sanity"

export type Project = {
    _id: string;

    _createdAt: Date;
    
    projectName: string;
    
    slug: string;
    
    thumbnail: string;
    
    description: PortableTextBlock[];
    
    sourceURL: string;
    
    documentationURL: string;
    
    featured: boolean;
}