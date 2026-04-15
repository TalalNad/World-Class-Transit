import {
  FiHeart,
  FiTruck,
  FiUsers,
  FiShield,
  FiClock,
  FiMapPin,
} from 'react-icons/fi';
import { MdOutlineAccessible, MdOutlineLocalHospital } from 'react-icons/md';

export const services = [
  {
    id: 'medical-transport',
    icon: <MdOutlineLocalHospital />,
    title: 'Medical Transportation',
    description:
      'Safe, reliable rides to and from medical appointments, hospitals, clinics, and healthcare facilities. We understand the importance of timely healthcare access.',
  },
  {
    id: 'non-emergency',
    icon: <FiHeart />,
    title: 'Non-Emergency Medical Transport',
    description:
      'Comfortable, door-to-door non-emergency medical transportation for patients who need assistance getting to scheduled treatments and check-ups.',
  },
  {
    id: 'wheelchair',
    icon: <MdOutlineAccessible />,
    title: 'Wheelchair Accessible Services',
    description:
      'Fully ADA-compliant vehicles with wheelchair lifts and ramps. Our trained drivers ensure safe boarding and a comfortable ride for every passenger.',
  },
  {
    id: 'community',
    icon: <FiUsers />,
    title: 'Community Transit',
    description:
      'Connecting communities to essential destinations — grocery stores, pharmacies, social services, and more. Mobility for everyone.',
  },
  {
    id: 'facility-contracts',
    icon: <FiTruck />,
    title: 'Facility & Group Transport',
    description:
      'Dedicated fleet services for healthcare facilities, assisted living communities, and organizations. Reliable scheduling and professional service.',
  },
  {
    id: 'senior-transport',
    icon: <FiShield />,
    title: 'Senior Transportation',
    description:
      'Compassionate, patient transportation tailored for seniors. Our drivers are trained to assist elderly passengers with care and respect.',
  },
];

export const stats = [
  { value: '10K+', label: 'Rides Completed' },
  { value: '98%', label: 'On-Time Rate' },
  { value: '500+', label: 'Communities Served' },
  { value: '24/7', label: 'Availability' },
];

export const whyChooseUs = [
  {
    icon: <FiShield />,
    title: 'Safety First',
    description: 'All vehicles inspected regularly. Drivers background-checked and certified.',
  },
  {
    icon: <FiClock />,
    title: 'Always On Time',
    description: 'Reliable scheduling with real-time tracking and communication.',
  },
  {
    icon: <FiHeart />,
    title: 'Compassionate Care',
    description: "We treat every passenger like family. That's our promise.",
    iconClassName: 'icon-red',
  },
  {
    icon: <FiMapPin />,
    title: 'Wide Coverage',
    description: 'Extensive service area connecting urban, suburban, and rural communities.',
  },
];

export const companyInfo = {
  name: 'World Class Transit Group',
  tagline: 'People-First Transportation',
  phone: '(555) 123-4567',
  email: 'info@wctransitgroup.com',
  address: 'Elgin, IL',
  social: {
    facebook: '#',
    linkedin: '#',
    instagram: '#',
    twitter: '#',
  },
};
