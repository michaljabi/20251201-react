
export function PageLayout({children, title = 'Tytuł strony'}) {
  return (
    <section>
        <h2>{title}</h2>
        {children}
    </section>
  )
}
