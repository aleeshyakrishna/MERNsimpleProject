import Table from 'react-bootstrap/Table';

function DarkExample() {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>index</th>
          <th>User name</th>
          <th>email id</th>
          <th>Actions</th>
          
        </tr>
      </thead>
      <tbody>
        
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default DarkExample;