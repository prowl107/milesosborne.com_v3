import { createClient, groq } from "next-sanity";
import { Project } from "@/types/Project"
import { Profile } from "@/types/Profile";
import { Documentation } from "@/types/Documentation";
// import { revalidatePath } from 'next/cache'
export const dynamic = 'force-dynamic'

/* Sanity CMS config settings */
export const _dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
export const _projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!

// Values you may additionally want to configure globally
export const _apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-07-11'

// revalidatePath('/', 'layout')

export async function getProjects(): Promise<Project[]> {
    const client = createClient(
        {
            projectId: _projectId,
            dataset: _dataset,
            apiVersion: _apiVersion,
            useCdn: false,
            perspective: 'published'
        }
    );

    return client.fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            projectName,
            "slug": slug.current,
            "thumbnail":thumbnail.asset->url,
            description,
            sourceURL,
            documentationURL,
            documentationRef,
            featured,
        }`,
        // {cache: 'no-store'},
        // { next: { revalidate: 5 } }
    )
}

export async function getProfile(): Promise<Profile> {
    const client = createClient(
        {
            projectId: 'n7m4qrmh',
            dataset: 'production',
            apiVersion: "2024-03-10",
            useCdn: false,
            perspective: 'published'
        }
    );

    return client.fetch(
        groq`*[_type == "profile"] | order(_updatedAt desc) [0]{
            _id,
            _createdAt,
            profileTag,
            "picture":picture.asset->url,
            bio
          }`,
        //   {cache: 'no-store'},
        //   { next: { revalidate: 5 } }
    )
}

export async function isProjectFeatured({ Project: project }) {
    return project.featured == true;
}

export async function getLastUpdatedDate() {
    const client = createClient(
        {
            projectId: 'n7m4qrmh',
            dataset: 'production',
            apiVersion: "2024-03-10",
            useCdn: false,
            perspective: 'published'
        }
    );

    return client.fetch(
        groq`* | order(_updatedAt desc)[0]{
            _updatedAt
          }
          `,
        //   {cache: 'no-store'},
        //   { next: { revalidate: 5 } }
    )
}

export async function getProjectDocumentation(slug: string): Promise<Documentation>
{
    const client = createClient(
        {
            projectId: 'n7m4qrmh',
            dataset: 'production',
            apiVersion: "2024-03-10",
            useCdn: false,
            perspective: 'published'
        }
    );

    return client.fetch(

        groq`*[_type == "project" && documentationRef != null && slug.current == $slug]{
            // _id,
            // _createdAt,
            // projectName,
            // "slug": slug.current,
            // documentationRef,
            "docs": *[_type == "documentation" && references(^._id)][0],
        }`,
        { slug },
        // {cache: 'no-store'},
        // { next: { revalidate: 5 } }
    )

    // const doc = client.fetch(
    //     groq`*[_type == "project" && documentationRef != null && slug.current == $slug]{
    //         // _id,
    //         // _createdAt,
    //         // projectName,
    //         // "slug": slug.current,
    //         // documentationRef,
    //         "docs": *[_type == "documentation" && references(^._id)][0],
    //     }`,
    //     { slug }
    // )

    // console.log(doc);

    // return doc; 
}

