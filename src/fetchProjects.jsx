import { createClient } from "contentful";
import { useEffect, useState } from "react";

export const client = createClient({
  space: "srot2on5tty6",
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});

export function useFetchProjects() {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    client
      .getEntries({ content_type: "projects" })
      .then((response) => {
        const projects = response.items.map((item) => {
          const id = item.sys.id;
          const { title, url, image } = item.fields;
          const img = image?.fields.file.url || "";
          return { id, title, url, img };
        });
        setProjects(projects);
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getData();
  }, []);

  return { isLoading, projects };
}
