const Table = ({ data }) => {
  return (
    <table className="min-w-full bg-white border rounded-lg border-yellow-600">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b border-yellow-600  text-yellow-600 font-bold text-2xl">Hardware</th>
          <th className="py-2 px-4 border-b border-yellow-600 text-yellow-600 font-bold text-2xl">Software</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td className="py-2 px-4 border-b border-yellow-600">{row.column1}</td>
            <td className="py-2 px-4 border-b border-yellow-600">{row.column2}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;