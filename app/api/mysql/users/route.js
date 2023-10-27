import { NextRequest,NextResponse } from "next/server";
import { dbCredentials } from "@/app/ServerComponents/db";
import mysql from 'mysql2/promise'

const connectionParam = dbCredentials();

export async function GET(req) {
  const dbConnection = mysql.createConnection({
    host: (await connectionParam).host,
    //port: (await connectionParam).port,
    user: (await connectionParam).user,
    password: (await connectionParam).password,
    database: (await connectionParam).database
  });

  (await dbConnection).connect();

  const q = 'SELECT * FROM users'
  let values = []

  const results = (await dbConnection).query(q)

  ;(await dbConnection).end()

return NextResponse.json({dbConnection: results})
  
}