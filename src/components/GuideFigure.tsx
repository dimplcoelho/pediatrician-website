/** A picture inside a guide, from a "![caption](url)" line in the body. */
export default function GuideFigure({ src, caption }: { src: string; caption: string }) {
  return (
    <figure className="not-prose my-8">
      <img src={src} alt={caption} loading="lazy" className="w-full rounded-2xl bg-ivory-deep object-cover sm:rounded-3xl" />
      {caption && <figcaption className="mt-2.5 text-center text-sm text-muted">{caption}</figcaption>}
    </figure>
  )
}
