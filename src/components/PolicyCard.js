export default function PolicyCard(props) {
  return (
    <>
      <div className="mb-4">{props.policyNumber}</div>
      <div className="mb-4">{props.effectiveDate}</div>
      <div className="mb-4">{props.expirationDate}</div>
      <div className="mb-4">Policy holder details: </div>
      <div className="mb-4">{props.phFName}</div>
      <div className="mb-4">{props.phLName}</div>
      <div className="mb-4">{props.phAddress}</div>
      <div className="mb-4">{props.phBirthDate}</div>
      <div className="mb-4">{props.phLicenseNum}</div>
      <div className="mb-4">{props.phLicenseDateIssued}</div>
      <div className="mb-4">Vehicle details: </div>
      <div className="mb-4">{props.vehicleMake}</div>
    </>
  );
}
