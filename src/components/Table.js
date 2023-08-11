

const Table = (props) => {
  let opsCheck;
  return (
      <table>
       <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
        </thead>
        <tbody>
          {props.sat.map((data, id) => {if(data.operational === true) {opsCheck = "Active";} else {opsCheck = "Inactive";}
            return (
              <tr key={id}>
                <td>{data.name}</td>
                <td>{data.type}</td>
                <td>{data.launchDate}</td>
                <td>{opsCheck}</td>
            </tr>
            )
          })}
  </tbody>
      </table>
  );
};

export default Table;