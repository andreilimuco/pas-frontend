import { useState } from "react";
import PolicyCard from "../components/PolicyCard";
import VehicleCard from "../components/VehicleCard";

export default function Policy() {
  const [policies, setPolicies] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  //   console.log(localStorage.getItem("token"));

  useState(() => {
    fetch(`${process.env.REACT_APP_API_URL}/policies`, {
      header: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPolicies(
          data.map((policy) => {
            return (
              <div key={policy.policyNum}>
                <PolicyCard
                  policyNumber={policy.policyNum}
                  effectiveDate={policy.effectiveDate}
                  expirationDate={policy.expirationDate}
                  phFName={policy.policyholder.firstName}
                  phLName={policy.policyholder.lastName}
                  phAddress={policy.policyholder.address}
                  phBirthDate={policy.policyholder.birthDate}
                  phLicenseNum={policy.policyholder.licenseNum}
                  phLicenseDateIssued={policy.policyholder.licenseDateIssued}
                />
              </div>
            );
          })
        );
      });
  }, []);

  useState(() => {
    fetch(`${process.env.REACT_APP_API_URL}/policies`, {
      header: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        let veh = "";
        data.map((policy) => {
          veh = policy.vehicles;
        });
        setVehicles(
          veh.map((vehicle, index) => {
            for (let i = 0; i < veh.length; i++) {
              return (
                <div key={index}>
                  <VehicleCard
                    vehicleMake={vehicle.make}
                    vehicleModel={vehicle.model}
                    vehicleYear={vehicle.year}
                    vehicleType={vehicle.type}
                    vehicleFuelType={vehicle.fuelType}
                    vehiclePurchasePrice={vehicle.purchasePrice}
                    vehicleColor={vehicle.color}
                    vehiclePremiumCharged={vehicle.premiumCharged}
                  />
                </div>
              );
            }
          })
        );
      });
  }, []);

  return (
    <>
      <div className="mx-auto max-w-6xl">
        <div>{policies}</div>
        <div>{vehicles}</div>
      </div>
    </>
  );
}
