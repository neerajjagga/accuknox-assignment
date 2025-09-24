import DashboardHeader from "../components/dashboard/DashboardHeader"
import DashboardLayout from "../components/dashboard/DashboardLayout"

const Dashboard = () => {
  return (
    <div className="w-full h-full">
        <DashboardHeader />

        <main>
          <DashboardLayout />
        </main>
    </div>
  )
}

export default Dashboard