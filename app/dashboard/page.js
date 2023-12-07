import { redirect } from 'next/navigation';
import { createSupabaseServerClient } from '../../lib/createSupabaseServerClient'
import StudentDashboard from './StudentDashboard'

async function page() {
  const supabase = createSupabaseServerClient();
  const { data: {session}, error } = await supabase.auth.getSession()

  //check if session exist
  if(!session){ return redirect('/') }
  return (
    <>
      <div>Dashboard</div>
      <StudentDashboard/>
    </>
  )
}

export default page