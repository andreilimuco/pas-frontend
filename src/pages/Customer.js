import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustomerCard from "../components/CustomerCard";

export default function Customer() {
  const [customers, setCustomers] = useState([]);


  // useEffect(() => {
  //   fetch("http://localhost:8080/customers")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setCustomers(
  //         data.map((customer) => {
  //           return (
  //             <div key={customer.accountNumber}>
  //               <CustomerCard
  //                 accountNumber={customer.accountNumber}
  //                 firstName={customer.firstName}
  //                 lastName={customer.lastName}
  //                 address={customer.address}
  //               />
  //             </div>
  //           );
  //         })
  //       );
  //     });
  // }, []);

  const getCustomers = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/customers`
      );
      const customers = response.data;

      
      setCustomers(
        customers.map((customer) => {
          return (
            <div key={customer.accountNum}>
              <CustomerCard
                accountNumber={customer.accountNum}
                firstName={customer.firstName}
                lastName={customer.lastName}
                address={customer.address}
              />
            </div>
          );
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCustomers();
  }, []);

  return (
    <>
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-4">{customers}</div>
      </div>
    </>
  );
}
