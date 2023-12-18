export default function Tarea({ params }: { params: { slug: string } }) {
    return <div>My Post: {params.slug}</div>
  }