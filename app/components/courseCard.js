export default function CourseCard({ title='Title', description='Short description', tags=[] }) {
  return (
    <article className="bg-white rounded-lg shadow-sm p-4">
      <div className="h-40 bg-gray-100 rounded-md mb-4 flex items-center justify-center text-gray-400">Image</div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map(t => <span key={t} className="text-xs bg-gray-100 px-2 py-1 rounded">{t}</span>)}
      </div>
    </article>
  )
}
