import { useState, useEffect, useMemo } from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, Pagination} from "@nextui-org/react";
import { showCapstones } from "../ServerActions/showCapstones";

export default function CapstoneTable() {
  const [rows, setRows] = useState([]);
  const columns = [
    {
      key: "name",
      label: "COUNTRY",
    },
    {
      key: "continent",
      label: "CONTINENT",
    },
  ];
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  //total pages for pagination component
  const pages = Math.ceil(rows.length / rowsPerPage);

  //number of rows per pagination
  //adjust amount using const rowsPerPage
  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return rows.slice(start, end);
  }, [page, rows]);

  //fetch capstone list from supabase on render
  //result goes to const rows
  useEffect(() => {
    const getData = async () => {  
      const result = await showCapstones();
      setRows(result);
      }
    getData();
  }, []);

  return (
    <Table 
      isStriped 
      aria-label="Row of capstone papers"
      color="success"
      selectionMode="single"
      bottomContent={rows.length != 0 ?
        (<div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            color="secondary"
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>) : null
      }>
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>

      <TableBody emptyContent={"No rows to display"} items={items}>
        {(item) => (
          <TableRow key={item.name}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
