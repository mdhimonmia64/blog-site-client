export const dynamic = 'force-dynamic'

export default async function AboutPage() {
  await new Promise((resolve) => setTimeout(resolve,4000))

  // throw new Error("Something went wrong!")

  return (
    <div>This is about component.</div>
  )
}
