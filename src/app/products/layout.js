export default function ProductLayout({ children }) {
  return (
    <>
      <div className="flex bg-blue-800 justify-center">
        <h3>Product header</h3>
      </div>
      {children}
      <div className="flex bg-blue-800 justify-center">
        <h3>Product footer</h3>
      </div>
    </>
  );
}
