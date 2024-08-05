import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material';
import { DataContext } from '../../context/DataContext';

const DroneOverview = () => {
  const { data } = useContext(DataContext);

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Drone Fleet Overview
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell> {/* Added Actions column */}
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map(drone => (
            <TableRow key={drone.id}>
              <TableCell>
                <Link to={`/drone/${drone.id}`} className="text-blue-500 hover:underline">
                  {drone.id}
                </Link>
              </TableCell>
              <TableCell>{drone.status}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link} 
                  to={`/drone/${drone.id}`}
                >
                  See Details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DroneOverview;
