"use client";

/**
 * Contacts page: data grid with toolbar for filtering/export.
 */
import { Box } from "@mui/material";
import { DataGrid, GridToolbar, type GridColDef } from "@mui/x-data-grid";
import { mockDataContacts } from "@/data/mockData";
import Header from "@/components/Header";
import type { Contact } from "@/types";

export default function Contacts() {
  const columns: GridColDef<Contact>[] = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "address", headerName: "Address", flex: 1 },
    { field: "city", headerName: "City", flex: 1 },
    { field: "zipCode", headerName: "Zip Code", flex: 1 },
  ];

  return (
    <Box className="m-5">
      <Header
        title="CONTACTS"
        subtitle="List of Contacts for Future Reference"
      />
      <Box
        className="mt-10 h-[75vh]"
        sx={{
          "& .MuiDataGrid-root": { border: "none" },
          "& .MuiDataGrid-cell": { borderBottom: "none" },
          "& .name-column--cell": { color: "var(--token-greenAccent-300)" },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "var(--token-blueAccent-700)",
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: "var(--token-primary-400)",
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: "var(--token-blueAccent-700)",
          },
          "& .MuiCheckbox-root": {
            color: "var(--token-greenAccent-200) !important",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: "var(--token-grey-100) !important",
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          slots={{ toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
}
