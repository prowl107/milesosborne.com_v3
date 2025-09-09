import { createClient, groq } from "next-sanity"
import imageUrlBuilder from "@sanity/image-url"
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { Project } from "@/types/Project"
import { Profile } from "@/types/Profile"
import { Documentation } from "@/types/Documentation"
import { WorkExperience }from "@/types/WorkExperience"

export const dynamic = "force-dynamic"

/* Sanity CMS config settings */
export const _dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
export const _projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
export const _apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-07-11"

/* Create a single reusable client */
export const client = createClient({
  projectId: _projectId,
  dataset: _dataset,
  apiVersion: _apiVersion,
  useCdn: true,
  perspective: "published",
})

/* Image URL builder */
const builder = imageUrlBuilder(client)
// Export a function that can be used to get image URLs
export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

/* Queries */
export async function getProjects(): Promise<Project[]> {
  return client.fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      projectName,
      "slug": slug.current,
      thumbnail,        
      description,
      sourceURL,
      documentationURL,
      documentationRef,
      featured,
    }`
  )
}

export async function getProfile(): Promise<Profile> {
  return client.fetch(
    groq`*[_type == "profile"] | order(_updatedAt desc) [0]{
      _id,
      _createdAt,
      profileTag,
      picture,          // return full image object
      bio
    }`
  )
}

export async function getWorkExperience(): Promise<Project[]> {
  return client.fetch(
    groq`*[_type == "workExperience"] | order(endDate desc) {
      _id,
      _createdAt,
      jobTitle,
      company,
      startDate,
      endDate, 
      description,
      featured,
    }`
  )
}

export async function isWorkExperienceFeatured({ Project: project }) {
  return project.featured === true
}

export async function isProjectFeatured({ Project: project }) {
  return project.featured === true
}

export async function getLastUpdatedDate() {
  return client.fetch(
    groq`* | order(_updatedAt desc)[0]{ _updatedAt }`
  )
}

export async function getProjectDocumentation(slug: string): Promise<Documentation> {
  return client.fetch(
    groq`*[_type == "project" && documentationRef != null && slug.current == $slug]{
      "docs": *[_type == "documentation" && references(^._id)][0],
    }`,
    { slug }
  )
}
