import { PortableTextBlock } from "sanity"

export type WorkExperience = {
    _id: string;

    _createdAt: Date;
    
    jobTitle: string;
    
    company: string;

    startDate: Date;

    endDate: Date;
        
    description: PortableTextBlock[];
    
    featured: boolean;
}