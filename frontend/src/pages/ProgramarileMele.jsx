import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Papa from 'papaparse';
import * as XLSX from 'xlsx';

const ProgramarileMele = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        console.log(user.email)
        const vehicleTypes = ['atv1', 'atv2', 'atv3', 'atv4', 'bicicleta1', 'bicicleta2'];
        const allBookings = [];
        for (let vehicleType of vehicleTypes) {
          const response = await axios.get(`http://localhost:3001/rezervari/${vehicleType}/user/${user.email}`);
          const bookingsWithVehicleType = response.data.map(booking => ({...booking, vehicleType}));
          allBookings.push(...bookingsWithVehicleType);
        }
        setBookings(allBookings);
      } catch (error) {
        console.error('A aparut o eroare la preluarea rezervarilor:', error);
      }
    };

    fetchBookings();
  }, [user.email]);

  const downloadCSV = () => {
    const csv = Papa.unparse(bookings);
    const csvData = new Blob([csv], {type: 'text/csv;charset=utf-8;'});
    const csvURL = window.URL.createObjectURL(csvData);
    const tempLink = document.createElement('a');
    tempLink.href = csvURL;
    tempLink.setAttribute('download', 'rezervari.csv');
    tempLink.click();
  }

  const downloadXLSX = () => {
    const ws = XLSX.utils.json_to_sheet(bookings);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Rezervari");
    XLSX.writeFile(wb, 'rezervari.xlsx');
  }

  return (
    <div>
      <h1 className="text-color">Programarile Mele</h1>

      {bookings.map((booking, index) => (
        <div key={index}>
          <h2 className="text-color">{booking.vehicleType.toUpperCase()}</h2>
          <p className="text-color">
            <strong>Start Rezervare: </strong>
            {new Date(booking.startTime).toLocaleString()}
          </p>
          <p className="text-color">
            <strong>Sfarsit Rezervare: </strong>
            {new Date(booking.endTime).toLocaleString()}
          </p>
          <p className="text-color">
            <strong>Suma Ron: </strong>
            {booking.sumaRon}
          </p>
        </div>
      ))}

      <button onClick={downloadCSV}>Descarca CSV</button>
      <button onClick={downloadXLSX}>Descarca XLSX</button>
    </div>
  );
};

export default ProgramarileMele;
