"use client"
import styles from "./page.module.css"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/initSupabase"
import CapstoneCard from './ClientComponent/CapstoneCard'

export default function Home() {
  const [countries, setCountries] = useState([]);

  const fetchCountries = async () => {
    const { data: countries } = await supabase
      .from('countries')
      .select('*')
      .order('name', true);
    setCountries(countries);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <>
      <main className={styles.main}>
        {countries.map((country) => (
          <CapstoneCard key={country.name} countryID={country.id} countryName={country.name}/>
        ))}
      </main>
    </>
  )
}
