import { NextResponse } from "next/server";

import React from 'react'
import createSupabaseReqResClient from "../lib/createSupabaseReqResClient";

export default async function middleware(req) {
    const res = NextResponse.next();

    const supabase = createSupabaseReqResClient(req, res);
    
    return res
}
