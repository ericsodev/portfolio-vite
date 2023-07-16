import { ApolloClient } from "@apollo/client/core/ApolloClient.js";
import { InMemoryCache } from "@apollo/client/cache/inmemory/inMemoryCache.js";
import { gql } from "../../src/__generated__";

const indexQuery = gql(`
  query GetIndex { 
      intro {
          data {
              attributes {
                  tagline
              }
          }
        }
      about {
        data {
          attributes {
            description
          }
        }
      }
      skills(filters: {type: {ne: "unlisted"}}, pagination: {limit: -1}) {
          data {
              attributes {
                  name
                  icon_name
                  type
              }
          }
      }  
      experiences(sort: ["start", "end"]) {
        data {
          attributes {
            company
            start
            end 
            role
            description
          }
        }
      }
      contact {
        data {
          attributes {
            github
            linkedin
            website
            personal_email
            business_email
          }
        
        }
      }
      projects(sort: ["priority"], pagination: {limit: -1}) {
        data {
          attributes {
            name
            github
            website
            long_desc
            description
            priority
            skills {
              data {
                attributes {
                  name
                  type
                  icon_name
                }
              }
            }
            
          }
        }
      }
  }`);

async function getStrapiData() {
  const client = new ApolloClient({
    uri: "https://strapi-production-e27f.up.railway.app/graphql",
    cache: new InMemoryCache(),
  });
  const data = await client.query({ query: indexQuery });
  return {
    intro: data.data.intro?.data?.attributes,
    about: data.data.about?.data?.attributes,
    skills: data.data.skills?.data.map((skill) => skill.attributes),
    experiences: data.data.experiences?.data.map((exp) => exp.attributes),
    contact: data.data.contact?.data?.attributes,
    project: data.data.projects?.data.map((p) => {
      return {
        ...p.attributes,
        skills: p.attributes?.skills?.data.map((skill) => skill.attributes),
      };
    }),
  };
}

async function prerender() {
  const data = await getStrapiData();
  return {
    url: "/",
    pageContext: {
      pageProps: {
        ...data,
      },
    },
  };
}

async function onBeforeRender() {
  const data = await getStrapiData();
  return {
    pageContext: {
      pageProps: {
        ...data,
      },
    },
  };
}

type Props = Pick<
  Awaited<ReturnType<typeof prerender>>,
  "pageContext"
>["pageContext"]["pageProps"];
export { prerender, onBeforeRender, Props };
