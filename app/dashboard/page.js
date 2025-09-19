import DashboardLayout from '../components/dashboardLayout'
import CourseCard from '../components/courseCard'

export default function DashboardPage() {
  const fakeCourses = [
    { title: 'Course A', description: 'Short summary', tags: ['Parent', 'Child'] },
    { title: 'Course B', description: 'Short summary', tags: ['Emotions'] },
  ]
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {fakeCourses.map((c, i) => <CourseCard key={i} {...c} />)}
      </div>
    </DashboardLayout>
  )
}
