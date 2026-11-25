import { Award } from 'lucide-react'

export default function DoctorPortrait({ src = '/images/doctor-photo.jpg', alt = 'Doctor', badge, badgeSub }: { src?: string; alt?: string; badge?: string; badgeSub?: string }) {
  return (
    <div className="relative mx-auto w-full max-w-sm sm:max-w-md">
      <div className="overflow-hidden rounded-3xl border border-teal/10 bg-white p-2.5 shadow-soft">
        <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-[#e9eef0]">
          <img
            src={src}
            alt={alt}
            fetchPriority="high"
            className="h-full w-full object-cover object-top"
          />
        </div>
        {badge && (
          <div className="mt-3 flex items-center justify-between px-3 py-2">
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-teal/10 text-teal">
                <Award size={18} />
              </span>
              <div>
                <p className="text-sm font-bold text-teal">{badge} Experience</p>
                {badgeSub && <p className="text-xs text-muted">{badgeSub}</p>}
              </div>
            </div>
            <span className="rounded-full bg-sage/20 px-3 py-1 text-xs font-semibold text-teal-light">
              Verified Specialist
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
