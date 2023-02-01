export default function VehicleCard(props) {
  return (
    <>
      <div className="mb-4">{props.vehicleMake}</div>
      <div className="mb-4">{props.vehicleModel}</div>
      <div className="mb-4">{props.vehicleYear}</div>
      <div className="mb-4">{props.vehicleType}</div>
      <div className="mb-4">{props.vehiclefuelType}</div>
      <div className="mb-4">{props.vehiclePurchasePrice}</div>
      <div className="mb-4">{props.vehicleColor}</div>
      <div className="mb-4">{props.vehiclePremiumCharged}</div>
    </>
  );
}
