import axios from "axios";
import { addProducts } from "../app/Slice/shoppingSlice";

// export const loadProducts = () => (dispatch, getState) => {
//   axios
//     .get(
//       "https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/products"
//     )
//     .then((response) => {
//       dispatch(addProducts(response.data));
//       // console.log(response.data);
//     });
// };
export const loadProducts = () => (dispatch, getState) => {
  const token = "Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo";

  fetch(
    "https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/products",
    {
      method: "get",
      headers: { Authorization: `Bearer ${token}` },
    }
  )
    .then((res) => res.json())
    .then((json) => dispatch(addProducts(json.products)));
};

// const token = "Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo";
//   const [result, setResult] = React.useState();
//   React.useEffect(() => {
//     fetch(
//       "https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/products",
//       {
//         method: "get",
//         headers: { Authorization: `Bearer ${token}` },
//       }
//     )
//       .then((res) => res.json())
//       .then((json) => setResult(json));
//   }, []);
