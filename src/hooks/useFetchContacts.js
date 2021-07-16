import { useQuery } from "react-query";
import axios from "axios";
const token = "059c420e-7424-431f-b23b-af0ecabfe7b8";
export default function useFetchCategories() {
  const data = useQuery("contacts", () =>
    axios
      .get(`https://api-im.chatdaddy.tech/contacts`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log("res", res))
  );
  return data;
}
