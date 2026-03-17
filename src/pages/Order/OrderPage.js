import { useLocation } from "react-router-dom";
import { OrderSuccess, OrderFail} from "./components/index"

export const OrderPage = () => {
    const { state } = useLocation();
  return (
    <main> 
      order page
      {
        state.status ? <OrderSuccess data={ state.data} /> : <OrderFail/>
      }
    </main>
  )
}

