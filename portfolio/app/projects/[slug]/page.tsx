export default async function BlogProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = await getProject(slug)
 
  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.content}</p>
    </div>
  )
}