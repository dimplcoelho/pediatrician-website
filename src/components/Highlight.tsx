/** Renders text where *starred* words are picked out in the accent colour, e.g. "Meet your *Pediatrician*". */
export default function Highlight({ text, className = 'text-accent' }: { text: string; className?: string }) {
  return (
    <>
      {text.split(/(\*[^*]+\*)/).map((part, i) =>
        part.startsWith('*') && part.endsWith('*') ? <span key={i} className={className}>{part.slice(1, -1)}</span> : part,
      )}
    </>
  )
}
