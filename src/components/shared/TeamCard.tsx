import Image from 'next/image'

interface Props {
  name: string
  role: string
  initials: string
  color: string
  bio: string
  specialites: string[]
  photo?: string
}

export default function TeamCard({ name, role, initials, color, bio, specialites, photo }: Props) {
  return (
    <article className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
      {/* Photo / Avatar */}
      <div className="h-32 bg-gray-100 flex items-center justify-center relative">
        {photo ? (
          <Image src={photo} alt={`Portrait de ${name}`} fill className="object-cover" />
        ) : (
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-medium"
            style={{ backgroundColor: color }}
            aria-hidden="true"
          >
            {initials}
          </div>
        )}
      </div>
      {/* Info */}
      <div className="p-5">
        <h3 className="font-medium text-navy text-sm mb-0.5">{name}</h3>
        <p className="text-gold text-xs mb-3">{role}</p>
        <p className="text-gray-500 text-xs leading-relaxed mb-4">{bio}</p>
        <div className="flex flex-wrap gap-1.5">
          {specialites.map((s) => (
            <span key={s} className="text-[10px] bg-gold-pale text-gold-dark px-2 py-0.5 rounded">
              {s}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
