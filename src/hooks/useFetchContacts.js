import { useQuery } from "react-query";
import axios from "axios";
import { BaseUrl, accessToken } from "../api";

export default function useFetchCategoriesImage() {
  const data = useQuery("contactsImage", () =>
    axios
      .get(`${BaseUrl}/contacts`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        const response = res.data.contacts.filter((e) => e.name !== null);
        const sort = response.sort((a, b) => {
          if (a.name !== null && b.name !== null) {
            return a.name.localeCompare(b.name);
          }
        });
        return sort;
      })
  );
  return data;
}
