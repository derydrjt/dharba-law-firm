export type TeamMember = {
  name: string
  role: string
  initials: string
  image: string
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Adv. Raka Dharmawan',
    role: 'Managing Partner',
    initials: 'RD',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Adv. Naila Pratami',
    role: 'Senior Counsel',
    initials: 'NP',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Adv. Damar Setiawan',
    role: 'Litigation Specialist',
    initials: 'DS',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Adv. Siti Rahma',
    role: 'Family & Corporate Law',
    initials: 'SR',
    image:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80',
  },
]

// TODO: konfirmasi ke klien untuk nama lengkap, bidang fokus, dan foto final tiap advokat.
