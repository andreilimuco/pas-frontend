export default function CustomerCard(props) {
  return (
    <>
      <div className="mb-4">{props.accountNumber}</div>
      <div className="mb-4">{props.firstName}</div>
      <div className="mb-4">{props.lastName}</div>
      <div className="mb-4">{props.address}</div>
    </>
  );
}
