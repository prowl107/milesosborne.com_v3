import { getProjectDocumentation } from "@/sanity-utils";
// import Menu from "@/components/Menu";
import { PortableText } from "@portabletext/react";
// import { Documentation } from "@/types/Documentation";
import imageUrlBuilder from '@sanity/image-url'
// import urlBuilder from '@sanity/image-url'
import { getImageDimensions } from '@sanity/asset-utils'
import { createClient } from "next-sanity";
import Menu from "@/app/page_components/menu";

// Barebones lazy-loaded image component
const SampleImageComponent = ({value}) => {
  const {width, height} = getImageDimensions(value)
  return (
    <img
      src={urlFor(value).width(800).fit('max').url()}
      alt={value.alt || ' '}
      loading="lazy"
      style={{
        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
    />
  )
}


const client = createClient(
  {
      projectId: 'n7m4qrmh',
      dataset: 'production',
      apiVersion: "2024-03-10",
      useCdn: false
  }
);

const builder = imageUrlBuilder(client)



function urlFor(source) {
  return builder.image(source)
}

export default async function Page({params}) {
  // const slug = await params.slug;
  const { slug } = await params
  // console.log("Doc-slug: " + slug);
  const projectDoc = (await getProjectDocumentation(slug))[0]["docs"];
  // console.log(projectDoc);

  return <div>
    <Menu></Menu>
    <div
      id="wrapper"
      style={{ height: 100 + "vh", backgroundColor: "#1b1c1c" }}
    >
      <section id="main" className="wrapper style1 documentation">
        <div className="inner">
          <header className="major">
            <h1>{projectDoc.title}</h1>
          </header>
          {getDocumentBanner({ projectDoc })}
          {<PortableText 
            value={projectDoc.content}
            components={{
              types: {
                image: SampleImageComponent,
              }
            }} />}
        </div>
      </section>
    </div>

  </div>
}

async function getDocumentBanner({ projectDoc }) {
  {
    if (projectDoc.banner != null) {
      return (
        <span className="image main">
          <img src={urlFor(projectDoc.banner).url()}/>
        </span>
      );
    }
  }
}

// async function getImageComponents({ projectDoc })
// {
//   if (projectDoc.banner != null) {
//     return (
//       <span class="image main">
//         <img src={urlFor(projectDoc.banner).url()}/>
//       </span>
//     );
//   }
// }